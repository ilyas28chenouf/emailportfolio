import { cn } from "@/lib/utils";

const CountTitle = ({
  idx,
  className,
  active = false,
}: {
  idx: number;
  className?: string;
  active?: boolean;
}) => {
  return (
    <h1
      className={cn(
        "opacity-50 duration lg:flex hidden items-center font-secondary",
        active ? "opacity-100" : "group-hover:opacity-100",
        className
      )}
    >
      {`${idx >= 9 ? "" : 0}${idx + 1}`}
    </h1>
  );
};

export default CountTitle;
