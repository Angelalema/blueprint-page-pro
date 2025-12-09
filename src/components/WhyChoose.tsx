import { motion } from "framer-motion";
import { Heart, Lightbulb, Users2, Sparkles, Accessibility } from "lucide-react";
import iconoBombilla from "@/assets/icono_bombilla.png";

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
  {
    icon: Accessibility,
    title: "Accesibilidad y diversidad",
    description:
      "Facilita el acceso a la cultura para todas las edades, idiomas y niveles de conocimiento.",
  },
  {
    icon: Sparkles,
    title: "Innovación cultural",
    description:
      "Une arte y tecnología para ofrecer una forma totalmente nueva de vivir los museos",
  },
];

export const WhyChoose = () => {
  return (
    <section id="beneficios" className="py-24 px-6">
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
              src={iconoBombilla} 
              alt="Icono bombilla" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Beneficios</h2>
          <p className="text-xl text-primary max-w-2xl mx-auto relative z-10">
            Una nueva forma de conectar con la cultura: más humana, más tuya
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First row: 3 features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/20 rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 h-full min-h-[280px]"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-white leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row: 2 features centered with same width as first row cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {benefits.slice(3, 5).map((benefit, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="bg-primary/20 rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 h-full md:w-[calc(33.333%-1.33rem)] min-h-[280px]"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-white leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
