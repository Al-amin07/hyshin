import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqData = [
  {
    question:
      "What makes Hun Hsin Textile different from other Nylon Yarn suppliers?",
    answer:
      "We combine precision manufacturing, eco-conscious innovation, and global compliance to deliver premium nylon yarns at competitive prices. Our vertical integration and OEM/ODM flexibility make us a trusted partner for both fashion and industrial markets.",
  },
  {
    question:
      "Which nylon yarn types do you specialize in; and can they be customized?",
    answer:
      "We specialize in nylon 6 and nylon 66 yarns in various forms: DTY (Draw Textured Yarn), FDY (Fully Drawn Yarn), ATY (Air Textured Yarn), and high-tenacity industrial yarns. Every product can be customized in denier, color, finish, and performance through our OEM/ODM program.",
  },
  {
    question:
      "Are your Nylon Yarns certified for global export and sustainable manufacturing?",
    answer:
      "Yes. Our yarns meet international quality and sustainability benchmarks, including OEKO-TEX® certification, GRS (Global Recycled Standard), and REACH compliance. Sustainability and transparency are core to our production philosophy.",
  },
  {
    question: "What industries do you serve beyond just fashion apparel?",
    answer:
      "Beyond retail fashion, our nylon yarns are used in functional textiles, sportswear, intimate apparel, home textiles, technical fabrics, automotive interiors, luggage, socks, and even fishing nets proving our versatility across sectors.",
  },
  {
    question:
      "How do you ensure quality control throughout the manufacturing process?",
    answer:
      "Every stage from polymerization to final winding undergoes strict inspection using modern lab testing and digital monitoring systems. We check for denier uniformity, tensile strength, elongation, color fastness, and more.",
  },
  {
    question:
      "How can international buyers start working with Hun Hsin Textile?",
    answer:
      "We make it easy. Reach out via our website or email with your requirements. Our team will provide samples, technical datasheets, pricing, and shipping details. We handle everything from product customization to export documentation with full transparency.",
  },
  {
    question: "Are you a direct manufacturer or a trading company?",
    answer:
      "We are a direct manufacturer, not a trading company. All production is handled in-house, ensuring consistent quality, competitive pricing, and reliable delivery. ",
  },
  {
    question: "What is the production capacity of your company ?",
    answer:
      "Our annual production capacity is around 300,000 tons of nylon yarn, supported by advanced machinery and efficient operations to meet large and custom orders.",
  },
  {
    question: "What are your payment terms ?",
    answer:
      "   We accept L / C, T / T, D / P, and D / A.For long - term clients, we also offer extended L / C terms of 90 to 120 days, based on agreement.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#162B48] mt-24 text-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left section */}
        <div className="max-w-1/3">
          {/* <p className="text-yellow-400 text-2xl font-semibold mb-2">FAQ</p> */}
          <h2 className="text-3xl lg:text-6xl font-extrabold leading-tight">
            ASK US
            <br className="" />
            ANYTHING
          </h2>
        </div>

        {/* Right section */}
        <div className="flex-1">
          {/* <Accordion type="single" collapsible className="space-y-4">
                        {[
                            "WHAT'S THE FLEECE FABRIC?",
                            "WHAT IS FLEECE FABRIC MADE OF?",
                            "HOW TO BUY FLEECE FABRIC?",
                            "HOW TO WASH FLEECE FABRIC?",
                        ].map((question, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-t border-yellow-400">
                                <AccordionTrigger className="text-yellow-400 font-bold text-lg hover:no-underline">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white pt-2">
                                    This is a sample answer for
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion> */}
          <Accordion
            type="single"
            collapsible
            className="w-full "
            defaultValue={faqData[0]?.question}
          >
            {faqData.map((el) => (
              <AccordionItem className="" key={el.question} value={el.question}>
                <AccordionTrigger className="text-lg">
                  {el?.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>{el?.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
