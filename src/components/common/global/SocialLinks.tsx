import Link from "next/link";
import { social_links } from "@/data/contact";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import ButtonArrowUpRight from "./ButtonArrowUpRight";
import ClickableText from "./ClickableText";

const SocialLinks = ({
  theme = false,
  className,
}: {
  theme?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-wrap gap-4 justify-query", className)}>
      {social_links.map((item, i) => (
        <Link href={item.link} key={i} target="_blank">
          <Button
            className={cn(
              "flex items-center px-0 group relative overflow-hidden rounded-none",
              theme ? "text-primary" : "text-(--color-primary-fixed)"
            )}
          >
            <div className="slide-up flex items-center px-0 group relative">
              <span className="text-3xl font-light ">
                <ClickableText text={item.name} />
              </span>

              <ButtonArrowUpRight />
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
