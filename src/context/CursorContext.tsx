"use client";
import { ReactNode, createContext, useContext, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { custom_cursor } from "@/data/config";
import { useLanguage } from "@/context/LanguageContext";
import { titles } from "@/data/projects";

export const CursorContext = createContext({});

export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLHeadingElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 7500, damping: 225 });
  const smoothY = useSpring(mouseY, { stiffness: 7500, damping: 225 });

  // movement
  useEffect(() => {
    if (window.innerWidth < 1024 || !custom_cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // triggers and hoverables
  useEffect(() => {
    if (window.innerWidth < 1024 || !custom_cursor) return;

    const cursorClassList = cursorRef.current?.classList;
    const viewTitleClassList = viewRef.current?.classList;

    if (!cursorClassList) return;

    const hoverables = document.querySelectorAll("button, .clickable");
    const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
    const hideCursorTriggers = document.querySelectorAll(
      ".hide-cursor-trigger"
    );

    const active = () => cursorClassList.replace("size-4", "size-24");
    const deactive = () => cursorClassList.replace("size-24", "size-4");
    const hide = () => cursorClassList?.replace("size-4", "size-0");
    const show = () => cursorClassList?.replace("size-0", "size-4");

    if (!viewTitleClassList) return;

    const showView = () => {
      active();
      viewTitleClassList.replace("opacity-0", "opacity-100");
    };

    const hideView = () => {
      deactive();
      viewTitleClassList.replace("opacity-100", "opacity-0");
    };

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", active);
      el.addEventListener("mouseleave", deactive);
    });

    lightboxTriggers.forEach((el) => {
      el.addEventListener("mouseenter", showView);
      el.addEventListener("mouseleave", hideView);
    });

    hideCursorTriggers.forEach((el) => {
      el.addEventListener("mouseenter", hide);
      el.addEventListener("mouseleave", show);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", active);
        el.removeEventListener("mouseleave", deactive);
      });

      lightboxTriggers.forEach((el) => {
        el.removeEventListener("mouseenter", showView);
        el.removeEventListener("mouseleave", hideView);
      });

      hideCursorTriggers.forEach((el) => {
        el.removeEventListener("mouseenter", hide);
        el.removeEventListener("mouseleave", show);
      });
    };
  }, []);
const { t } = useLanguage();

  return (
    <CursorContext.Provider value={{}}>
      {custom_cursor ? (
        <motion.div
          ref={cursorRef}
          className="size-4 fixed top-0 left-0 bg-(--color-primary-fixed) rounded-full mix-blend-difference z-99 pointer-events-none lg:flex justify-center items-center hidden -translate-1/2"
          style={{
            x: smoothX,
            y: smoothY,
            transition: "width 0.3s, height 0.3s",
            boxShadow: "0px 0px 10px var(--color-primary-fixed)",
          }}
        >
          <h1
            className="-rotate-12 text-black! text-3xl font-semibold duration opacity-0"
            ref={viewRef}
          >
            {t(titles.view)}
          </h1>
        </motion.div>
      ) : null}

      {children}
    </CursorContext.Provider>
  );
};
