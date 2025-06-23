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
export const metadata = {
  title: 'Hun Hsin Textile – Premium Nylon & Recycled Yarn Supplier',
  description:
    'Welcome to Hun Hsin Textile., your trusted source for 100% Nylon Yarn, Recycled Nylon Yarn, and China Feather Yarn. High quality and sustainable textile solutions.',
  keywords: [
    'Nylon Yarn',
    '100% Nylon Yarn',
    'Recycled Nylon Yarn',
    'China Feather Yarn',
    'Textile Yarn Supplier',
    'Sustainable Yarn',
    'Eco-friendly Yarn',
    'Textile Manufacturer',
    'Premium Yarn Supplier',
    'Yarn Exporter',
    '100% Nylon Yarn',
    'Nylon Yarn Supplier',
    'Recycled Nylon Yarn',
    'Eco-friendly Nylon Yarn',
    'China Feather Yarn',
    'Feather Yarn Supplier',
    'Premium Nylon Yarn',
    'Durable Nylon Yarn',
    'Sustainable Yarn Supplier',
    'Textile Yarn Manufacturer',
    'Bulk Nylon Yarn',
    'Nylon Yarn Exporter',
    'Recycled Yarn for Textiles',
    'Soft Feather Yarn',
    'Industrial Nylon Yarn',
    'Knitting Yarn Supplier',
    'Weaving Nylon Yarn',
    'Nylon Yarn for Apparel',
    'Yarn for Textile Industry',
    'Feather Yarn for Sweaters',
    'Custom Nylon Yarn',
    'Low-Melt Nylon Yarn',
    'High Tenacity Nylon Yarn',
    'Recycled Polyamide Yarn',
    'OEM Nylon Yarn Supplier',
    'Bulk Yarn Supplier',
    'Sustainable Textile Materials',
    'Nylon Yarn Rolls',
    'Feather Yarn for Fashion',
    'Eco Yarn Manufacturer',
    'Textile Yarn Export',
    'Nylon Yarn for Sportswear',
    'Anti-Static Nylon Yarn',
    'Recycled Yarn Wholesale',
    'Soft Yarn for Winter Wear',
    'High Quality Nylon Yarn',
    'Yarn for Hosiery',
    'China Nylon Yarn Exporter',
    'Feather Yarn Manufacturer',
    'Recycled Yarn for Circular Fashion',
    'Custom Dyed Nylon Yarn',
    'Nylon Yarn Factory',
    'Feather Yarn for Scarves',
    'Sustainable Yarn Solutions',
    'Textile Yarn Bulk Order',
    'Durable Yarn for Knitting',
    'Nylon Yarn for Industrial Use',
    'Recycled Yarn for Apparel',
    'Eco-Friendly Textile Yarn',
    'Premium Yarn Supplier China',
    'High Strength Nylon Yarn',
    'Eco-friendly Yarn Bangladesh',
    'Sustainable Yarn Bangladesh',
    'Bulk Yarn Supplier Bangladesh',
    'Custom Nylon Yarn Bangladesh',
    'Nylon Yarn Exporter Bangladesh',
    'China Nylon Yarn Supplier',
    'Wholesale Nylon Yarn China',
    'Recycled Nylon Yarn China',
    'Feather Yarn Manufacturer China',
    'China Textile Yarn Exporter',
    'Premium Nylon Yarn China',
    'Eco-friendly Yarn China',
    'Bulk Nylon Yarn China',
    'Sustainable Yarn China',
    'China Yarn Factory',
    'Nylon Yarn Supplier Europe',
    'Recycled Nylon Yarn Europe',
    'Textile Yarn Manufacturer Europe',
    'Wholesale Nylon Yarn Europe',
    'Sustainable Yarn Europe',
    'Feather Yarn Supplier Europe',
    'Eco-friendly Yarn Europe',
    'Bulk Nylon Yarn Europe',
    'Custom Nylon Yarn Europe',
    'Premium Yarn Europe',
    'Nylon Yarn Supplier USA',
    'Buy Nylon Yarn in USA',
    'Recycled Nylon Yarn USA',
    'Textile Yarn Manufacturer USA',
    'Wholesale Nylon Yarn USA',
    'Sustainable Yarn USA',
    'Feather Yarn Supplier USA',
    'Industrial Nylon Yarn USA',
    'Custom Nylon Yarn USA',
    'Eco-friendly Yarn USA',
    'Bulk Nylon Yarn USA',
    'Premium Yarn USA',

  ],

  authors: [{ name: 'Hun Hsin Textile' }],
};
export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16  mx-auto">
      <Header />
      <AboutSection />
      <ProductSection />
      <ProfessionalSection />

      <AdvantagesSection />
      <OurGoals />
      <OurCustomer />

    </div>
  );
}
