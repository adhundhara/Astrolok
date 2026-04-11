import { motion } from "framer-motion";
import mockupChat from "@/assets/mockup-chat.png";
import mockupKundali from "@/assets/mockup-kundali.png";
import mockupPredictions from "@/assets/mockup-predictions.png";

const mockups = [
  { src: mockupChat, alt: "Chat with Astrologer", label: "" },
  { src: mockupKundali, alt: "Kundali Chart", label: "" },
  { src: mockupPredictions, alt: "Daily Predictions", label: "" },
];

const AppPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Experience <span className="text-primary">AstroLok</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            A glimpse into your personalized astrology journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {mockups.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="relative group">
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  width={280}
                  height={490}
                  className="w-56 md:w-64 rounded-3xl shadow-elevated transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {m.label && <p className="mt-4 font-semibold text-foreground text-sm">{m.label}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
