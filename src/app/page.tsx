import AdvantagesSection from "@/components/home/AdvantagesSection ";
import CertificationSection from "@/components/home/Certificate";
import Header from "@/components/home/header/Header";
import HotNews from "@/components/home/HotNews";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import OurCustomer from "@/components/home/OurCustomer";
import OurGoals from "@/components/home/OurGoles";
import OurProcess from "@/components/home/OurProcess";
import ProductSection from "@/components/home/Products";
import ProfessionalSection from "@/components/home/Professional";

export default function Home() {
  return (
    <div className="space-y-32  mx-auto">
      <Header />

      <ProductSection />
      <ProfessionalSection />
      <OurProcess />
      <IndustriesWeServe />
      <AdvantagesSection />
      <OurGoals />
      <OurCustomer />
      <CertificationSection />
      <HotNews />

    </div>
  );
}
