"use client";
import Section, { SectionTitle } from "../common/global/Section";
import Clients from "../common/about/clients/Clients";
import Experience from "../common/about/Experience";
import HowDoIWork from "../common/about/HowDoIWork";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { personal_data } from "@/data/home";
import Image from "next/image";
import { about_image, titles } from "@/data/about2";
import Skills from "../common/about/Skills";
import FavoriteStack from "../common/about/FavoriteStack";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <>
      <Section id="about" separator={false} className="space-y-48 pt-0!">
        {/* <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-16">
            <SectionTitle section="about" margin={false}>
              {t(titles.about)} <br /> {t(titles.me)}
            </SectionTitle>
            <div className="relative aspect-16/11 overflow-hidden">
              <Image
                src={about_image}
                fill
                className="object-cover zoom-out-image grayscale scale-125"
                alt={personal_data.name}
              />
            </div>
          </div>
        </MaxWidthWrapper> */}

        <div className="space-y-48">
          <MaxWidthWrapper className="space-y-48">
            <HowDoIWork />
            <Skills />
            <FavoriteStack />
            <Experience />
          </MaxWidthWrapper>
          {/* <Clients /> */}
        </div>
      </Section>
    </>
  );
};

export default About;
