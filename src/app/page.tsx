import AboutSection from "@/components/home/About";
import AdvantagesSection from "@/components/home/AdvantagesSection ";
// import CTASection from "@/components/home/CTASection";
import Header from "@/components/home/header/Header";
// import HotNews from "@/components/home/HotNews";
import OurCustomer from "@/components/home/OurCustomer";
import OurGoals from "@/components/home/OurGoles";
// import OurProcess from "@/components/home/OurProcess";
import ProductSection from "@/components/home/Products";
import ProfessionalSection from "@/components/home/Professional";

export default function Home() {
  return (
    <div className="space-y-32  mx-auto">
      <Header />
      <AboutSection />
      <ProductSection />
      <ProfessionalSection />
      {/* <OurProcess /> */}
      {/* <IndustriesWeServe /> */}
      <AdvantagesSection />
      <OurGoals />
      <OurCustomer />
      {/* <CertificationSection /> */}
      {/* <HotNews /> */}
      {/* <CTASection /> */}

    </div>
  );
}
