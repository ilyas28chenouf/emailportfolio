const ClickableText = ({ text }: { text: string }) => {
  return (
    <div className="relative flex flex-col overflow-hidden w-fit">
      <span className="absolute duration -translate-y-full group-hover:translate-y-0">
        {text}
      </span>
      <span className="duration group-hover:translate-y-full">{text}</span>
    </div>
  );
};

export default ClickableText;
