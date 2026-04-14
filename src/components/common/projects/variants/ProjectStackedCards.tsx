"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectTags from "../ProjectTags";
import { cn } from "@/lib/utils";
import CountTitle from "../../global/CountTitle";
import { useRef } from "react";
import { useStackedCards } from "@/hooks/useStackedCards";
import { useProjectDialog } from "@/hooks/useProjectDialog";

const ProjectStackedCard = ({
  idx,
  image,
  title,
  sticky,
  tools,
}: {
  idx: number;
  image: string;
  title: string;
  sticky: boolean;
  tools: string[];
}) => {
  const { openProjectDialog } = useProjectDialog();

  return (
    <div
      className={cn(
        sticky ? "sticky top-16" : "relative",
        "stacked-card aspect-[16/10] z-30 overflow-hidden block group rad lightbox-trigger",
      )}
      onClick={() => openProjectDialog(idx)}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 75vw"
        className="object-cover rad scale-115 zoom-out-image"
      />

      <div className="absolute left-0 bottom-0 size-full bg-gradient-to-b from-black/45 to-black/0 rad opacity-0 group-hover:opacity-100 duration" />
      <div className="absolute inset-0 px-8 py-8 sm:flex hidden flex-col justify-between rad group-hover:translate-y-0 translate-y-full duration">
        <div className="flex flex-row items-start justify-between">
          <div className="text-4xl flex gap-4 ">
            <CountTitle idx={idx} className="text-white!" active />
            <h1 className="mix-blend-difference line-clamp-1 flex-1 text-white!">
              {title}
            </h1>
          </div>

          <ProjectTags
            idx={idx}
            limit={5}
            className="bg-white/15 text-white border-none mt-4"
          />
        </div>

        <div className="flex items-center flex-wrap gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="rad border border-(--border) text-sm p-3">
              <Image
                src={`/images/icons/${tool.toLowerCase()}.svg`}
                alt={tool}
                width={36}
                height={36}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectStackedCards = ({ sticky = true }: { sticky?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useStackedCards(containerRef, { start: "top 25%" });

  return (
    <div className="relative 2xl:px-32 space-y-16" ref={containerRef}>
      {projects.map((project, i) => (
        <ProjectStackedCard key={i} idx={i} {...project} sticky={sticky} />
      ))}
    </div>
  );
};

export default ProjectStackedCards;
