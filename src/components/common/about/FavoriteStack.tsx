"use client";
import { titles, tool_images } from "@/data/about2";
import AboutContent from "./AboutContent";
import Image from "next/image";
import useScrollStaggerAnimation from "@/hooks/useScrollStaggerAnimation";
import { useLanguage } from "@/context/LanguageContext";

const FavoriteStack = () => {
  const {  t } = useLanguage();
  const containerRef = useScrollStaggerAnimation<HTMLDivElement>({
    selector: ".tool",
    fromVars: { opacity: 0, y: 100 },
    toVars: {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    },
  });

  return (
    <AboutContent
      titleChild={
        <>
          {t(titles.my2)} <br /> {t(titles.tech_stack)}
          </>
      }
    >
      <div
        className="grid 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-4 grid-cols-4 gap-8 mt-2"
        ref={containerRef}
      >
        {tool_images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square flex-center group tool rounded-full border border-primary"
          
          >
            <Image
              src={img}
              alt="tool"
              width={48}
              height={48}
              className="duration"
            />
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default FavoriteStack;
