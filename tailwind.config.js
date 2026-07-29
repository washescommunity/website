/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-hero": "url(/assets/banners/banner-hero-home.svg)",
        "teste-foto" : "url(/assets/imgs/logo_washes.svg)",
        // Altere o caminho da nova foto do local do próximo evento abaixo
        "banner-hero-WASHES2026":"url(/assets/banners/banner-hero-WASHES2027.jpg)",
        "banner-hero-WASHES2026":"url(/assets/banners/banner-hero-WASHES2026.jpg)",
        "banner-hero-WASHES2025":"url(/assets/banners/banner-hero-WASHES2025.jpg)",
        "banner-hero-WASHES2024":"url(/assets/banners/banner-hero-WASHES2024.jpg)",
        "banner-hero-WASHES2023":"url(/assets/banners/banner-hero-WASHES2023.jpg)",
        "banner-hero-WASHES2022":"url(/assets/banners/banner-hero-WASHES2022.jpg)",
        "banner-hero-WASHES2021":"url(/assets/banners/banner-hero-WASHES2020-2021.jpg)",
        "banner-hero-WASHES2020":"url(/assets/banners/banner-hero-WASHES2020-2021.jpg)",
        "banner-hero-WASHES2019":"url(/assets/banners/banner-hero-WASHES2019.jpg)",
        "banner-hero-WASHES2018":"url(/assets/banners/banner-hero-WASHES2018.jpg)",
        "banner-hero-WASHES2017":"url(/assets/banners/banner-hero-WASHES2017.jpg)",
        "banner-hero-WASHES2016":"url(/assets/banners/banner-hero-WASHES2016.jpg)",
        
        "feed-insta-1": "url(/assets/feedInstaImages/img001.jpg)",
        "feed-insta-2": "url(/assets/feedInstaImages/img002.jpg)",
        "feed-insta-3": "url(/assets/feedInstaImages/img003.jpg)",
        "feed-insta-4": "url(/assets/feedInstaImages/img004.jpg)",
        "feed-insta-5": "url(/assets/feedInstaImages/img005.jpg)",
      }
    },
  },
  plugins: [],
}