
const AboutClinic = () => {
  return (
    <section className="py-20 bg-blue-50" id="about-clinic">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Clínica
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Nossa clínica foi projetada para oferecer o máximo de conforto e segurança aos nossos pacientes. 
                Localizada no coração de Santos, em um ambiente moderno e acolhedor.
              </p>
              
              <p>
                Contamos com equipamentos de última geração e seguimos rigorosos protocolos de segurança e 
                higienização, garantindo a excelência em todos os procedimentos realizados.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Nossos Diferenciais:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Atendimento personalizado e humanizado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Tecnologia de ponta em todos os procedimentos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Ambiente seguro e acolhedor
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Protocolos rigorosos de higienização
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop"
                alt="Recepção da clínica"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop"
                alt="Sala de procedimentos"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=200&fit=crop"
                alt="Consultório"
                className="rounded-xl shadow-lg w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
