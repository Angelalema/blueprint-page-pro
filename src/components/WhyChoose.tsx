import { motion } from "framer-motion";
import { Heart, Lightbulb, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Personalización real",
    description:
      "CINTIA adapta cada visita a tus intereses, conocimientos y ritmo, haciendo que el arte cobre sentido para ti.",
  },
  {
    icon: Heart,
    title: "Conexión emocional",
    description:
      "CINTIA no solo te informa: te acompaña, te escucha y te invita a descubrir con curiosidad y emoción.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizaje significativo",
    description:
      "Con explicaciones cercanas y datos curiosos, cada experiencia se convierte en un aprendizaje que recuerdas y compartes.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por qué elegir CINTIA?</h2>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            Una nueva forma de conectar con la cultura — más humana, más tuya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card border border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Accesibilidad y diversidad</h3>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            Facilita el acceso a la cultura para todas las edades, idiomas y niveles de conocimiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
