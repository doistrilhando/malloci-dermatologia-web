
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente profissional! Tratamento para melasma superou minhas expectativas. Ambiente acolhedor e atendimento humanizado.",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Dra. Mirella é muito atenciosa e explica cada procedimento. Resultados incríveis no tratamento de acne!",
    rating: 5
  },
  {
    name: "Juliana Santos",
    text: "Clínica moderna e limpa. A doutora é muito competente e carinhosa. Recomendo para todos!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nossos pacientes dizem sobre os tratamentos e atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-slide-up border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
