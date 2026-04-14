import { ru } from "zod/locales";

// ==================[ Contact Info ]================== //
export const contact_info = [
  // 1
  {
    title: {
      en: "Phone",
      ru: "Телефон",
    },
    info: "+7 (931) 214-19-08",
  },

  // 2
  {
    title: {
      en: "Email",
      ru: "Электронная почта",
    },
    info: "ilyaschenouf@yandex.ru",
  },

  // 3
  {
    title: {
      en: "Location",
      ru: "Местоположение",
    },
    info: "Saint Petersburg, Russia",
  },
] as const;
//

// ==================[ Social Links ]================== //
export const social_links = [
  // 1
  {
    name: "github",
    link: "https://github.com/ilyas28chenouf",
  },

] as const;
//
