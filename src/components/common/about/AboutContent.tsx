import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import FillText from "../global/FillText";

export const AboutContentTitle = ({ children }: { children: ReactNode }) => {
  const textClass =
    "2xl:text-8xl lg:text-7xl text-6xl text-query font-medium tracking-tight";
  return <FillText className={textClass}>{children}</FillText>;
};

const AboutContent = ({
  titleChild,
  children,
  sticky = false,
}: {
  titleChild?: ReactNode;
  children: ReactNode;
  sticky?: boolean;
}) => {
  return (
    <div className={cn("grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-16")}>
      {titleChild ? (
        <div>
          <div
            className={cn(
              "lg:w-fit relative",
              sticky ? "lg:sticky lg:top-16" : ""
            )}
          >
            <AboutContentTitle>{titleChild}</AboutContentTitle>
          </div>
        </div>
      ) : null}

      {children}
    </div>
  );
};

export default AboutContent;
