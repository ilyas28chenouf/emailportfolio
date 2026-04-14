"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function GlobalGsapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const fillTexts = document.querySelectorAll(".fill-text");
    const arrows = document.querySelectorAll(".arrow");
    const separators = document.querySelectorAll(".separator");
    const zoomoutImages = document.querySelectorAll(".zoom-out-image");

    const ctx = gsap.context(() => {
      // fill-text
      fillTexts.forEach((text) => {
        gsap.to(text, {
          ease: "power1.inOut",
          backgroundSize: "100% 100%",
          scrollTrigger: {
            trigger: text,
            end: "bottom center",
            scrub: 1.5,
          },
        });
      });
      // arrow-down
      arrows.forEach((a) => {
        gsap.to(a, {
          ease: "power1.inOut",
          rotate: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: a,
            end: "bottom center",
            scrub: 1.5,
          },
        });
      });
      // separators
      separators.forEach((a) => {
        gsap.to(a, {
          ease: "power1.inOut",
          scaleX: 1,
          scrollTrigger: {
            trigger: a,
            scrub: 3,
            end: "bottom center",
          },
        });
      });
      // zoom out images
      zoomoutImages.forEach((img) => {
        gsap.to(img, {
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: img,
            scrub: 1.5,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
