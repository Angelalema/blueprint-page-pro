import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, MessageSquare, Users } from "lucide-react";
import { useState } from "react";
import iconoLibro from "@/assets/icono_libro.png";

const challenges = [
  {
    icon: BookOpen,
    title: "La cultura no siempre<br />se adapta a ti",
    description: "Muchos visitantes se sienten perdidos ante explicaciones demasiado técnicas o distantes. A veces, cuesta entender qué hace especial una obra.",
    detail: "Eso provoca que resulte difícil conectar con lo que se ve, y la experiencia se vuelve ajena en lugar de cercana e inspiradora.",
    quote: "Siento que las explicaciones no hablan mi idioma.",
  },
  {
    icon: Brain,
    title: "Mucha información,<br />poca emoción",
    description: "Entre carteles, audioguías y cientos de obras, la visita puede convertirse en una avalancha de datos difíciles de procesar.",
    detail: "El exceso de estímulos termina saturando y hace que el arte pierda parte de su magia, dejando menos espacio para disfrutarlo de verdad.",
    quote: "Me voy con a cabeza llena, pero sin haber aprendido nada.",
  },
  {
    icon: MessageSquare,
    title: "Escuchar está bien.<br />Participar, mejor",
    description: "La mayoría de visitas siguen un modelo unidireccional: el museo habla, tú escuchas, sin margen para la curiosidad o la interacción.",
    detail: "Falta un espacio donde puedas explorar, preguntar y sentirte parte de la experiencia, en lugar de limitarte a recibir información.",
    quote: "Ojalá pudiera hablar con el museo, no solo escucharlo.",
  },
  {
    icon: Users,
    title: "No todos<br />aprendemos igual",
    description: "Cada persona conecta con la cultura de una forma distinta: unos prefieren escuchar, otros leer, otros necesitan jugar o emocionarse.",
    detail: "Pero las herramientas actuales no se adaptan a los diferentes ritmos, edades e idiomas, dejando fuera estilos de aprendizaje muy variados.",
    quote: "A veces el ritmo o el formato me hacen desconectar.",
  },
];

export const Challenge = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prevIndex) => {
      // If clicking the same card that's open, close it. Otherwise, open the clicked card (closing any previously open one)
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section id="el-reto" className="py-24 px-6">
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
              src={iconoLibro} 
              alt="Icono libro" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">El reto</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto relative z-10">
            Muchos visitantes comparten experiencias similares en los museos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ alignItems: 'start' }}>
          {challenges.map((challenge, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleCard(index)}
                animate={isOpen ? { scale: 1.02 } : { scale: 1 }}
                className="bg-transparent border border-white rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 relative flex flex-col cursor-pointer min-h-[400px]"
              >
                {/* Top section with icon area */}
                <div className="relative p-6 pb-4">
                  {/* Icon displayed in the top area */}
                  <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4">
                    <div className="flex items-center justify-center w-full h-full rounded-2xl bg-primary/10">
                      <challenge.icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="px-6 pb-4 flex flex-col overflow-hidden">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground text-center" dangerouslySetInnerHTML={{ __html: challenge.title }}></h3>
                  
                  {/* Separator line */}
                  <div className="h-[2px] mb-2" style={{ backgroundColor: '#008dff' }}></div>
                  
                  {/* Body text - shown only when open */}
                  <div className="overflow-hidden min-h-0">
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.div
                          key={`body-content-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="space-y-3 pb-2 pt-2">
                            <p className="text-sm text-foreground">{challenge.description}</p>
                            <p className="text-sm text-foreground">{challenge.detail}</p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Quote with light blue background at bottom */}
                <div className="px-6 pb-6 mt-auto">
                  <div className="bg-primary/20 rounded-xl p-4">
                    <blockquote className="text-sm font-bold italic text-foreground">
                      "{challenge.quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
