// ----- option types ----- //
export type HomeOption = "home-1" | "home-2" | "home-3";

export type ClientOption = "stacked-sticky-cards" | "slider";

export type ProjectOption =
  | "stacked-cards"
  | "stacked-sticky-cards"
  | "cards"
  | "3-cards"
  | "side-cards"
  | "list"
  | "cinematic";

export type ServiceOption = "cards" | "list" | "slider";

export type ContactOption = "contact-1" | "contact-2";

export type FooterOption = "footer-1" | "footer-2";

// ----- options ----- //
export const homeOptions: HomeOption[] = ["home-1", "home-2", "home-3"];

export const clientCardOptions: ClientOption[] = [
  "stacked-sticky-cards",
  "slider",
];

export const projectOptions: ProjectOption[] = [
  "stacked-cards",
  "stacked-sticky-cards",
  "cards",
  "3-cards",
  "list",
  "side-cards",
  "cinematic",
];

export const serviceOptions: ServiceOption[] = ["cards", "list"];

export const contactOptions: ContactOption[] = ["contact-1", "contact-2"];

export const footerOptions: FooterOption[] = ["footer-1", "footer-2"];
