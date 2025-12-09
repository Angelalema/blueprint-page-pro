import { motion } from "framer-motion";
import { Download, UserPlus, Compass, Share2 } from "lucide-react";
import iconoBrujula from "@/assets/icono_brujula.png";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Descarga la app",
    description:
      "Accede a la app de CINTIA desde casa o directamente desde el museo y regístrate para disfrutar de la visita.",
  },
  {
    number: "2",
    icon: UserPlus,
    title: "Cuéntale sobre ti",
    description:
      "Responde unas breves preguntas para que así CINTIA adapte el recorrido y el contenido a tu curiosidad.",
  },
  {
    number: "3",
    icon: Compass,
    title: "Explora y aprende",
    description:
      "Interactúa con CINTIA durante tu recorrido para descubrir el museo y sus obras a tu gusto y ritmo.",
  },
  {
    number: "4",
    icon: Share2,
    title: "Vive y comparte",
    description:
      "Al terminar, CINTIA guardará tu recorrido para que puedas acceder a tu experiencia y aprendizajes cuando quieras.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
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
              src={iconoBrujula} 
              alt="Icono brujula" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">¿Cómo funciona?</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto relative z-10">
            De la curiosidad al descubrimiento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-transparent border border-white rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-6 right-6 text-5xl font-bold text-primary/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                
                {/* Horizontal blue line */}
                <div className="h-[2px] mb-4" style={{ backgroundColor: '#008dff' }}></div>
                
                <p className="text-white flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
