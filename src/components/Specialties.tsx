
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const specialties = [
  {
    title: "Tratamentos para acne e melasma",
    description: "Protocolos avançados para controle da acne e clareamento seguro do melasma",
    image: "🌟"
  },
  {
    title: "Preenchimentos e toxina botulínica",
    description: "Procedimentos minimamente invasivos para rejuvenescimento facial natural",
    image: "💉"
  },
  {
    title: "Bioestimuladores de colágeno",
    description: "Tratamentos que estimulam a produção natural de colágeno para firmeza da pele",
    image: "✨"
  },
  {
    title: "Procedimentos faciais e corporais",
    description: "Ampla gama de tratamentos estéticos para rosto e corpo",
    image: "💆‍♀️"
  },
  {
    title: "Dermatologia preventiva e diagnóstica",
    description: "Avaliação completa da pele com foco na prevenção e diagnóstico precoce",
    image: "🔬"
  }
];

const Specialties = () => {
  return (
    <section className="py-20 bg-gray-50" id="specialties">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Especialidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos dermatológicos, sempre com 
            tecnologia de ponta e cuidado personalizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{specialty.image}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {specialty.description}
                </CardDescription>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
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
