
const AboutDoctor = () => {
  return (
    <section className="py-20 bg-white" id="about-doctor">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quem é a Dra. Mirella?
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Médica dermatologista formada pela prestigiosa Universidade Federal de São Paulo (UNIFESP), 
                com especialização em dermatologia clínica, estética e cirúrgica.
              </p>
              
              <p>
                Com mais de 10 anos de experiência, a Dra. Mirella dedica-se ao cuidado integral da pele, 
                combinando conhecimento científico de ponta com uma abordagem humanizada e personalizada 
                para cada paciente.
              </p>
              
              <p>
                Seu compromisso é oferecer tratamentos seguros e eficazes, sempre priorizando a saúde e 
                bem-estar dos seus pacientes, em um ambiente acolhedor e com tecnologia de última geração.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-primary font-semibold text-lg">
                "Acredito que cada pele é única e merece cuidados especiais. Minha missão é proporcionar 
                saúde, confiança e bem-estar através de tratamentos personalizados."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-primary-dark rounded-xl opacity-10"></div>
              <img 
                src="/lovable-uploads/6820730d-b54a-4f4f-94cd-606e52314953.png" 
                alt="Dra. Mirella Malloci - Consultório" 
                className="relative w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
