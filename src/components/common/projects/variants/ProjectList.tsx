"use client";
import { useProjectDialog } from "@/hooks/useProjectDialog";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import CountTitle from "../../global/CountTitle";
import { ArrowTopRightSVG } from "@/components/arrows/Arrows";
import { useLanguage } from "@/context/LanguageContext";

const ProjectList = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(500);
  const mouseY = useMotionValue(300);

  const smoothX = useSpring(mouseX, { stiffness: 1500, damping: 225 });
  const smoothY = useSpring(mouseY, { stiffness: 1500, damping: 225 });

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const section = containerRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { openProjectDialog } = useProjectDialog();
  const { lang, t } = useLanguage();

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={{ x: smoothX, y: smoothY, width: 400, height: 300 }}
        className="pointer-events-none fixed left-0 top-0 -translate-1/2 max-lg:hidden"
      >
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeImage ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src={activeImage}
              alt="service preview"
              fill
              sizes="400px"
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        )}
      </motion.div>
      {projects.map((el, i) => (
        <div
          key={i}
          className="border-t-3 border-(--border) group hover:border-(--text-primary) duration pb-16 pt-4 lg:relative sticky max-lg:top-16 cursor-pointer max-lg:bg-(--bg-secondary) hide-cursor-trigger"
          onMouseEnter={() => setActiveImage(el.image)}
          onMouseLeave={() => setActiveImage(null)}
          onClick={() => openProjectDialog(i)}
        >
          <div className="lg:gap-16 gap-8 flex md:flex-row flex-col relative">
            <div className="lg:basis-2/5 md:basis-1/2 flex flex-col gap-8">
              <div className="space-y-2 text-query  mix-blend-difference">
                <CountTitle
                  idx={i}
                  className="text-2xl text-(--color-primary-fixed)!"
                />
                <h1 className="text-6xl font-medium text-(--color-primary-fixed)!">
                  {el.title}
                </h1>
                <div className="flex lg:gap-4 gap-2 flex-wrap max-lg:justify-center">
                  {el.tags.slice(0, 3).map((el, i) => (
                    <div
                      key={i}
                      className="lg:px-4 px-2 py-1 border rad max-lg:text-sm border-(--color-primary-fixed) text-(--color-primary-fixed)"
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center overflow-hidden relative  max-lg:hidden mix-blend-difference">
                <h1 className="text-6xl text-(--color-primary-fixed)! leading-[3.8rem] translate-y-full group-hover:translate-y-0 duration-300">
                  View
                </h1>
                <ArrowTopRightSVG className="size-20 dark:fill-(--text-primary)! dark:stroke-(--text-primary)! fill-(--color-primary-fixed)! stroke-(--color-primary-fixed)! rotate-45 group-hover:rotate-0 opacity-0 group-hover:opacity-100 max-lg:hidden" />
              </div>

              <div className="relative aspect-4/3 lg:hidden">
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  sizes="300px"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <p className="md:text-2xl text-lg font-light lg:basis-3/5 md:basis-1/2 md:text-start text-center text-(--color-primary-fixed)!  mix-blend-difference max-md:hidden line-clamp-4 h-fit">
              {t(el.description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
