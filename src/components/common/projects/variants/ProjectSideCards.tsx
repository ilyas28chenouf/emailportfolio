"use client";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useProjectDialog } from "@/hooks/useProjectDialog";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonArrowUpRight from "../../global/ButtonArrowUpRight";
import ClickableText from "../../global/ClickableText";

const ProjectSideCard = ({
  idx,
  image,
  title,
  link,
  tools,
}: {
  idx: number;
  image: string;
  title: string;
  link: string;
  tools: string[];
}) => {
  const { openProjectDialog } = useProjectDialog();

  const isEven = idx % 2 === 0;

  return (
    <div className="grid lg:grid-cols-2 lg:gap-0 gap-4">
      <div
        className={cn(
          "relative overflow-hidden aspect-[16/12] rad side-card lightbox-trigger",
          isEven ? "lg:order-1 origin-left" : "lg:order-2 origin-right"
        )}
        onClick={() => openProjectDialog(idx)}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="zoom-out-image object-cover scale-120"
          sizes="(max-width: 768px) 90vw, 75vw"
        />
      </div>

      <div
        className={cn(
          isEven ? "lg:order-2 lg:ml-16" : "lg:order-1 lg:mr-16",
          "flex flex-col justify-center"
        )}
      >
        <div className="lg:space-y-8 space-y-4">
          <div
            className={cn(
              "flex flex-wrap justify-query lg:gap-12 gap-4 tools ",
              isEven ? "lg:-rotate-6" : "lg:rotate-6"
            )}
          >
            {tools.map((tool, i) => (
              <div key={i} className="border border-(--text-primary) rad p-4">
                <Image
                  src={`/images/tools/${tool.toLowerCase()}.svg`}
                  width={28}
                  height={28}
                  alt={tool}
                  className="grayscale"
                />
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-col items-query lg:gap-8 gap-4 title",
              isEven ? "lg:-rotate-3" : "lg:rotate-3"
            )}
          >
            <h1 className="line-clamp-2 text-7xl font-medium text-query">
              {title}
            </h1>

            {link ? (
              <Link href={link} target="_blank" className="group">
                <Button variant="outline" className="px-8 h-20 text-2xl">
                  <ClickableText text="Visit Site" /> <ButtonArrowUpRight />
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSideCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sideCards = gsap.utils.toArray(".side-card") as HTMLDivElement[];
    const titles = gsap.utils.toArray(".title") as HTMLDivElement[];
    const tools = gsap.utils.toArray(".tools") as HTMLDivElement[];

    const ctx = gsap.context(() => {
      sideCards.forEach((item, i) => {
        const isEven = i % 2 === 0;
        return gsap.fromTo(
          item,
          {
            rotate: isEven ? -15 : 15,
            x: isEven ? -150 : 150,
            y: 150,
          },
          {
            rotate: 0,
            x: 0,
            y: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: item,
              scrub: 2,
              end: "bottom bottom",
            },
          }
        );
      });

      titles.forEach((item) =>
        gsap.fromTo(
          item,
          {
            y: 50,
          },
          {
            y: 0,
            rotate: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: item,
              scrub: 2,
              end: "top center",
            },
          }
        )
      );

      tools.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 50,
            scale: 0.75,
            opacity: 0.5,
          },
          {
            scale: 1,
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: item,
              scrub: 4,
              end: "top center",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-32" ref={containerRef}>
      {projects.map((project, i) => (
        <ProjectSideCard key={i} idx={i} {...project} />
      ))}
    </div>
  );
};

export default ProjectSideCards;
