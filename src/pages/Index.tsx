import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Challenge } from "@/components/Challenge";
import { AboutCintia } from "@/components/AboutCintia";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { Audiences } from "@/components/Audiences";
import { MissionVision } from "@/components/MissionVision";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Challenge />
      <div id="cintia">
        <AboutCintia />
      </div>
      <div id="como-funciona">
        <HowItWorks />
      </div>
      <WhyChoose />
      <Audiences />
      <div id="mision">
        <MissionVision />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
