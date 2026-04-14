import { ReactNode } from "react";

const FillText = ({
  children,
  className,
  textType = "heading",
}: {
  children?: ReactNode;
  className?: string;
  textType?: "heading" | "paragraph";
}) => {
  return (
    <div className={className}>
      {textType === "heading" ? (
        <h1 className="fill-text">{children}</h1>
      ) : (
        <p className="fill-text">{children}</p>
      )}
    </div>
  );
};

export default FillText;
