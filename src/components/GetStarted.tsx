import { useState } from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  const [form, setForm] = useState({ name: "", gender: "", dob: "", city: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would navigate to payment
    alert("Thank you! Redirecting to payment...");
  };

  return (
    <section id="get-started" className="py-16 md:py-24 bg-card">
      <div className="container max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Tell Us About Yourself
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">
            We need your details to accurately provide your astrology readings
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gradient-card rounded-2xl p-6 md:p-8 shadow-elevated space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Gender</label>
            <select
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">City / Location</label>
            <input
              type="text"
              placeholder="e.g. Mumbai, Delhi, Jaipur"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full gradient-warm text-primary-foreground py-3.5 rounded-xl font-semibold text-base shadow-soft hover:opacity-90 transition-opacity mt-2"
          >
            Start Your Journey ✨
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default GetStarted;
