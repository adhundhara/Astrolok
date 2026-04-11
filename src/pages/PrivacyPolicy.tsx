import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-xs text-muted-foreground mb-8">AstroLok (astrolok.site) — Operated by Random Hit LLP</p>

        <div className="prose prose-sm max-w-none text-foreground/80 space-y-4 text-sm leading-relaxed">
          <p>This Privacy Policy governs the manner in which AstroLok, operated by Random Hit LLP, collects, uses, maintains, and discloses information collected from users ("Users") of the website and mobile application astrolok.site ("Platform"). By accessing or using the Platform, Users agree to the terms outlined herein.</p>

          <p>AstroLok collects personally identifiable information including but not limited to first name, last name, full name, date of birth, place of birth (city/location), current city, gender, and any other information voluntarily provided by the User. Such data is collected strictly for the purpose of delivering astrology-related insights, predictions, and personalized content. The accuracy and relevance of astrological interpretations depend on the authenticity of the information provided by the User, and AstroLok shall not be responsible for incorrect outputs resulting from inaccurate or incomplete user data.</p>

          <p>The Platform may also automatically collect non-personal identification information such as device information, IP address, browser type, operating system, app usage behavior, session duration, and interaction data. This information is used to enhance user experience, improve service delivery, ensure platform security, and optimize performance.</p>

          <p>User data may be stored, processed, and transmitted through secure servers and third-party infrastructure providers. By using the Platform, the User consents to such storage and processing, including cross-border data transfers where applicable. AstroLok implements commercially reasonable safeguards to protect user information; however, no method of transmission over the internet is entirely secure, and absolute security cannot be guaranteed.</p>

          <p>The Platform utilizes automated computational systems, including third-party language processing technologies, for generating astrology-related outputs and responses.</p>

          <p>User information will not be sold, rented, or traded to third parties. However, data may be shared with trusted service providers, legal authorities, or regulatory bodies when required by law, or when necessary to protect rights, safety, or compliance obligations.</p>

          <p>Users may request modification or deletion of their personal data by contacting support; however, certain data may be retained for legal, operational, or compliance purposes. Continued use of the Platform constitutes consent to the data practices described in this Privacy Policy.</p>

          <p>AstroLok reserves the right to update, modify, or revise this Privacy Policy at any time without prior notice. Users are encouraged to review this policy periodically. Continued use after changes implies acceptance of the revised policy.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
