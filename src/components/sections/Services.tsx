"use client";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import Section, { SectionTitle } from "../common/global/Section";
import { ArrowDownLeftSVG } from "../arrows/Arrows";
import ServiceSlider from "../common/services/variants/ServiceSlider";
import { services_option } from "@/data/config";
import ServiceCards from "../common/services/variants/ServiceCards";
import ServiceList from "../common/services/variants/ServiceList";
import { useLanguage } from "@/context/LanguageContext";
import { services,titles } from "@/data/services";

const Services = () => {
  const { t } = useLanguage();
  return (
    <Section id="services" className="pt-0!" separator={false}>
      {services_option !== "slider" ? (
        <MaxWidthWrapper>
          <div className="lg:flex justify-between items-center mb-48">
            <div >
              <SectionTitle margin={false} section="services">
                 {t(titles.my_services)}
              </SectionTitle>
            </div>
            <ArrowDownLeftSVG />
          </div>
        </MaxWidthWrapper>
      ) : null}

      {services_option === "cards" ? (
        <ServiceCards />
      ) : services_option === "list" ? (
        <ServiceList />
      ) : (
        <ServiceSlider />
      )}
    </Section>
  );
};

export default Services;
