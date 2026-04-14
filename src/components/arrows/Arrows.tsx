import Image from "next/image";
import arrowDownLeft from "./arrow-down-left.svg";
import arrowDownRight from "./arrow-down-right.svg";
import { cn } from "@/lib/utils";

export const ArrowDownLeftSVG = () => {
  return (
    <div className="lg:flex justify-center items-center hidden">
      <Image
        src={arrowDownLeft}
        alt="arrow"
        className="arrow dark:opacity-10 opacity-20 rotate-45 mix-blend-difference"
        width={80}
        height={80}
      />
    </div>
  );
};

export const ArrowDownRightSVG = () => {
  return (
    <div className="lg:flex justify-center items-center hidden">
      <Image
        src={arrowDownRight}
        alt="arrow"
        className="arrow dark:opacity-10 opacity-20 -rotate-45 mix-blend-difference"
        width={80}
        height={80}
      />
    </div>
  );
};

export const ArrowTopRightSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(-45)"
      className={cn(
        "size-50 stroke-(--text-primary) fill-(--text-primary)",
        className
      )}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M15.6468 10.8686L10.3515 5.6L11.9596 4L20 12L11.9596 20L10.3515 18.4L15.6468 13.1314L4 13.1314V10.8686L15.6468 10.8686Z"></path>{" "}
      </g>
    </svg>
  );
};

export const ArrowRightSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "lg:size-30 md:size-20 size-16 stroke-(--text-primary) fill-(--text-primary)",
        className
      )}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M15.6468 10.8686L10.3515 5.6L11.9596 4L20 12L11.9596 20L10.3515 18.4L15.6468 13.1314L4 13.1314V10.8686L15.6468 10.8686Z"></path>{" "}
      </g>
    </svg>
  );
};

export const ArrowLeftSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(-180)"
      className={cn(
        "lg:size-30 md:size-20 size-16 stroke-(--text-primary) fill-(--text-primary)",
        className
      )}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M15.6468 10.8686L10.3515 5.6L11.9596 4L20 12L11.9596 20L10.3515 18.4L15.6468 13.1314L4 13.1314V10.8686L15.6468 10.8686Z"></path>{" "}
      </g>
    </svg>
  );
};
