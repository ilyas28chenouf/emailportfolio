"use client";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services,titles } from "@/data/services";
import CountTitle from "../../global/CountTitle";
import Image from "next/image";
import {
  ArrowLeftSVG,
  ArrowRightSVG,
  ArrowTopRightSVG,
} from "@/components/arrows/Arrows";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useServiceContext } from "@/context/ServiceContext";
import FillText from "../../global/FillText";
import GetServiceButton from "../GetServiceButton";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const ServiceSlider = () => {
  const { lang, t } = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const scrollDistance = section.scrollWidth - window.innerWidth;

      gsap.to(section, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const { setServiceToggle, setServiceIdx } = useServiceContext();
  const scrollTo = useScrollToSection();

  const getService = (i: number) => {
    scrollTo("contact-form");
    setServiceIdx(i);
    setServiceToggle((p) => !p);
  };

  return (
    <div
      ref={triggerRef}
      className="relative overflow-hidden border-y border-(--border)"
    >
      <div
        ref={sectionRef}
        className="flex h-screen items-center w-max relative"
      >
        <div className="h-screen w-screen relative flex-center">
          <ArrowRightSVG className="absolute right-16 top-16" />
          <ArrowRightSVG className="absolute right-16 bottom-16" />
          <ArrowRightSVG className="absolute left-16 top-16" />
          <ArrowRightSVG className="absolute left-16 bottom-16" />
          <div className="flex flex-col items-end">
            <div className="flex justify-between w-full items-end">
              <p className="text-xl uppercase flex gap-2 items-center text-center justify-center">
                <span className="size-3.5 bg-(--text-primary) rounded-full " />
                {t(titles.services)}
              </p>

              <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl mr-2 font-secondary">
                01 —{" "}
                {services.length < 10 ? `0${services.length}` : services.length}
              </h1>
            </div>

            <FillText className="lg:text-[13.5rem] md:text-9xl text-7xl text-center font-semibold">
             {t(titles.services)}
            </FillText>
          </div>
        </div>

        {services.map((el, i) => (
          <div
            key={i}
            className="lg:w-[50vw] w-screen relative clickable cursor-pointer flex justify-between flex-col h-screen border-x py-16 px-8 border-(--border) group bg-(--bg-secondary)"
            onClick={() => getService(i)}
          >
            <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 aspect-square xl:size-[400px] lg:size-[300px] size-[200px] lg:group-hover:scale-y-100 origin-top lg:group-hover:opacity-100 lg:scale-y-115 lg:opacity-0 duration-1000">
              <Image src={el.image} alt={el.title [lang as keyof typeof el.title]} className="grayscale" fill />
            </div>

            <div className="flex justify-between items-center">
              <CountTitle
                idx={i}
                className="text-7xl relative mix-blend-difference text-(--color-primary-fixed)!"
              />

              <div className="flex items-center overflow-hidden relative max-lg:hidden">
                <h1 className="text-6xl leading-[3.9rem] translate-y-full group-hover:translate-y-0 duration-300">
                  {t(titles.let_work)}
                </h1>
                <ArrowTopRightSVG className="size-20 rotate-45 group-hover:rotate-0 opacity-0 group-hover:opacity-100 max-lg:hidden" />
              </div>
            </div>

            <div className="space-y-8 relative mix-blend-difference">
              <h1 className="text-4xl text-(--color-primary-fixed)!">
                {el.title [lang as keyof typeof el.title]}
              </h1>
              <p className="line-clamp-3 text-lg text-(--color-primary-fixed)!">
                {el.description [lang as keyof typeof el.description]}
              </p>
              <div className="lg:hidden">
                <GetServiceButton idx={i} />
              </div>
            </div>
          </div>
        ))}
        <div className="h-screen w-screen relative flex-center">
          <ArrowLeftSVG className="absolute left-16 top-16" />
          <ArrowLeftSVG className="absolute left-16 bottom-16" />
          <ArrowLeftSVG className="absolute right-16 top-16" />
          <ArrowLeftSVG className="absolute right-16 bottom-16" />
          <div className="flex flex-col items-start">
            <div className="flex justify-between w-full items-end">
              <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl mr-2 font-secondary">
                01 —{" "}
                {services.length < 10 ? `0${services.length}` : services.length}
              </h1>

              <p className="text-xl uppercase flex gap-2 items-center text-center justify-center">
                <span className="size-3.5 bg-(--text-primary) rounded-full " />
                {t(titles.services)}
              </p>
            </div>

            <h1 className="lg:text-[13.5rem] md:text-9xl text-7xl text-center font-semibold">
             {t(titles.services)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceSlider;
