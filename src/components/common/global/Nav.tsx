"use client";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import ClickableText from "./ClickableText";
import { nav } from "@/data/home2";
import { home_option } from "@/data/config";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
const Nav = () => {
  const { lang, t } = useLanguage();
  const scrollTo = useScrollToSection();

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastKnownScrollY = 0;

    const scrollHandler = () => {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const shouldShow = lastKnownScrollY > 730;
          setIsShow((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const sections = [
    { id: "about", label: nav.about[lang] },
    { id: "portfolio", label: nav.portfolio[lang] },
    { id: "services", label: nav.services[lang] },
    { id: "contact", label: nav.contact[lang] },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* overlay */}
      <div
        className={cn(
          "fixed left-0 top-0 size-full z-40 bg-black/75 animation-duration",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* menu icon */}
      <div
        onClick={() => setIsOpen((p) => !p)}
        className="fixed md:left-8 left-4 top-8 rounded-full p-3 bg-(--color-primary-fixed) backdrop-blur-[2px] mix-blend-difference z-40 lg:hidden block"
      >
        <div className="relative size-5 ">
          <span
            className={cn(
              "absolute bg-black left-0 top-3 w-full  duration",
              isOpen ? "rotate-45 position-center h-0.5" : "h-[1.5px]",
            )}
          />
          <span
            className={cn(
              "absolute bg-black left-0 bottom-3 w-full h-0.5 duration",
              isOpen ? "-rotate-45 position-center" : "",
            )}
          />
        </div>
      </div>

      {/* mobile */}
      <nav
        className={cn(
          "fixed left-0 top-28 origin-top  space-y-8 text-xl w-fit z-40 lg:hidden block",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ transitionDuration: `${(sections.length - 1) * 200 + 300}ms` }}
      >
        {sections.map((section, i) => (
          <div
            key={section.id}
            style={{ transitionDuration: `${i * 200 + 300}ms` }}
            className={cn(
              "text-xl font-normal bg-(--bg-primary-inverse) text-(--text-primary-inverse) p-2 text-center rad  tracking-wider cursor-pointer capitalize rounded-lg duration",
              isOpen ? "md:translate-x-8 translate-x-4" : "-translate-x-full",
            )}
            onClick={() => {
              scrollTo(section.id);
              setIsOpen(false);
            }}
          >
            {t(section.label)}
          </div>
        ))}
        <div className="ml-6">
          <LanguageSwitcher variant="light" />
        </div>
      </nav>

      {/* desktop */}
      <nav
        className={cn(
          "fixed left-0 top-0 mix-blend-difference text-4xl w-full h-16 z-40 duration lg:block hidden",
          home_option !== "home-1"
            ? isShow
              ? "translate-y-0"
              : "-translate-y-full"
            : "slide-down",
        )}
      >
        <MaxWidthWrapper
          className="duration flex justify-between items-center h-16"
          width={isShow ? "default" : "wide"}
        >
          {sections.map((s, i) => (
            <Button
              key={s.id}
              className={cn(
                "relative text-2xl font-normal tracking-wider flex items-center group cursor-pointer text-white! duration",
              )}
              onClick={() => scrollTo(s.id)}
            >
              <ClickableText text={t(s.label)} />
            </Button>
          ))}
          <div>
            <LanguageSwitcher variant="light" />
          </div>
        </MaxWidthWrapper>
      </nav>

      {/* home button */}
      <Magnetic
        className={cn(
          "fixed right-4 bottom-0 z-40 size-16 bg-(--color-primary-fixed)! group backdrop-blur-[2px] mix-blend-difference rounded-full duration transition-opacity",
          isShow ? "-translate-y-4 opacity-100" : "translate-y-full opacity-0",
        )}
      >
        <button
          className="size-full rounded-full flex-center cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <span className="overflow-hidden relative size-6">
            <ArrowUp
              size={24}
              strokeWidth={1.5}
              className="absolute group-hover:-translate-y-8"
            />

            <ArrowUp
              size={24}
              strokeWidth={1.5}
              className="absolute group-hover:translate-y-0 translate-y-8"
            />
          </span>
        </button>
      </Magnetic>
    </>
  );
};

export default Nav;
