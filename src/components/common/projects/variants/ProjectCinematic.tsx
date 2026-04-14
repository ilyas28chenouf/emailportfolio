"use client";

import { useProjectDialog } from "@/hooks/useProjectDialog";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";

const ProjectCinematic = () => {
  const { openProjectDialog } = useProjectDialog();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxImages = gsap.utils.toArray(
      ".parallax-image",
    ) as HTMLDivElement[];
    const projectFrames = gsap.utils.toArray(
      ".project-frame",
    ) as HTMLDivElement[];
    const ctx = gsap.context(() => {
      parallaxImages.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: -25 },
          {
            y: 25,
            ease: "none",
            scrollTrigger: {
              trigger: projectFrames[i],
              scrub: true,
            },
          },
        );
      });

      return () => {};
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {projects.map((el, i) => (
        <div
          key={i}
          className={cn(
            "relative h-screen overflow-clip lightbox-trigger project-frame",
          )}
          onClick={() => openProjectDialog(i)}
        >
          <div className={cn("relative h-[300vh] -top-[100vh]")}>
            <div className="sticky top-0 h-screen">
              <Image
                src={el.image}
                alt="sd"
                fill
                sizes="30vw"
                className="object-cover parallax-image scale-[1.08]"
              />

              <div className="absolute size-full bg-black/50 left-0 top-0" />
              {/*  */}
              <div className="absolute position-center w-full">
                <MaxWidthWrapper className="relative flex flex-col items-center gap-8">
                  <div className="absolute position-center flex justify-between w-full z-20 px-16">
                    <h1 className="font-light font-secondary text-(--color-primary-fixed)!">
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </h1>
                    <h1 className="font-light font-secondary text-(--color-primary-fixed)!">
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </h1>
                  </div>
                  <h1 className="lg:text-7xl md:text-5xl text-4xl font-medium text-center text-(--color-primary-fixed)! text-nowrap">
                    {el.title}
                  </h1>
                  <div className="lg:w-125 md:w-1/2 sm:w-3/4 w-full relative aspect-16/12 ">
                    <Image src={el.image} alt="sd" fill />
                  </div>
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
                </MaxWidthWrapper>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCinematic;
