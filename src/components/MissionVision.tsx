import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Misión y Visión</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-3xl p-12 shadow-card border border-primary/10"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">MISIÓN</h3>
            <p className="text-2xl text-center italic text-primary">
              "Que la cultura se adapte a ti, no al revés."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-3xl p-12 shadow-card border border-primary/10"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">VISIÓN</h3>
            <p className="text-2xl text-center italic text-primary">
              "Una cultura viva, inclusiva y conectada con las personas."
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Queremos transformar la manera en que el mundo vive la cultura, haciendo que museos y
            espacios culturales sean más abiertos, interactivos y personalizados. CINTIA nace para
            hacer que cada visita cultural sea más humana, accesible y significativa. A través de
            inteligencia artificial, diseño y empatía, acompaña a cada persona según su forma de
            aprender, sentir y descubrir, creando experiencias únicas y memorables.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
