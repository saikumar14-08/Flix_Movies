export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/US-en-20250203-TRIFECTA-perspective_27777f6b-02df-44af-bd1d-0bd4efdf3345_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w300/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
  { identifier: "te", name: "Telugu" },
  { identifier: "ta", name: "Tamil" },
  { identifier: "bn", name: "Bengali" },
  { identifier: "mr", name: "Marathi" },
  { identifier: "gu", name: "Gujarati" },
  { identifier: "kn", name: "Kannada" },
  { identifier: "ml", name: "Malayalam" },
  { identifier: "fr", name: "French" },
  { identifier: "de", name: "German" },
  { identifier: "zh", name: "Chinese" },
  { identifier: "ja", name: "Japanese" },
  { identifier: "ko", name: "Korean" },
];

export const GPT_KEY = process.env.REACT_APP_GPT_KEY;
