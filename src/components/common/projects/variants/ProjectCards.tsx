"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CountTitle from "../../global/CountTitle";
import { useProjectDialog } from "@/hooks/useProjectDialog";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectTags from "../ProjectTags";

const ProjectCard = ({
  idx,
  image,
  title,
  cols,
  threeCols,
}: {
  idx: number;
  image: string;
  title: string;
  cols: number;
  threeCols: boolean;
}) => {
  const { openProjectDialog } = useProjectDialog();

  return (
    <div
      className={cn(
        "space-y-4 relative group block lightbox-trigger project-card overflow-hidden",
        threeCols ? "" : cols === 1 ? "lg:col-span-1" : "lg:col-span-2"
      )}
      onClick={() => openProjectDialog(idx)}
    >
      <div className="absolute left-0 top-0 w-full z-1 sm:flex hidden items-start justify-between gap-4 rad group-hover:translate-y-0 -translate-y-full duration p-8">
        <div className="text-4xl flex gap-4">
          <CountTitle idx={idx} className="text-white!" active />
          <h1 className="mix-blend-difference line-clamp-1 flex-1 text-white!">
            {title}
          </h1>
        </div>

        <ProjectTags
          idx={idx}
          limit={threeCols ? 1 : cols === 1 ? 2 : 3}
          className="bg-white/15 text-white border-none"
        />
      </div>
      <div
        className={cn(
          "relative overflow-hidden group aspect-16/12 rad",
          threeCols ? "" : cols === 1 ? "" : "lg:aspect-16/10"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="zoom-out-image scale-125 object-cover"
          sizes="(max-width: 768px) 99vw, 75vw"
        />
      </div>
    </div>
  );
};

const ProjectCards = ({ threeCols = false }: { threeCols?: boolean }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const projectCards = gsap.utils.toArray(
      ".project-card"
    ) as HTMLDivElement[];

    const ctx = gsap.context(() => {
      projectCards.forEach((item, i) => {
        const isEven = Math.trunc(i / 3) % 2 === 0;

        return gsap.fromTo(
          item,
          {
            x: isEven ? (i % 3) * -125 : (2 - (i % 3)) * 125,
            y: isEven ? (i % 3) * -50 : (2 - (i % 3)) * -50,
            rotate: isEven ? (2 - (i % 3)) * -4 : (i % 3) * 4,
          },
          {
            ease: "power1.inOut",
            x: 0,
            y: 0,
            rotate: 0,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "center center",
              scrub: 1.5,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  });
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-4",
        threeCols ? "2xl:grid-cols-3" : ""
      )}
      ref={container}
    >
      {projects.map((project, i) => (
        <ProjectCard key={i} idx={i} {...project} threeCols={threeCols} />
      ))}
    </div>
  );
};

export default ProjectCards;
