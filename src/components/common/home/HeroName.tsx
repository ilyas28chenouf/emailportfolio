import { personal_data } from "@/data/home";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { home_data } from "@/data/home2";

const HeroName = ({ className }: { className?: string }) => {
  const nameLength =
    personal_data.name.length < 9 ? 9 : personal_data.name.length;

  const viewWidth = `${100 / (nameLength - (nameLength / 100) * 49.5)}vw`;
  const { t } = useLanguage();

  return (
<h1
  className={cn(
    "font-bold text-center text-nowrap overflow-hidden group scale-y-100 text-[50px] xl:text-[100px]",
    className
  )}
  style={{
    lineHeight: viewWidth,
  }}
>
  <span className="block slide-up">{t(home_data.personal.name)}</span>
</h1>
  );
};

export default HeroName;
