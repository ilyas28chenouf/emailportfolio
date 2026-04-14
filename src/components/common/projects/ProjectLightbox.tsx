"use client";
import { projects, titles } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useProjectContext } from "@/context/ProjectContext";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { X } from "lucide-react";
import ProjectTags from "./ProjectTags";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import { ReactNode, useEffect, useRef } from "react";
import ButtonArrowUpRight from "../global/ButtonArrowUpRight";
import ClickableText from "../global/ClickableText";
import { useLanguage } from "@/context/LanguageContext";

const ProjectLightboxContent = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </div>
  );
};

const ProjectLightbox = () => {
  const { projectIdx } = useProjectContext();
  const { title, description, image, link, tools, whatIDid, figmaLink } =
    projects[projectIdx];
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setIsOpenProject, isOpenProject } = useProjectContext();
  useEffect(() => {
    if (isOpenProject && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [isOpenProject, projectIdx]);
  return (
    <>
      <div
        className={cn(
          "fixed bg-white/50 dark:bg-black/50 backdrop-blur-sm left-0 top-0 size-full z-40",
          isOpenProject
            ? "opacity-100 translate-y-0"
            : "translate-y-full opacity-0",
        )}
        onClick={() => setIsOpenProject(false)}
        style={{
          transitionDuration: isOpenProject
            ? "calc(var(--animation-duration)/2)"
            : "calc(var(--animation-duration)*2)",
        }}
      />

      <div
        className={cn(
          "animation-duration fixed right-4 group top-0 z-[42] rounded-full flex-center text-white p-4",
          isOpenProject
            ? "translate-y-4 opacity-100"
            : "-translate-y-full opacity-0",
        )}
        onClick={() => setIsOpenProject(false)}
      >
        <Button className="size-12 border" variant="primary">
          <X size={24} className="group-hover:rotate-90 duration-300" />
        </Button>
      </div>

      <div
        ref={scrollRef}
        className={cn(
          "fixed z-[41] bg-(--bg-secondary) left-0 bottom-0 overflow-y-auto overflow-x-hidden size-full overscroll-contain",
          isOpenProject ? "translate-y-0" : "translate-y-full",
        )}
        style={{
          transitionDuration: "var(--animation-duration)",
        }}
        data-lenis-prevent
      >
        <MaxWidthWrapper className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
              <div className="flex max-sm:flex-col justify-between gap-4 sm:items-center">
                <h1 className="lg:text-7xl text-4xl">{title}</h1>

                {link ? (
                  <Link href={link} target="_blank" className="group">
                    <Button
                      variant="outline"
                      className="px-8 h-20 text-2xl rounded-full"
                    >
                      <ClickableText text={t(titles.visit_site)} />{" "}
                      <ButtonArrowUpRight />
                    </Button>
                  </Link>
                ) : null}
              </div>

              <ProjectLightboxContent title={t(titles.project_tags)}>
                <ProjectTags idx={projectIdx} />
              </ProjectLightboxContent>

              <ProjectLightboxContent title={t(titles.about_work)}>
                <p className="text-xl">{t(description)}</p>
              </ProjectLightboxContent>

              <ProjectLightboxContent title={t(titles.what_i_did)}>
                <p className="text-xl">{t(whatIDid)}</p>
              </ProjectLightboxContent>

              <ProjectLightboxContent title={t(titles.tools)}>
                <div className="flex items-center flex-wrap gap-4">
                  {tools.map((tool, i) => (
                    <div
                      key={i}
                      className="rad border border-(--border) text-sm p-3"
                    >
                      <Image
                        src={`/images/icons/${tool.toLowerCase()}.svg`}
                        alt={tool}
                        width={36}
                        height={36}
                      />
                    </div>
                  ))}
                </div>
              </ProjectLightboxContent>
            </div>
            <AnimatePresence>
              {isOpenProject ? (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8 }}
                  className="lg:sticky lg:top-10"
                >
                  <div className="relative aspect-[16/12] w-full max-w-3xl">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover pointer-events-auto duration-1000 ease-in-out rounded-xl"
                    />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {figmaLink && (
            <div className="w-full aspect-[16/10] overflow-hidden rad border border-(--border) p-4 mt-16">
              <iframe
                className="w-full h-full"
                src={`https://www.figma.com/embed?embed_host=share&url=${figmaLink}`}
                allowFullScreen
              />
            </div>
          )}
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default ProjectLightbox;
