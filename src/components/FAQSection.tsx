import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this for beginners or advanced creators?",
    answer:
      "Both. Whether you're just starting or already have an audience but can't monetize, this community will give you the blueprint to build a profitable brand.",
  },
  {
    question: "Do I need to already have a product or offer or a business?",
    answer:
      "No! We will teach you how to build your brand first — so that when you're ready to sell, people will already be ready to buy.",
  },
  {
    question: "Is this only for influencers or network marketers?",
    answer:
      "No. This is for ANY woman who wants to build a powerful personal brand — whether you're a content creator, coach, digital marketer, product-based business owner, entrepreneur, or you just want to START.",
  },
  {
    question: "Is there a payment plan?",
    answer:
      "Yes, but only for U.S. residents through ZIP or Klarna. All others must pay in full",
  },
  {
    question: "How do I earn with the affiliate program?",
    answer:
      "Once you join, you'll get your own affiliate link. Every time you refer a woman to this community, you earn 50% commission",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds. All sales are final. Please read the program details carefully before enrolling.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
          I KNOW YOU'VE GOT <span className="font-bold">QUESTIONS</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg px-6"
            >
              <AccordionTrigger className="font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
