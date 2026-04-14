import { home_data } from "@/data/home2";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import ProjectSliderParallax from "../common/projects/ProjectSliderParallax";
import ArrowButtonNav from "../ui/ArrowButtonNav";
import Separator from "../ui/Separator";
import { useLanguage } from "@/context/LanguageContext";

const PortfolioOverviewSubSection = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-(--bg-secondary) relative z-20 space-y-8 pb-48">
      <Separator />
      <MaxWidthWrapper>
        <div className="flex lg:justify-between lg:flex-row flex-col gap-4 items-center">
          <p className=" lg:w-140 lg:text-2xl text-lg text-query text-(--text-primary)!">
            {t(home_data.personal.short_description)}
          </p>

          <ArrowButtonNav text={t(home_data.personal.my_work)} section="portfolio" />
        </div>
      </MaxWidthWrapper>
      <ProjectSliderParallax />
    </div>
  );
};

export default PortfolioOverviewSubSection;
