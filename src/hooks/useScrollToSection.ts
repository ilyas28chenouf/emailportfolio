import { getLenis } from "@/context/SmoothScrollingProvider";

export const useScrollToSection = () => {
  const lenis = getLenis();
  const scrollTo = (id: string, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY + offset;

    lenis?.stop();

    window.scrollTo({
      top: id === "home" ? 0 : top,
      behavior: "smooth",
    });

    lenis?.start();
  };

  return scrollTo;
};
