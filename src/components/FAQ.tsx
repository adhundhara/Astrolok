import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is AstroLok?", a: "AstroLok is a personalized astrology platform that provides Rashifal, Kundali, Bhavishyafal, and live chat with experienced astrologers." },
  { q: "How accurate are the predictions?", a: "Our predictions are based on Vedic astrology principles and your exact birth details. The accuracy depends on the correctness of the information you provide." },
  { q: "Is my personal data safe?", a: "Yes, we take privacy seriously. All personal data is encrypted and stored securely. Please refer to our Privacy Policy for more details." },
  { q: "How does the trial work?", a: "You can start with a minimal trial fee to explore basic features with limited messages. Upgrade anytime for full access." },
  { q: "Can I get a refund?", a: "All payments on AstroLok are non-refundable as mentioned in our Terms & Conditions. Please review the plans before making a purchase." },
  { q: "What payment methods do you accept?", a: "We accept all major payment methods including UPI, credit/debit cards, and net banking through our secure payment gateway." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="gradient-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-2 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 animate-fade-in">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
