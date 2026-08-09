import { useEffect, useRef, useState, useCallback } from "react";

let apiPromise = null;

/**
 * Loads the YouTube IFrame Player API script exactly once, no matter how
 * many player instances request it, and resolves with the global `YT`
 * namespace once it's ready.
 */
function loadYouTubeAPI() {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") previous();
      resolve(window.YT);
    };
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });

  return apiPromise;
}

/**
 * Drives a hidden YouTube IFrame player for full-length track playback
 * (not a 30-second preview). `containerId` must match an element already
 * present in the DOM. `initialVideoId` seeds the very first video; later
 * changes are applied via the returned `loadVideo` function so the same
 * player instance is reused across the whole queue instead of being
 * recreated per track.
 *
 * `autoplayMuted`: when true, playback starts automatically (muted, so
 * every browser's autoplay policy allows it) the moment the player is
 * ready — callers can then unmute on the user's first interaction.
 *
 * `onError`: called with the YouTube error code whenever a video can't
 * play (removed, region-blocked, embedding disabled, etc.) so the caller
 * can skip to the next track instead of silently getting stuck.
 */
export default function useYouTubePlayer(
  containerId,
  initialVideoId,
  { onEnded, onError, autoplayMuted = false } = {}
) {
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(autoplayMuted);
  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  useEffect(() => {
    let cancelled = false;

    loadYouTubeAPI().then((YT) => {
      if (cancelled) return;
      playerRef.current = new YT.Player(containerId, {
        videoId: initialVideoId,
        width: "1",
        height: "1",
        playerVars: {
          autoplay: autoplayMuted ? 1 : 0,
          mute: autoplayMuted ? 1 : 0,
          controls: 0,
          disablekb: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
        },
        events: {
          onReady: (e) => {
            setReady(true);
            setDuration(e.target.getDuration());
            if (autoplayMuted) {
              e.target.mute();
              e.target.playVideo();
            }
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
            if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
            if (e.data === YT.PlayerState.ENDED) {
              setPlaying(false);
              onEndedRef.current && onEndedRef.current();
            }
          },
          onError: (e) => {
            // 2 = invalid id, 5 = HTML5 error, 100 = removed/private,
            // 101 / 150 = embedding disabled by the uploader.
            onErrorRef.current && onErrorRef.current(e.data);
          },
        },
      });
    });

    const interval = setInterval(() => {
      const p = playerRef.current;
      if (p && typeof p.getCurrentTime === "function") {
        setCurrentTime(p.getCurrentTime());
        const d = p.getDuration();
        if (d) setDuration(d);
      }
    }, 400);

    return () => {
      cancelled = true;
      clearInterval(interval);
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
    };
    // Player is created once; track changes go through loadVideo() below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerId]);

  const loadVideo = useCallback((videoId, autoplay = true) => {
    const p = playerRef.current;
    if (!p) return;
    if (autoplay && typeof p.loadVideoById === "function") {
      p.loadVideoById(videoId);
    } else if (typeof p.cueVideoById === "function") {
      p.cueVideoById(videoId);
    }
    setCurrentTime(0);
  }, []);

  const play = useCallback(() => {
    playerRef.current?.playVideo?.();
  }, []);

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo?.();
  }, []);

  const toggle = useCallback(() => {
    if (playing) pause();
    else play();
  }, [playing, play, pause]);

  const seek = useCallback((time) => {
    playerRef.current?.seekTo?.(time, true);
    setCurrentTime(time);
  }, []);

  const mute = useCallback(() => {
    playerRef.current?.mute?.();
    setMuted(true);
  }, []);

  const unmute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    p.unMute?.();
    // Some browsers still refuse unmuted audio unless the player is also
    // actively playing at the moment of unmuting.
    p.playVideo?.();
    setMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    if (muted) unmute();
    else mute();
  }, [muted, mute, unmute]);

  return {
    ready,
    playing,
    currentTime,
    duration,
    muted,
    loadVideo,
    play,
    pause,
    toggle,
    seek,
    mute,
    unmute,
    toggleMute,
  };
}
