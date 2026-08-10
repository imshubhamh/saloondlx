
import { motion } from "framer-motion";
import RadioBar from "./RadioBar.jsx";
import useLiveClock from "../hooks/useLiveClock.js";
import useLiveListeners from "../hooks/useLiveListeners.js";
import { PLAYLIST_LINKS } from "../data/oldSongs.js";
import barberHero from "../assets/barber-hero.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const clock = useLiveClock();
  const listeners = useLiveListeners(50, 8);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <img
        src={barberHero}
        alt="SaloonDLX professional barber and salon"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =====================================================
          OVERLAY
          Top darker for navbar
          Center slightly dark for Hindi text
          Bottom darker for RadioBar
      ====================================================== */}

      <div className="absolute inset-0 bg-black/10" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/45
          via-black/5
          to-black/45
        "
      />

      {/* =====================================================
    RIGHT SIDE INFO CARD
    Made smaller / more compact on small screens:
    - narrower width on mobile (w-[128px] -> grows via sm/md breakpoints)
    - tighter padding, smaller text, smaller gaps on mobile
    - "Currently listening" label shortens on mobile
===================================================== */}

<div
  className="
    absolute
    right-3
    top-[95px]
    z-20
    w-[128px]
    xs:w-[150px]
    sm:right-8
    sm:top-[125px]
    sm:w-[235px]
    lg:right-[max(2rem,calc((100vw-1280px)/2))]
  "
>
  <div
    className="
      rounded-xl
      sm:rounded-2xl
      border
      border-white/20
      bg-black/20
      p-2.5
      sm:p-4
      text-white
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      backdrop-blur-xl
    "
  >

    {/* ================= CLOCK ================= */}

    <div className="flex items-center justify-between gap-1">

      <div className="min-w-0">
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 truncate">
          Local Time
        </p>

        <span
          className="
            mt-0.5
            sm:mt-1
            block
            font-display
            text-xs
            sm:text-lg
            font-semibold
            tabular-nums
            drop-shadow-lg
            truncate
          "
        >
          {clock}
        </span>
      </div>

      {/* Live indicator */}

      <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 shrink-0">
        <span className="absolute h-2 w-2 sm:h-3 sm:w-3 animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-400" />
      </span>

    </div>


    {/* ================= DIVIDER ================= */}

    <div className="my-2 sm:my-3 h-px bg-white/15" />


    {/* ================= LIVE USERS ================= */}

    <div className="flex items-center justify-between gap-1">

      <div className="min-w-0">
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 truncate">
          Currently
        </p>

        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm font-semibold truncate">
          {listeners} <span className="hidden xs:inline">people</span> online
        </p>
      </div>

      <div
        className="
          rounded-full
          bg-emerald-400/15
          px-1.5
          sm:px-2.5
          py-0.5
          sm:py-1
          text-[8px]
          sm:text-[10px]
          font-medium
          text-emerald-300
          ring-1
          ring-inset
          ring-emerald-400/20
          shrink-0
        "
      >
        LIVE
      </div>

    </div>


    {/* ================= DIVIDER ================= */}

    <div className="my-2 sm:my-3 h-px bg-white/15" />


    {/* ================= MUSIC ================= */}

    <div>

      <p className="mb-1.5 sm:mb-2 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60">
        Listen with
      </p>

      <div className="flex gap-1.5 sm:gap-2">

        {/* Spotify */}

        <a
          href={PLAYLIST_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-1
            items-center
            justify-center
            rounded-lg
            sm:rounded-xl
            bg-white/10
            px-1.5
            sm:px-3
            py-1.5
            sm:py-2
            text-[9px]
            sm:text-xs
            font-medium
            transition-all
            hover:bg-white/20
          "
        >
          Spotify
          <span className="ml-0.5 sm:ml-1 opacity-60">↗</span>
        </a>


        {/* YouTube Music */}

        <a
          href={PLAYLIST_LINKS.ytMusic}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            flex-1
            items-center
            justify-center
            rounded-lg
            sm:rounded-xl
            bg-white/10
            px-1.5
            sm:px-3
            py-1.5
            sm:py-2
            text-[9px]
            sm:text-xs
            font-medium
            transition-all
            hover:bg-white/20
          "
        >
          <span className="hidden xs:inline">YT&nbsp;Music</span>
          <span className="xs:hidden">YT</span>
          <span className="ml-0.5 sm:ml-1 opacity-60">↗</span>
        </a>

      </div>

    </div>

  </div>
</div>

      {/* =====================================================
          HERO CONTENT

          IMPORTANT:
          pt-[155px] keeps content below fixed navbar
      ====================================================== */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-7xl
          items-center
          justify-center
          px-4
          sm:px-6
          pb-20
          pt-[100px]
          text-center
          sm:pb-32
          sm:pt-[170px]
        "
      >

        <div className="max-w-4xl">
        <h1
          className="
            mt-4
            font-hindi
            text-[clamp(2.75rem,13vw,8rem)]
            font-bold
            leading-[0.95]
            tracking-wide
            text-white
            drop-shadow-[0_4px_0_rgba(70,35,10,0.5)]
            drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]
          "
        >
          <span className="inline-block -rotate-6">
            सैलून
          </span>

          <br />

          <span className="inline-block rotate-1">
            डीलक्स
          </span>
      </h1>

          {/* ----- */}

          {/* Small description */}
          <p
            className="
              mx-auto
              mt-6
              sm:mt-7
              max-w-md
              text-xs
              sm:text-sm
              font-medium
              leading-relaxed
              text-white/90
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]
              sm:text-base
            "
          >
            अपना समय बचाइए — पहले से अपॉइंटमेंट बुक कीजिए।
          </p><br />
          <hr />

        </div>
      </motion.div>

      {/* =====================================================
          RADIO BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-4
          left-0
          right-0
          z-30
          flex
          justify-center
          px-3
          sm:bottom-8
          sm:px-6
        "
      >
        <RadioBar />
      </motion.div>

    </section>
  );
}