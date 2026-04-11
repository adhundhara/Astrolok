import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Trial",
    price: "₹1",
    period: "one-time",
    desc: "Try AstroLok with limited access",
    features: ["Limited chat messages", "Basic Rashifal", "1 Kundali report"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹XXX",
    period: "/month",
    desc: "Full access to all features",
    features: ["Unlimited chat", "Daily Rashifal", "Unlimited Kundali", "Priority support", "Detailed predictions"],
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Simple & Affordable
          </h2>
          <p className="mt-3 text-muted-foreground">Start with just ₹1 and explore your destiny</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "gradient-warm text-primary-foreground border-transparent shadow-elevated"
                  : "gradient-card border-border shadow-card"
              }`}
            >
              <h3 className="font-display text-lg font-bold mb-1">{plan.name}</h3>
              <p className={`text-xs mb-4 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={plan.highlight ? "text-primary-foreground" : "text-primary"} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-background text-foreground"
                    : "gradient-warm text-primary-foreground shadow-soft"
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
