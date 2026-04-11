import { motion } from "framer-motion";
import { Sun, BookOpen, MessageSquare, Star, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: Sun, title: "Instant Rashifal", desc: "Get your daily, weekly, and monthly horoscope instantly." },
  { icon: BookOpen, title: "Personalized Kundali", desc: "Detailed birth chart analysis based on Vedic astrology." },
  { icon: MessageSquare, title: "Live Astrology Chat", desc: "Chat directly with experienced astrologers in real-time." },
  { icon: Star, title: "Accurate Predictions", desc: "Bhavishyafal and life predictions rooted in ancient wisdom." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Safe and encrypted payment processing for all transactions." },
  { icon: Zap, title: "Fast Access", desc: "Lightning-fast app with instant access to all features." },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">AstroLok</span>?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Everything you need for a complete astrology experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
