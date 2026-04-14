import { ArrowUpRight } from "lucide-react";

const ButtonArrowUpRight = () => {
  return (
    <span className="overflow-hidden relative size-[34px]">
      <ArrowUpRight
        size={34}
        strokeWidth={1.5}
        className="absolute button-arrow-up-right"
      />
      <ArrowUpRight
        size={34}
        strokeWidth={1.5}
        className="absolute button-arrow-up-right"
      />
    </span>
  );
};

export default ButtonArrowUpRight;
