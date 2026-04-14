"use client";
import CountTitle from "../../../common/global/CountTitle";
import { Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import GetServiceButton from "../GetServiceButton";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import { useLanguage } from "@/context/LanguageContext";

export type ServiceProps = {
  title: string;
  description: string;
  image: string;
  idx: number;
} & {
  isOpen: boolean;
  onOpenChange: (idx: number) => void;
};

const ServiceListItem = ({
  title,
  description,
  image,
  idx,
  isOpen,
  onOpenChange,
}: ServiceProps) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);
  const { lang, t } = useLanguage();

  return (
    <div
      className="border-t border-b first:border-t-[1.5px] last:border-b-[1.5px] border-(--border) hover:border-(--text-primary) group cursor-pointer duration clickable"
      onClick={() => onOpenChange(idx)}
      data-image={image}
    >
      <div className="flex items-center justify-between py-8 relative">
        <div className="flex items-center gap-8 sm:text-4xl text-2xl">
          <CountTitle
            idx={idx}
            className="font-normal text-3xl"
            active={isOpen}
          />
          <h1>{t(title)}</h1>
        </div>

        <Image
          src={image}
          alt={t(title)}
          width={100}
          height={100}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-full opacity-0 grayscale duration",
            isOpen ? "opacity-100 -translate-y-full" : ""
          )}
        />

        <div className="p-1 rounded-full group-hover:bg-(--bg-primary-inverse)  duration group-hover:rotate-180">
          <div className="relative ">
            <Minus className="text-primary group-hover:text-(--text-primary-inverse)" />
            <Minus
              className={cn(
                "text-primary absolute left-1/2 top-0 -translate-x-1/2 rotate-90 duration group-hover:text-(--text-primary-inverse)",
                isOpen ? " rotate-0" : ""
              )}
            />
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all ease-in-out duration"
      >
        <div
          className={cn(
            "duration space-y-8 lg:ps-17 mb-8",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-xl font-light">{t(description)}</p>

          <GetServiceButton idx={idx} />
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const onOpenChange = (idx: number) => {
    setActiveServiceIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <MaxWidthWrapper>
      {/* {services.map((s, i) => (
        <ServiceListItem
          key={i}
          {...s}
          idx={i}
          isOpen={activeServiceIdx === i}
          onOpenChange={onOpenChange}
        />
      ))} */}
      <div>Hello World</div>
    </MaxWidthWrapper>
  );
};

export default ServiceList;
