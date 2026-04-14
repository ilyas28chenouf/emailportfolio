import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollStaggerOptions {
  selector: string;
  start?: string;
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  stagger?: number;
  duration?: number;
  ease?: string;
}

const useScrollStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollStaggerOptions
): React.RefObject<T | null> => {
  const {
    selector,
    start = "top 85%",
    fromVars = { opacity: 0, y: 100 },
    toVars = { opacity: 1, y: 0 },
    stagger = 0.1,
    duration = 0.8,
    ease = "power2.out",
  } = options;

  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll(
        selector
      ) as NodeListOf<HTMLElement>;

      if (elements.length === 0) return;

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(elements, fromVars, {
        ...toVars,
        duration,
        stagger,
        ease,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};

export default useScrollStaggerAnimation;
