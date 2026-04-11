import { motion } from "framer-motion";
import { User, Calendar, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Enter Your Details",
    desc: "Provide your name, gender, date of birth, and birth location for accurate readings.",
  },
  {
    icon: Calendar,
    title: "Get Personalized Insights",
    desc: "Receive your Rashifal, Kundali, and Bhavishyafal based on your birth chart.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Astrologer",
    desc: "Ask questions and get guidance from experienced Pandit Ji in real-time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to your astrology journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center shadow-soft mb-5">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
