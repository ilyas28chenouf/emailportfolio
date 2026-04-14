import { useEffect } from "react";
import gsap from "gsap";

interface Options {
  scale?: number;
  start?: string;
}

export function useStackedCards(
  container: React.RefObject<HTMLDivElement | null>,
  options?: Options
) {
  const { scale = 0.85, start = "top 64px" } = options || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils
        .toArray(".stacked-card")
        .slice(0, -1) as HTMLDivElement[];

      cards.forEach((card) => {
        gsap.to(card, {
          scale,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: start,
            scrub: 0.3,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);
}
