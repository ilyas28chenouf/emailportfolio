"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const ProjectsCol = ({
  start,
  end,
  className,
}: {
  start: number;
  end: number;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("md:space-y-4 space-y-2", className)}>
        {projects.slice(start, end).map((p, i) => (
          <div key={i} className="relative aspect-16/12">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="rounded-xl object-cover"
              sizes="45vw"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const ProjectSliderParallax = () => {
  const projectsLen = projects.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const colRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(colRef.current, {
        y: window.innerWidth > 767 ? 192 : 32,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1.5,
        },
      });
      gsap.fromTo(
        gridRef.current,
        { scale: 1.5 },
        {
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="lg:aspect-[1.5/1] md:aspect-[16/9] aspect-[16/10] overflow-hidden  border-y border-(--border) bg-black"
      ref={containerRef}
    >
      <div className="grid md:gap-4 gap-2 grid-cols-3" ref={gridRef}>
        <ProjectsCol start={0} end={3} />

        <div ref={colRef}>
          <ProjectsCol start={3} end={6} />
        </div>

        {projectsLen >= 9 ? (
          <ProjectsCol start={6} end={9} />
        ) : (
          <ProjectsCol start={0} end={3} />
        )}
      </div>
    </div>
  );
};

export default ProjectSliderParallax;
