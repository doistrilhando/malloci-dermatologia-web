
import { Button } from "@/components/ui/button";
import { MessageSquare, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/lovable-uploads/b3255fcf-2d44-4f1c-9af1-90b06912701e.png" alt="Dra. Mirella Malloci Logo" className="h-16 mb-6 filter brightness-0 invert" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Dra. Mirella Malloci
            </h3>
            
            <div className="h-1 w-16 bg-primary mb-6"></div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-xl">
              Dermatologia clínica, estética e preventiva com excelência, ética e tecnologia.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço:</h4>
                    <p className="text-gray-400">
                      Rua Barão de Paranapiacaba, 233, cj 801<br />
                      Santos, São Paulo - Brazil | 11050-251
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Atendimento:</h4>
                    <p className="text-gray-400">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábados: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Contato:</h4>
                    <p className="text-gray-400">
                      +55 13 99178-7870
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email:</h4>
                    <p className="text-gray-400">
                      contato@dramirellamalloci.com.br
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Informações Profissionais:</h4>
                  <p className="text-gray-400">
                    CRM 125141 | RQE 80716 - RQE 75153
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Redes Sociais</h4>
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full border-green-500 text-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300">
                <a href="https://wa.me/5513991787870" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="outline" className="w-full border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                <a href="https://instagram.com/dramirellamallocci" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
            
            <div className="mt-10 bg-gray-800/50 p-6 rounded-lg">
              <h5 className="font-medium text-primary mb-3">Agendamento</h5>
              <p className="text-gray-400 text-sm mb-4">
                Agende sua consulta através do WhatsApp ou entre em contato por telefone para mais informações.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white transition-all duration-300">
                <a href="https://wa.me/5513991787870?text=Olá,+quero+agendar+minha+consulta+com+a+Dra.+Mirella" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Dra. Mirella Malloci. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
