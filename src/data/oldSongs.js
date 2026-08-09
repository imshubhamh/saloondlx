// Curated golden-era Bollywood classics. Each `youtubeId` was verified via
// search against real, currently-live official/label uploads so the radio
// plays actual full-length songs (not 30-second previews).
// Thumbnail artwork is pulled directly from YouTube's public thumbnail CDN
// for the same video — no separate image hosting needed.
export const OLD_SONGS = [
  {
    id: "lag-ja-gale",
    youtubeId: "3JiM7S_Fd2U",
    title: "Lag Ja Gale",
    artist: "Lata Mangeshkar",
    movie: "Woh Kaun Thi",
    year: 1964,
  },
  {
    id: "mere-sapno-ki-rani",
    youtubeId: "Nw7lcCNSYy8",
    title: "Mere Sapno Ki Rani",
    artist: "Kishore Kumar",
    movie: "Aradhana",
    year: 1969,
  },
  {
    id: "yeh-dosti",
    youtubeId: "5x8HLW0a36g",
    title: "Yeh Dosti Hum Nahi Todenge",
    artist: "Kishore Kumar, Manna Dey",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: "mera-joota-hai-japani",
    youtubeId: "exp7976fkOE",
    title: "Mera Joota Hai Japani",
    artist: "Mukesh",
    movie: "Shree 420",
    year: 1955,
  },
  {
    id: "pyar-kiya-to-darna-kya",
    youtubeId: "dRLJ15dXbEk",
    title: "Pyar Kiya To Darna Kya",
    artist: "Lata Mangeshkar",
    movie: "Mughal-E-Azam",
    year: 1960,
  },
  {
    id: "chaudhvin-ka-chand",
    youtubeId: "5Ud2rsMT5ng",
    title: "Chaudhvin Ka Chand Ho",
    artist: "Mohammed Rafi",
    movie: "Chaudhvin Ka Chand",
    year: 1960,
  },
  {
    id: "roop-tera-mastana",
    youtubeId: "o7Jnp949e2Y",
    title: "Roop Tera Mastana",
    artist: "Kishore Kumar",
    movie: "Aradhana",
    year: 1969,
  },
  {
    id: "yeh-sham-mastani",
    youtubeId: "xP2OcqFcKSY",
    title: "Yeh Sham Mastani",
    artist: "Kishore Kumar",
    movie: "Kati Patang",
    year: 1971,
  },
  {
    id: "ajeeb-dastan-hai-yeh",
    youtubeId: "AEih8GxyezU",
    title: "Ajeeb Dastan Hai Yeh",
    artist: "Lata Mangeshkar",
    movie: "Dil Apna Aur Preet Parai",
    year: 1960,
  },
  {
    id: "chalte-chalte-mere-yeh-geet",
    youtubeId: "wzYGh5-2sc4",
    title: "Chalte Chalte Mere Yeh Geet",
    artist: "Kishore Kumar",
    movie: "Chalte Chalte",
    year: 1976,
  },
  {
    id: "gaata-rahe-mera-dil",
    youtubeId: "MUMtRyWHeFI",
    title: "Gaata Rahe Mera Dil",
    artist: "Kishore Kumar, Lata Mangeshkar",
    movie: "Guide",
    year: 1965,
  },
];

export function artworkFor(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export const PLAYLIST_LINKS = {
  spotify: "https://open.spotify.com/",
  ytMusic: "https://music.youtube.com/",
};
