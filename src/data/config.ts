import {
  ClientOption,
  ContactOption,
  FooterOption,
  HomeOption,
  ProjectOption,
  ServiceOption,
} from "@/shared/types";

// ==================[ App Info ]================== //
export const app = {
  title: "Ilyas Chenouf",

  description:
    "Experienced web developer specializing in front-end development using JavaScript, Node.js, React, Next.js, and Tailwind CSS. I create responsive, SEO-friendly websites and applications tailored to your business needs. Contact me for high-quality web development services.",
} as const;
//

// ==================[ theme configuration ]================== //

// -------[ custom cursor ]------- //
export const custom_cursor = true;
//
//
//
// -------[ theme ]------- //
export const dark_theme = false;
//
//
//
// -------[ smooth scrolling & scrollbar ]------- //
export const smooth_scrolling = true;
export const smooth_scrolling_duration = 1.5; // in seconds
//
//
//
// -------[ home section ]------- //
/* options:
1 - home-1
2 - home-2
2 - home-3
*/
export const home_option: HomeOption = "home-2";
//
//
//
// -------[ clients ]------- //
/* options:
1 - slider
2 - stacked-sticky-cards
*/
export const client_option: ClientOption = "slider";
//
//
//
// -------[ projects/portfolio section ]------- //
/* options:
1 - stacked-sticky-cards
2 - stacked-cards
3 - side-cards
4 - cards
5 - 3-cards
6 - list
7 - cinematic
*/
export const projects_option: ProjectOption = "stacked-sticky-cards";
//
//
//
// -------[ services section ]------- //
/* options:
1 - cards
2 - list
3 - slider
*/
export const services_option: ServiceOption = "cards";
//
//
//
// -------[ contact section ]------- //
/* options:
1 - contact-1
2 - contact-2
*/
export const contact_option: ContactOption = "contact-2";
//
//
//
// -------[ footer section ]------- //
/* options:
1 - footer-1
2 - footer-2
*/
export const footer_option: FooterOption = "footer-1";
