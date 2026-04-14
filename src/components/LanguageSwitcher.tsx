"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
};

const LanguageSwitcher = ({
  variant = "dark",
}: LanguageSwitcherProps) => {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ] as const;

  return (
    <div className="flex items-center">
      <div
        className={cn(
          "relative flex items-center rounded-full p-1 backdrop-blur-md",
          variant === "dark"
            ? "border-black/20 bg-black/5"
            : "border-white/20 bg-white/5"
        )}
      >
        {languages.map((item) => {
          const active = lang === item.code;

          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLang(item.code)}
              className={cn(
                "relative z-10 min-w-[52px] rounded-full px-4 py-2 text-lg font-medium tracking-wide transition-all duration-300",
                active
                  ? variant === "dark"
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-black shadow-sm"
                  : variant === "dark"
                    ? "text-black/70 hover:text-black"
                    : "text-white/75 hover:text-white"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;