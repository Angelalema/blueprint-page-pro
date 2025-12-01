import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("el-reto");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cultura <span className="font-handwriting text-primary">a medida</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Una nueva forma de vivir los museos y espacios culturales,
            personalizada según tus intereses, ritmo y estilo de aprendizaje.
          </p>
          <Button variant="hero" size="lg" className="text-lg">
            Descubre CINTIA
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown className="w-12 h-12" />
        </motion.button>
      </div>
    </section>
  );
};
