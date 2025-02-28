import ContributorsSection from "./components/ContributorsSection";
import FeaturesSection from "./components/FeaturesSection";
import FixedBackground from "./components/FixedBackground";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import WidgetsSection from "./components/WidgetsSection";

export default function App() {
  return (
    <>
      <FixedBackground />
      <HeroSection />

      <div className="max-w-lg mx-auto space-y-16 px-4">
        <FeaturesSection />
        <WidgetsSection />
        <ContributorsSection />
        <FooterSection />
      </div>
    </>
  );
}
