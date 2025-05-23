
import { Button } from "@/components/ui/button";
import { WhatsApp, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/b3255fcf-2d44-4f1c-9af1-90b06912701e.png" 
                alt="Dra. Mirella Malloci Logo" 
                className="h-16 mb-4 filter brightness-0 invert"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Dra. Mirella Malloci
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dermatologia clínica, estética e preventiva com excelência, ética e tecnologia.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Endereço:</h4>
              <p className="text-gray-300">
                Rua Barão de Paranapiacaba, 233, cj 801<br />
                Santos, São Paulo - Brazil | 11050-251
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Informações Profissionais:</h4>
              <p className="text-gray-300">
                CRM 125141 | RQE 80716 - RQE 75153
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <Button 
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
              >
                <a 
                  href="https://wa.me/5513991787870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <WhatsApp className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <a 
                  href="https://instagram.com/dramirellamallocci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dra. Mirella Malloci. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
