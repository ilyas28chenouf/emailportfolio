"use client";
import { how_do_i_work, titles } from "@/data/about2";
import AboutContent from "./AboutContent";
import FillText from "../global/FillText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const HowDoIWork = () => {
  const { lang, t } = useLanguage();
  const text_class = "lg:text-[2.3rem] sm:text-3xl text-2xl text-query";

  const workItems = how_do_i_work[lang as keyof typeof how_do_i_work];

  return (
    <AboutContent
      titleChild={
        <>
          {t(titles.how)} <br /> {t(titles.do_i_work)}
        </>
      }
      sticky
    >
      <div className="space-y-8">
        {workItems.map((txt, i) => (
          <div key={i} className="space-y-2">
            <FillText className={cn(text_class, "text-start!")}>
              ✺ {i < 9 ? "0" : null}
              {i + 1}
            </FillText>

            <FillText
              textType="paragraph"
              className={cn(text_class, "text-start!")}
            >
              {txt}
            </FillText>
          </div>
        ))}
      </div>
    </AboutContent>
  );
};

export default HowDoIWork;