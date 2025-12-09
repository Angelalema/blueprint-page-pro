import { motion } from "framer-motion";
import phonesImage from "@/assets/phones-cintia.png";
import iconoCintia from "@/assets/icono_cintia.png";

export const AboutCintia = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header section - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoCintia} 
              alt="Icono Cintia" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Cintia</h2>
          <p className="text-xl text-primary max-w-2xl mx-auto relative z-10">
            Una nueva forma de vivir la cultura
          </p>
        </motion.div>

        {/* Content section with container and phones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            {/* Left side - Text container */}
            <div className="lg:pr-[50%]">
              <div className="bg-primary/20 rounded-3xl p-8 md:p-12 relative overflow-visible">
                <div className="text-left space-y-6">
                  <p className="text-base text-white leading-relaxed">
                    <span className="font-bold">CINTIA</span> es tu compañera cultural digital. Combina inteligencia artificial, diseño y creatividad para que cada visita al museo sea única y adaptada a ti.
                  </p>
                  <p className="text-base text-white leading-relaxed">
                    Aprende de tus intereses, de tu ritmo y de cómo disfrutas. Por eso ajusta el contenido, la voz y las explicaciones para que el arte te hable en tu idioma.
                  </p>
                  <p className="text-base text-white leading-relaxed">
                    Puedes hablar con CINTIA, preguntarle dudas o escucharla mientras exploras. Te guía, te acompaña y convierte cada recorrido en una experiencia personal, cercana y memorable.
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <button 
                    onClick={() => {
                      const section = document.getElementById("como-funciona");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 hover:shadow-glow transition-all duration-300"
                  >
                    Cómo funciona
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Phones visual (coming out of container) */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:z-20">
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src={phonesImage}
                  alt="CINTIA app on phones"
                  className="w-full max-w-[403px] lg:max-w-[540px] lg:w-auto h-auto"
                  style={{ minWidth: '49.5%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
