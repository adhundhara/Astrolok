import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Contact Us</h1>
        <p className="text-muted-foreground text-sm mb-6">Have a question? We'd love to hear from you.</p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a href="tel:+918697633940" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors text-center">
            <span className="text-2xl">📞</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Phone</span>
            <span className="text-sm font-semibold text-foreground">+91 86976 33940</span>
          </a>
          <a href="mailto:support@astrolok.site" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors text-center">
            <span className="text-2xl">✉️</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</span>
            <span className="text-sm font-semibold text-foreground">support@astrolok.site</span>
          </a>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
            <span className="text-2xl">📍</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Address</span>
            <span className="text-sm font-semibold text-foreground leading-snug">Rd 4, Ridhi Sidhi Enclave 1st,<br />Sri Ganganagar, Rajasthan 335001</span>
          </div>
        </div>

        <div className="gradient-card rounded-2xl p-6 md:p-8 shadow-elevated">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            If you have any queries, we encourage you to first read our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>{" "}
            and{" "}
            <Link to="/terms" className="text-primary hover:underline font-medium">Terms & Conditions</Link>{" "}
            for detailed information about how we operate.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed mt-5">
            If you have any questions related to refunds, please note that we strictly do not provide refunds. We offer a trial so you can explore the app first — if you like it, you can continue with the subscription. This policy ensures fairness for all our users.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed mt-5">
            If you have any other queries, please feel free to reach out to us. You can also contact us for business deals, partnerships, collaborations, or any other business-related inquiries — we are always open to exploring new opportunities.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed mt-5">
            For personal astrology queries such as Rashifal, Bhavishyafal, Kundali, or any other astrological guidance, please use the AstroLok app directly — our experienced astrologers are available there to assist you through the chat feature.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed mt-5 whitespace-pre-line">
            However, if you are facing any bugs, want to report an issue in the app, or are experiencing any technical errors, please feel free to reach out to us at the email below. We will do our best to resolve your issue as quickly as possible.{"\n"}
            RANDOM HIT LLP{"\n"}
            Rd 4, Ridhi Sidhi Enclave 1st{"\n"}
            Sri Ganganagar, Rajasthan 335001{"\n"}
            Phone: +91 86976 33940
          </p>

          <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
            <Mail size={20} className="text-primary" />
            <a href="mailto:support@astrolok.site" className="text-primary text-lg font-semibold hover:underline">
              support@astrolok.site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
