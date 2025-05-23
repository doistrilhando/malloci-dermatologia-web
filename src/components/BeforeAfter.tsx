
import { useState } from "react";
import { Button } from "@/components/ui/button";

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
    title: "Tratamento de Melasma"
  },
  {
    before: "https://images.unsplash.com/photo-1594824209347-d2ad5b5a5a8e?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=300&fit=crop",
    title: "Rejuvenescimento Facial"
  },
  {
    before: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
    title: "Tratamento de Acne"
  }
];

const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white" id="before-after">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Antes e Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de nossos tratamentos, demonstrando a eficácia e 
            qualidade dos nossos procedimentos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-700">Antes</h3>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={beforeAfterImages[activeIndex].before}
                  alt="Antes do tratamento"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-center mb-4 text-primary">Depois</h3>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={beforeAfterImages[activeIndex].after}
                  alt="Depois do tratamento"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              {beforeAfterImages[activeIndex].title}
            </h4>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            {beforeAfterImages.map((_, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "default" : "outline"}
                className={`w-4 h-4 rounded-full p-0 ${
                  activeIndex === index 
                    ? "bg-primary" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-4">
              *Resultados podem variar de acordo com cada paciente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
