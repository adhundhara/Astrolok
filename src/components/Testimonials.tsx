import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", city: "Mumbai", text: "AstroLok's predictions have been incredibly accurate. The Pandit Ji really understands my birth chart!" },
  { name: "Rahul K.", city: "Delhi", text: "I was skeptical at first, but the Kundali report was so detailed and helpful. Highly recommended!" },
  { name: "Anita M.", city: "Jaipur", text: "The chat feature is amazing. I can ask questions anytime and get guidance. Best astrology app!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Trusted by Thousands
          </h2>
          <p className="mt-3 text-muted-foreground">See what our users say about AstroLok</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="text-xs">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> · {t.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
