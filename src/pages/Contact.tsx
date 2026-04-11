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
        <p className="text-muted-foreground text-sm mb-8">Have a question? We'd love to hear from you.</p>

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
            Floor No: First{"\n"}
            Street: Ridhi Sidhi Enclave 1st City/Town/Village: Sri Ganganagar District: Sri Ganganagar State: Rajasthan PIN Code: 335001{"\n"}
            Phone N0 - +91 87697 63320
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
