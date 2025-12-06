"use client"
import { useTranslations } from "next-intl";
import NewsletterForm from "./NewsletterForm.home";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";

const Newsletter = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const t = useTranslations("Newsletter");

  return (
    <section className="bg-(--aqua-dark) py-12 w-full! relative bottom-[-15px]">
      <div className={clsx("container mx-auto flex justify-center", isMobile ? "flex-col items-center" : "flex-row")}>
        <div className={clsx("w-full content-center text-left", 
          !isMobile && "w-[48%] pl-0 pr-10" 
        )}>
          <h2 className="text-white leading-tight font-normal">{t("title")}</h2>
          <p className={clsx("text-(--gray-20) mt-4 pr-7", !isMobile && "px-0")}>
            {t("description")}
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default Newsletter;
