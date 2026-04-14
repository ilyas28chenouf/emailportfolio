"use client";
import Section, { SectionTitle } from "../common/global/Section";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { ArrowDownLeftSVG, ArrowDownRightSVG } from "../arrows/Arrows";
import ProjectCards from "../common/projects/variants/ProjectCards";
import ProjectStackedCards from "../common/projects/variants/ProjectStackedCards";
import ProjectSideCards from "../common/projects/variants/ProjectSideCards";
import ProjectList from "../common/projects/variants/ProjectList";
import ProjectCinematic from "../common/projects/variants/ProjectCinematic";
import { home_data } from "@/data/home2";
import Button from "../ui/Button";
import ClickableText from "../common/global/ClickableText";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import ButtonArrowUpRight from "../common/global/ButtonArrowUpRight";
import { projects, titles } from "@/data/projects";
import FillText from "../common/global/FillText";
import { projects_option } from "@/data/config";
import { useLanguage } from "@/context/LanguageContext";

const Portfolio = () => {
  const { lang, t } = useLanguage();

  const scrollTo = useScrollToSection();

  return (
    <Section id="portfolio">
      {projects_option === "cinematic" ? (
        <MaxWidthWrapper className="flex max-md:flex-col gap-4 justify-between pb-16">
          <div className="flex-1 md:space-y-8">
            <FillText
              textType="paragraph"
              className="lg:text-4xl md:text-3xl sm:text-2xl text-lg"
            >
              {t(home_data.personal.short_description)}
            </FillText>
            <Button
              className="text-2xl px-6 py-3 max-md:hidden!"
              variant="outline"
              onClick={() => scrollTo("contact")}
            >
              <ClickableText text={t(titles.let_work)} /> <ButtonArrowUpRight />
            </Button>
          </div>
          <FillText className="text-[clamp(50px,10vw,10vw)] leading-[clamp(50px,8vw,8vw)] font-bold lg:tracking-[-2px] flex-1 text-end">
          {t(titles.fearured)}  <br />{" "}
            <span className="xl:text-[4rem] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-normal text-(--color-primary)">
              01 —{" "}
              {projects.length < 10 ? `0${projects.length}` : projects.length}
            </span>{" "}
            {t(titles.work)}
          </FillText>
          <Button
            className="text-2xl px-6 py-3 md:hidden! w-fit"
            variant="outline"
            onClick={() => scrollTo("contact")}
          >
            <ClickableText text={t(titles.let_work)} /> <ButtonArrowUpRight />
          </Button>
        </MaxWidthWrapper>
      ) : (
        <MaxWidthWrapper>
          <div className="lg:flex justify-between items-center mb-48">
            <ArrowDownRightSVG />
            <SectionTitle section="portfolio" margin={false} center>
            {t(titles.fearured)} <br /> {t(titles.work)}
            </SectionTitle>
            <ArrowDownLeftSVG />
          </div>
        </MaxWidthWrapper>
      )}

      <MaxWidthWrapper className="relative">
        {projects_option === "cards" ? (
          <ProjectCards />
        ) : projects_option === "3-cards" ? (
          <ProjectCards threeCols />
        ) : projects_option === "stacked-cards" ? (
          <ProjectStackedCards sticky={false} />
        ) : projects_option === "stacked-sticky-cards" ? (
          <ProjectStackedCards />
        ) : projects_option === "side-cards" ? (
          <ProjectSideCards />
        ) : projects_option === "list" ? (
          <ProjectList />
        ) : null}
      </MaxWidthWrapper>

      {projects_option === "cinematic" ? <ProjectCinematic /> : null}
    </Section>
  );
};

export default Portfolio;
