import { motion } from "framer-motion";
import { BookOpen, Brain, MessageSquare, Users } from "lucide-react";

const challenges = [
  {
    icon: BookOpen,
    title: "La cultura no siempre se adapta a ti",
    description: "Muchos visitantes se sienten frustrados ante explicaciones demasiado técnicas o frías.",
    detail: "Cuesta conectar con lo que se ve, y el arte se vuelve ajeno en lugar de inspirador.",
    quote: "Siento que las explicaciones no hablan mi idioma.",
  },
  {
    icon: Brain,
    title: "Mucha información.",
    description: "Entre carteles, audioguías y tantas obras, la visita acaba siendo una lluvia de datos.",
    detail: "Demasiado ruido y poca conexión. El arte pierde su magia y termina saturando.",
    quote: "Salgo del museo con la cabeza llena… pero sin haber aprendido nada.",
  },
  {
    icon: MessageSquare,
    title: "Escuchar está bien.",
    description: "La mayoría de visitas siguen siendo un monólogo: el museo habla, tú escuchas.",
    detail: "Falta espacio para la curiosidad y la interacción.",
    quote: "Ojalá pudiera hablar con el museo, no solo escucharlo.",
  },
  {
    icon: Users,
    title: "No todos aprendemos de la misma manera",
    description: "Algunos prefieren escuchar, otros leer o jugar.",
    detail: "Pero las herramientas no siempre se adaptan a los distintos ritmos, edades o idiomas de cada uno.",
    quote: "A veces el ritmo o el formato me hacen desconectar.",
  },
];

export const Challenge = () => {
  return (
    <section id="el-reto" className="py-24 px-6 bg-gradient-primary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/20">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">El reto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visitar un museo debería inspirar, emocionar, despertar curiosidad. Pero muchas veces,
            la experiencia se queda corta. Esto es lo que viven hoy miles de visitantes, sin importar
            el museo o la ciudad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/20">
                <challenge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
              <p className="text-sm text-muted-foreground mb-4">{challenge.detail}</p>
              <blockquote className="text-sm italic text-primary border-l-2 border-primary pl-4">
                "{challenge.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
