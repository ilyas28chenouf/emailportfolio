"use client";
import { useRef } from "react";
import { clients } from "@/data/about";
import { Quote, User2 } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/global/MaxWidthWrapper";
import { average_rating } from "@/data/about";
import Button from "@/components/ui/Button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useStackedCards } from "@/hooks/useStackedCards";
import { AboutContentTitle } from "../../AboutContent";
import CountTitle from "@/components/common/global/CountTitle";
import ClickableText from "@/components/common/global/ClickableText";
import StarRating from "@/components/ui/StarRating";

const ClientStackedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useStackedCards(containerRef, { scale: 0.65 });
  const scrollTo = useScrollToSection();

  return (
    <MaxWidthWrapper className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-16">
      <div>
        <div className="lg:sticky lg:top-20 relative space-y-8">
          <AboutContentTitle>
            what <br /> clients say
          </AboutContentTitle>
          <p className="text-query lg:w-4/7">
            Clients who chose to work with me and trusted my expertise.
          </p>

          <div className="flex items-center gap-4 justify-query">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="size-5 fill-(--text-primary)"
            >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>

            <h3 className="text-lg">
              <span className=" font-medium text-primary">
                {average_rating}
              </span>{" "}
              Average Rating
            </h3>
          </div>

          <hr className="border-(--border)" />

          <div className="flex gap-8 justify-query flex-wrap">
            <Button
              variant="outline"
              className="px-8 h-20 text-2xl"
              onClick={() => scrollTo("portfolio")}
            >
              <ClickableText text="See My Work" />
            </Button>
            <Button
              variant="primary"
              className="px-8 h-20 text-2xl"
              onClick={() => scrollTo("contact")}
            >
              <ClickableText text="Contact Now" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative" ref={containerRef}>
        {clients.map((e, i) => (
          <div
            key={i}
            className="padding-query stacked-card first:pt-0 group space-y-16 sticky top-22 border-t-2 first:border-0 bg-(--bg-secondary) border-primary"
          >
            <div className="flex flex-col items-query gap-8">
              <div className="flex justify-between items-center lg:w-full">
                <StarRating averageRate={e.rate} />
                <CountTitle idx={i} className="text-2xl" />
              </div>

              <p className="text-2xl italic text-(--text-primary)! text-query font-light">
                “ {e.comment} ”
              </p>
            </div>

            <div className="flex lg:justify-between justify-center items-center">
              <div className="flex items-center gap-8">
                <div className=" rounded-full">
                  {e.image ? (
                    <Image
                      src={e.image}
                      alt={e.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="dark:border border-2 border-(--text-primary) text-primary flex-center size-[100px] rounded-full">
                      <User2 size={60} strokeWidth={0.75} />
                    </div>
                  )}
                </div>

                <div className="space-y-4 flex-1">
                  <h1 className="sm:text-3xl text-2xl">{e.name}</h1>
                  <h2>{e.role}</h2>
                </div>
              </div>

              <Quote
                className="text-(--border) group-hover:text-(--text-primary) lg:inline hidden"
                size={50}
                strokeWidth={1}
              />
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ClientStackedCards;
