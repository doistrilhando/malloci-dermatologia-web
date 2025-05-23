
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import Specialties from "@/components/Specialties";
import BeforeAfter from "@/components/BeforeAfter";
import AboutClinic from "@/components/AboutClinic";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutDoctor />
      <Specialties />
      <BeforeAfter />
      <AboutClinic />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
