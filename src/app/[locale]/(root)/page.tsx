import CookiesModal from "./components/CookiesModal";
import WhereToBuy from "./components/WhereToBuy.home";
import Newsletter from "./components/Newsletter.home";
import MainSlider from "./components/MainSlider.home";
import MarketsSection from "./components/Markets.home";
import Collections from "./components/Collections";
import ContactForm from "@/components/forms/ContactForm";
import LatestArticles from "./components/LatestArticles.home";
import Sustainability from "./components/Sustainability.home";

export default function Home() {
  
  return (
    <div className="w-full h-auto flex flex-col items-center sm:items-start">
      <MainSlider />
      <MarketsSection />
      <Collections />
      <Sustainability />
      <LatestArticles />
      <ContactForm formType={'home'}/>
      <WhereToBuy />
      <Newsletter />
    </div>
  );
}
