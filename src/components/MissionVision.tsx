import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useState } from "react";
import iconoMapa from "@/assets/icono_mapa.png";

export const MissionVision = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prevIndex) => {
      // If clicking the same card that's open, close it. Otherwise, open the clicked card (closing any previously open one)
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section id="mision" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoMapa} 
              alt="Icono mapa" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Misión y Visión</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto relative z-10">
            Presente y futuro de CINTIA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => toggleCard(0)}
            className="bg-primary/20 rounded-3xl p-12 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">MISIÓN</h3>
            <p className="text-2xl md:text-3xl text-center mb-8 italic text-primary font-semibold">
              "Acercar la cultura<br />a cada persona"
            </p>
            
            {/* Body text - shown only when open */}
            <div className="overflow-hidden">
              <AnimatePresence>
                {openIndex === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-base text-center text-white leading-relaxed pt-4 border-t border-primary/30">
                      CINTIA existe para hacer que la visita al museo sea más clara, accesible y personalizada. Acompañamos a cada visitante según su ritmo, sus intereses y su forma de aprender, para que conectar con el arte sea algo natural, cercano y significativo.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => toggleCard(1)}
            className="bg-primary/20 rounded-3xl p-12 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">VISIÓN</h3>
            <p className="text-2xl md:text-3xl text-center mb-8 italic text-primary font-semibold">
              "Democratizar el acceso<br />mundial a la cultura"
            </p>
            
            {/* Body text - shown only when open */}
            <div className="overflow-hidden">
              <AnimatePresence>
                {openIndex === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-base text-center text-white leading-relaxed pt-4 border-t border-primary/30">
                      Aspiramos a transformar la experiencia cultural con tecnología responsable e inteligente. Imaginamos museos y demás entidades culturales más humanas e inclusivas, capaces de ajustarse a la diversidad de sus visitantes y de ofrecer experiencias que realmente emocionen y conecten con cada persona.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
