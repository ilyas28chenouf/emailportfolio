import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const HorizontalTickerItem = ({
  children,
  gap = 32,
  className,
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) => {
  return (
    <div className={className} style={{ paddingInline: `${gap / 2}px` }}>
      {children}
    </div>
  );
};

const HorizontalTicker = ({
  children,
  reverse = false,
  animationDuration,
  className,
  duplicate = false,
  mask = true,
}: {
  children: ReactNode;
  reverse?: boolean;
  animationDuration: number;
  className?: string;
  duplicate?: boolean;
  mask?: boolean;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden w-full relative z-20 flex ticker-wrapper",
        mask ? "mask-x" : "",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center will-change-transform",
          reverse ? "animate-scroll-x" : "animate-scroll-x-reverse"
        )}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <div className="flex w-fit items-center">{children}</div>
        <div className="flex w-fit items-center">{children}</div>
        {duplicate ? (
          <>
            <div className="flex w-fit items-center">{children}</div>
            <div className="flex w-fit items-center">{children}</div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HorizontalTicker;
