import { ArrowDownLeftSVG } from "@/components/arrows/Arrows";
import { average_rating, clients } from "@/data/about";
import Image from "next/image";
import { Quote, User2 } from "lucide-react";
import MaxWidthWrapper from "@/components/common/global/MaxWidthWrapper";
import { AboutContentTitle } from "../../AboutContent";
import CountTitle from "@/components/common/global/CountTitle";
import HorizontalTicker, {
  HorizontalTickerItem,
} from "@/components/common/global/HorizontalTicker";
import StarRating from "@/components/ui/StarRating";

const Slider = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <HorizontalTicker
      animationDuration={clients.length * 8}
      reverse={reverse}
      mask
    >
      {clients.map((client, i) => (
        <HorizontalTickerItem gap={32} key={i}>
          <div className="relative flex flex-col justify-between aspect-square border-2 border-transparent lg:hover:border-(--text-primary) rad md:h-[400px] h-80 lg:p-8 py-8 group duration">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <StarRating averageRate={client.rate} />
                <CountTitle idx={i} className="text-2xl" />
              </div>

              <p className="md:text-2xl italic text-(--text-primary)! font-light">
                “ {client.comment} ”
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <div className=" rounded-full">
                  {client.image ? (
                    <Image
                      src={client.image}
                      width={70}
                      height={70}
                      alt={client.name}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="border border-(--text-primary) text-primary flex-center size-[70] rounded-full">
                      <User2 />
                    </div>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <h1 className="text-2xl">{client.name}</h1>
                  <h2 className="text-sm">{client.role}</h2>
                </div>
              </div>

              <Quote
                className="text-(--border) group-hover:text-(--text-primary) lg:inline hidden"
                size={35}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </HorizontalTickerItem>
      ))}
    </HorizontalTicker>
  );
};

const ClientSlider = () => {
  return (
    <>
      <MaxWidthWrapper className="lg:mb-32 mb-16">
        <div className="flex lg:justify-between justify-center items-center">
          <div className="space-y-8">
            <AboutContentTitle>
              what <br /> clients say
            </AboutContentTitle>
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
          </div>
          <ArrowDownLeftSVG />
        </div>
      </MaxWidthWrapper>

      <div className="space-y-8">
        <Slider />
        <Slider reverse />
      </div>
    </>
  );
};

export default ClientSlider;
