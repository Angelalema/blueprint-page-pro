import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AboutCintia = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-5xl md:text-6xl font-bold">Cintia</h2>
            </div>
            <p className="text-2xl font-semibold mb-6 text-primary">
              Una nueva forma de vivir la cultura
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CINTIA es una compañera cultural digital que combina inteligencia artificial, diseño y
              creatividad para hacer que cada visita al museo sea única. Aprende de ti: de lo que te
              interesa, de cómo disfrutas y de tu ritmo. Así adapta el contenido, la voz y las
              explicaciones para que el arte te hable en tu idioma.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Puedes charlar con CINTIA o escucharla mientras exploras. Ella te guía, te responde y
              convierte cada recorrido en una experiencia personal y memorable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-30" />
              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070"
                alt="Museum experience"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
