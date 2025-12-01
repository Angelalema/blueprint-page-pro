import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es exactamente CINTIA?",
    answer:
      "CINTIA es una compañera cultural digital que utiliza inteligencia artificial para personalizar las visitas a museos y espacios culturales. Adapta la información, el tono y el ritmo a cada visitante, haciendo que el arte sea más comprensible y atractivo.",
  },
  {
    question: "¿En qué museos puedo probarla?",
    answer:
      "Actualmente estamos desarrollando el prototipo con contenido basado en el Museo Picasso de Barcelona. Pronto se ampliará a otros espacios culturales.",
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
    <section className="py-24 px-6 bg-gradient-primary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Preguntas frecuentes</h2>
          <p className="text-lg text-muted-foreground">
            Lo esencial sobre CINTIA, de forma clara y sencilla.
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
                className="bg-gradient-card rounded-2xl px-6 border border-primary/10 shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
