import { useTranslations } from "next-intl";
import MarketsSlider from "./MarketsSlider.home";

const MarketsSection =  () => {
  const t = useTranslations("HomePage.ExpertiseSection");
  return (
    <div className="w-full my-20 space-y-6">
      <div className="container mx-auto space-y-2">
        <h2 className="font-normal">{t("title")}</h2>
        <p className="text-(--gray-60)">{t("description")}</p>
      </div>
      <div className="flex gap-4 align-center items-center w-full">
        <MarketsSlider />
      </div>
    </div>
  );
};

export default MarketsSection;
