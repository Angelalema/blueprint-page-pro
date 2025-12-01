import { motion } from "framer-motion";
import { Sparkles, Palette, Users, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Sparkles,
    title: "Visitantes curiosos",
    description:
      "Si disfrutas de los museos pero a veces te sientes saturado, CINTIA te guía con contenido adaptado en vivo a tu curiosidad y tiempo.",
  },
  {
    icon: Palette,
    title: "Amantes del arte",
    description:
      "Si ya conoces el arte, CINTIA profundiza contigo: te descubre conexiones, detalles y perspectivas que hacen cada obra más fascinante.",
  },
  {
    icon: Users,
    title: "Familias y grupos",
    description:
      "Cada miembro puede vivir la visita a su manera o en grupo. CINTIA adapta la experiencia para niños, jóvenes y adultos, fomentando el aprendizaje.",
  },
  {
    icon: Building2,
    title: "Entidades culturales",
    description:
      "Ofrece a tu público una experiencia innovadora más viva, interactiva y memorable, mientras aprendes cómo conectan con la cultura.",
  },
];

export const Audiences = () => {
  return (
    <section className="py-24 px-6 bg-gradient-primary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pensada para todos los que aman descubrir
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
