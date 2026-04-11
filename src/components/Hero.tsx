import { motion } from "framer-motion";
import logo from "@/assets/astrolok-logo.png";

const Hero = () => {
  return (
    <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img src={logo} alt="AstroLok Logo" className="w-24 h-24 md:w-32 md:h-32 mb-6" width={128} height={128} />
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Discover Your <span className="text-primary">Bhavishya Phal</span> with AstroLok
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Get personalized Rashifal, Kundali, Bhavishyafal, and astrology insights  — all in one app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.astrolok.app"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-warm text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold shadow-soft hover:opacity-90 transition-all hover:shadow-elevated"
          >
            📱 Download App
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
