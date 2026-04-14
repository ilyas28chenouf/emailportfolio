"use client";

import MaxWidthWrapper from "../../global/MaxWidthWrapperHeroSecion";
import { home_data } from "@/data/home2";
import Image from "next/image";
import HireMeButton from "../HireMeButton";
import HeroName from "../HeroName";
import Section from "../../global/Section";
import SocialLinks from "../../global/SocialLinks";
import ArrowButtonNav from "@/components/ui/ArrowButtonNav";
import Achievements from "../Achievements";
import PortfolioOverviewSubSection from "@/components/sections/PortfolioOverviewSubSection";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HeroText = ({ className }: { className?: string }) => {
  const { t } = useLanguage();

  return (
    <div className={cn("space-y-16 flex-1 lg:mb-0 mb-16", className)}>
      <h1 className="2xl:text-[6.5vw] 2xl:leading-[6.5vw] text-[clamp(35px,7vw,7vw)] leading-[clamp(40px,7vw,7vw)] text-query overflow-hidden">
        <span className="slide-up block ">{t(home_data.personal.job)}</span>
      </h1>

      <div className="flex 2xl:flex-row flex-col 2xl:items-center md:items-start items-center md:justify-start justify-center lg:gap-16 gap-8 mb-0">
        <SocialLinks theme />
        <div className="lg:mx-0 mx-auto">
          <ArrowButtonNav text={t(home_data.hero.letsTalk)} section="contact" />
        </div>
      </div>

      <p className="text-(--text-primary)! text-xl 2xl:block hidden mt-16 overflow-hidden">
        <span className="slide-up block">{t(home_data.personal.location)}</span>
      </p>
    </div>
  );
};

const Home2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        ease: "none",
        y: 300,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Section
        id="home"
        className="pt-0! pb-0! dark:bg-(--color-landing)! min-h-auto! overflow-hidden"
        separator={false}
      >
        <div ref={containerRef}>
          <MaxWidthWrapper
            width="wide"
            className="mb-4 pt-4 flex lg:flex-row flex-col gap-16 relative"
          >
            <div className="absolute top-4 3xl:right-150 right-100 z-20 sm:block hidden">
              <LanguageSwitcher variant="dark" />
            </div>

            <div className="flex items-center h-fit">
              <HeroText className="lg:block hidden" />
              <HireMeButton theme className="2xl:block hidden" />
            </div>

            <div className="relative lg:size-[406px] size-full z-10">
              <Image
                src={home_data.personal.image}
                alt={t(home_data.personal.name)}
                fill
                className="object-cover -z-10"
                sizes="75vw"
              />
            </div>
          </MaxWidthWrapper>

          <div className="space-y-4 sticky top-0">
            <div className="h-2 bg-(--bg-primary-inverse) -z-1" />
            <HeroName />
            <div className="h-2 bg-(--bg-primary-inverse) -z-1" />
            <HeroText className="lg:hidden flex flex-col space-y-0 gap-8 items-center" />
            <div className="lg:hidden flex flex-col items-center justify-center gap-6">
              <div className="size-48 relative">
                <Image
                  src={home_data.personal.image}
                  alt={t(home_data.personal.name)}
                  fill
                  className="object-cover -z-10 rounded-[20px]"
                  sizes="75vw"
                />
              </div>

              <HireMeButton theme />
            </div>
          </div>
        </div>
      </Section>

      <Achievements />
      <PortfolioOverviewSubSection />
    </div>
  );
};

export default Home2;
