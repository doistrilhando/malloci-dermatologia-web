
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Shield, Sparkles, Droplet, Heart, Microscope, Zap } from "lucide-react";

const specialties = [
  {
    title: "Tratamentos para acne e melasma",
    description: "Protocolos avançados para controle da acne e clareamento seguro do melasma",
    icon: Droplet
  },
  {
    title: "Preenchimentos e toxina botulínica",
    description: "Procedimentos minimamente invasivos para rejuvenescimento facial natural",
    icon: Sparkles
  },
  {
    title: "Bioestimuladores de colágeno",
    description: "Tratamentos que estimulam a produção natural de colágeno para firmeza da pele",
    icon: Shield
  },
  {
    title: "Procedimentos faciais e corporais",
    description: "Ampla gama de tratamentos estéticos para rosto e corpo",
    icon: Heart
  },
  {
    title: "Dermatologia preventiva e diagnóstica",
    description: "Avaliação completa da pele com foco na prevenção e diagnóstico precoce",
    icon: Microscope
  },
  {
    title: "Tratamentos a laser",
    description: "Tecnologias avançadas a laser para rejuvenescimento, remoção de manchas e cicatrizes",
    icon: Zap
  }
];

const Specialties = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="specialties">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Especialidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos dermatológicos, sempre com 
            tecnologia de ponta e cuidado personalizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border-0 shadow-lg bg-white overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <specialty.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-gray-600 mb-8 leading-relaxed">
                  {specialty.description}
                </CardDescription>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
                >
                  <a 
                    href="https://wa.me/5513991787870?text=Olá,+quero+saber+mais+sobre+os+tratamentos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Quero saber mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
