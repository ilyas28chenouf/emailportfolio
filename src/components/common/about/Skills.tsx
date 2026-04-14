"use client";
import { skills, titles } from "@/data/about2";
import AboutContent from "./AboutContent";
import CountTitle from "../global/CountTitle";
import useScrollStaggerAnimation from "@/hooks/useScrollStaggerAnimation";
import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
  const { lang, t } = useLanguage();

  const containerRef = useScrollStaggerAnimation<HTMLDivElement>({
    selector: ".progress",
    fromVars: { scaleX: 0 },
    toVars: {
      duration: 2,
      scaleX: 1,
    },
  });

  return (
    <AboutContent
      titleChild={
        <>
          {t(titles.my)} <br /> {t(titles.skills)}
        </>
      }
      sticky
    >
      <div className="space-y-8 mt-2" ref={containerRef}>
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-1 rounded-full text-xl group border-2 border-(--border) hover:border-(--text-primary) transition-colors overflow-hidden"
          >
            <div className="relative flex justify-center items-center gap-8 p-4 overflow-hidden rounded-full font-normal sm:text-3xl">
              <div
                className="absolute h-full bg-(--bg-primary-inverse) left-0 top-0 progress origin-left rounded-full"
                style={{ width: `${s.progress}%` }}
              />

              <div className="flex gap-4 z-1 mix-blend-difference justify-center">
                <CountTitle
                  idx={i}
                  className="font-normal text-(--color-primary-fixed)! text-2xl"
                />
                <h1 className="line-clamp-1 mix-blend-difference text-(--color-primary-fixed)!">
                  {s.skill[lang as keyof typeof s.skill]}
                </h1>
              </div>

              {/* <span className="z-1 mix-blend-difference text-(--color-primary-fixed) md:text-2xl text-xl">
                {s.progress}%
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default Skills;