import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import iconoPregunta from "@/assets/icono_pregunta.png";

const faqs = [
  {
    question: "¿Qué es exactamente CINTIA?",
    answer:
      "CINTIA es una compañera cultural digital que utiliza inteligencia artificial para personalizar las visitas a museos y espacios culturales. Adapta la información, el tono y el ritmo a cada visitante, haciendo que el arte sea más comprensible y atractivo.",
  },
  {
    question: "¿En qué museos puedo probarla?",
    answer:
      "Actualmente estamos desarrollando el prototipo de la aplicación, por lo que habrá que esperar para poder disfrutarla en museos u otros espacios culturales.",
  },
  {
    question: "¿Cómo pueden los museos colaborar?",
    answer:
      "Si representas un museo o institución cultural, puedes ponerte en contacto con nosotros para explorar una colaboración o prueba piloto. CINTIA ayuda a ofrecer experiencias más innovadoras, inclusivas y conectadas con el público.",
  },
  {
    question: "¿Qué tipo de datos recoge CINTIA?",
    answer:
      "Solo los necesarios para adaptar la experiencia. No almacenamos información personal sensible y seguimos las normativas de privacidad europeas (RGPD).",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoPregunta} 
              alt="Icono pregunta" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Preguntas frecuentes</h2>
          <p className="text-lg text-primary relative z-10">
            Lo esencial sobre CINTIA, de forma clara y sencilla
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-primary/20 rounded-2xl px-6 border border-primary/10 shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
