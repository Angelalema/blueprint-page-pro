import { motion } from "framer-motion";
import { Download, UserPlus, Compass, Share2 } from "lucide-react";

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
    <section className="py-24 px-6 bg-gradient-primary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Cómo funciona?</h2>
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
              <div className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 h-full">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-6 right-6 text-5xl font-bold text-primary/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card border border-primary/10 max-w-4xl mx-auto"
        >
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl italic mb-4">
              "CINTIA convierte cada visita en una experiencia cultural hecha a tu medida"
            </p>
            <footer className="text-primary font-semibold">
              — Sergio Cabanelas, CEO de CINTIA
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
