"use client";
import { services } from "@/data/services";
import Image from "next/image";
import GetServiceButton from "../GetServiceButton";
import CountTitle from "../../global/CountTitle";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import { useLanguage } from "@/context/LanguageContext";

const ServiceCards = () => {
    const { lang, t } = useLanguage();

  return (
    <MaxWidthWrapper>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 ">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative padding-query border-2 border-transparent hover:border-(--text-primary) rad group lg:aspect-square aspect-auto service-card duration transition-colors"
          >
            <div className="absolute position-center size-4/7 zoom-out-image scale-125">
              <div className="aspect-square grayscale duration group-hover:opacity-5 lg:block hidden">
                <Image src={s.image} alt={t(s.title)} fill />
              </div>
            </div>

            <div className="relative lg:opacity-0 group-hover:opacity-100 duration flex flex-col gap-8 items-query text-query">
              <Image
                src={s.image}
                alt={t(s.title)}
                width={128}
                height={128}
                className="lg:hidden block grayscale"
                sizes="25vw"
              />

              <div className="flex gap-1">
                <h1 className="line-clamp-1 lg:group-hover:translate-x-2 duration text-3xl">
                  {t(s.title)}
                </h1>
              </div>
              <p className="text-lg 2xl:line-clamp-5 xl:line-clamp-11 lg:line-clamp-4 duration lg:translate-x-2 group-hover:translate-x-0 sm:inline hidden">
                {t(s.description)}
              </p>
              <div className="flex lg:w-full justify-between">
                <GetServiceButton idx={i} />
                {/* <CountTitle idx={i} className="text-3xl" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ServiceCards;
