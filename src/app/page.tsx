import AdvantagesSection from "@/components/home/AdvantagesSection ";
import Header from "@/components/home/header/Header";
import HotNews from "@/components/home/HotNews";
import ProductSection from "@/components/home/Products";
import ProfessionalSection from "@/components/home/Professional";

export default function Home() {
  return (
    <div className="space-y-32  mx-auto">
      <Header />

      <ProductSection />
    <ProfessionalSection />
<AdvantagesSection/>
<HotNews />

    </div>
  );
}
