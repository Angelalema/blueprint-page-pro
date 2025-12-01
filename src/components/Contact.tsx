import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente. ¡Nos pondremos en contacto pronto!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Forma parte del cambio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos construyendo una nueva forma de vivir la cultura — y tú puedes ser parte de ella.
            Cuéntanos tus ideas, dudas o propuestas. Juntos podemos hacer que la cultura llegue más
            lejos, y a más personas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:sergio.cabanelas@cintiaapp.com"
                    className="text-primary hover:underline"
                  >
                    sergio.cabanelas@cintiaapp.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-3xl p-8 shadow-card border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <a href="tel:+34659369635" className="text-primary hover:underline">
                    (+34) 659 369 635
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
