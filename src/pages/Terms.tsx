import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-xs text-muted-foreground mb-8">AstroLok — Operated by Random Hit LLP</p>

        <div className="prose prose-sm max-w-none text-foreground/80 space-y-4 text-sm leading-relaxed">
          <p>By accessing or using AstroLok, operated by Random Hit LLP, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, you must discontinue use of the Platform immediately.</p>

          <p>AstroLok provides astrology-based content, predictions, and guidance strictly for informational and entertainment purposes. The Platform does not guarantee accuracy, reliability, or outcomes of any predictions. Users acknowledge that all interpretations are subjective and should not be relied upon for making financial, legal, medical, or life-critical decisions. AstroLok shall not be held liable for any direct, indirect, incidental, or consequential losses arising from the use of the Platform.</p>

          <p>All services offered on AstroLok are non-refundable under any circumstances. Once a payment is made, it cannot be reversed, refunded, or canceled, regardless of usage or dissatisfaction.</p>

          <p>The Platform may offer a trial access plan at a nominal fee (starting from ₹1 or any other amount). The trial amount, features, duration, and limitations are variable and subject to change at any time without prior notice. Both trial and paid versions may include usage restrictions such as message limits, feature caps, or access limitations, which may be modified at the sole discretion of AstroLok.</p>

          <p>AstroLok reserves the right to change, modify, suspend, or discontinue any pricing plans, subscription models, trial offers, or features at any time without prior notice. Continued usage after such changes constitutes acceptance of the revised terms.</p>

          <p>Users agree to provide accurate and complete information. Any misuse, fraudulent activity, or attempt to manipulate the Platform may result in immediate suspension or termination of access without refund.</p>

          <p>AstroLok does not assume any liability for interruptions, errors, delays, or unavailability of the Platform. The service is provided on an "as-is" and "as-available" basis without warranties of any kind, either express or implied.</p>

          <p>The company does not accept any responsibility or liability for decisions made by users based on astrology predictions provided through the Platform. Users agree that they are solely responsible for their actions and outcomes.</p>

          <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising shall fall under the jurisdiction determined by Random Hit LLP.</p>

          <p>AstroLok reserves the full right to update or modify these Terms & Conditions at any time. Continued use of the Platform signifies acceptance of the updated terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
