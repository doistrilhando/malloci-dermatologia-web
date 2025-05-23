
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/b3255fcf-2d44-4f1c-9af1-90b06912701e.png" 
                alt="Dra. Mirella Malloci Logo" 
                className="h-20 mx-auto lg:mx-0 mb-8"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Dra. Mirella Malloci
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-primary font-medium mb-6">
              Dermatologia clínica, estética e preventiva
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cuidar da saúde e beleza da sua pele com excelência, ética e tecnologia. 
              Consultas e tratamentos personalizados com acompanhamento humanizado em 
              um ambiente moderno e acolhedor.
            </p>
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a 
                href="https://wa.me/5513991787870?text=Olá,+quero+agendar+minha+consulta+com+a+Dra.+Mirella"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                Quero agendar minha consulta
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-20 blur-2xl"></div>
              <img 
                src="/lovable-uploads/6820730d-b54a-4f4f-94cd-606e52314953.png" 
                alt="Dra. Mirella Malloci" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
