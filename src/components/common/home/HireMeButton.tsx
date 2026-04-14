"use client";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { home_data  } from "@/data/home2";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HireMeButton = ({
  className,
  theme = false,
}: {
  className?: string;
  theme?: boolean;
}) => {
  const scrollTo = useScrollToSection();
const { t } = useLanguage();

  return (
    <Magnetic className={className}>
      <div
        className="size-48 relative rounded-full"
        onClick={() => scrollTo("contact")}
      >
        <button className="size-48 group rounded-full circular-text">
          <div
            className={cn(
              "absolute position-center size-[34px] z-10 overflow-hidden",
              theme ? "text-(--text-primary)" : "text-(--color-primary-fixed)"
            )}
          >
            <ArrowDown
              size={34}
              strokeWidth={1.5}
              className="absolute group-hover:translate-y-0 -translate-y-8"
            />
            <ArrowDown
              size={34}
              strokeWidth={1.5}
              className="absolute group-hover:translate-y-8"
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlLang="en"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            className="absolute left-1/2 -translate-x-1/2 -top-8 size-64 rounded-full scale-up"
          >
            <defs>
              <path
                id="textcircle"
                d="M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                transform="rotate(12,250,250)"
              />
            </defs>
            <g className="textcircle">
              <text
                textLength="940"
                className={cn(
                  "text-5xl",
                  theme
                    ? "fill-(--text-primary)"
                    : "fill-(--color-primary-fixed)"
                )}
              >
                <textPath
                  xlinkHref="#textcircle"
                  aria-label="contact me"
                  textLength="940"
                >
                  {t(home_data.spinning_text_words)}
                </textPath>
              </text>
            </g>
          </svg>
        </button>
      </div>
    </Magnetic>
  );
};

export default HireMeButton;
