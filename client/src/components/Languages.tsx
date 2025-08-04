import { motion } from "framer-motion";
import { Globe, MessageCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Languages() {
  const languages = [
    {
      name: "Português",
      level: 100,
      description: "Nativo",
      flag: "🇧🇷",
    },
    {
      name: "Inglês",
      level: 70,
      description: "Intermediário",
      flag: "🇺🇸",
    },
    {
      name: "Espanhol",
      level: 65,
      description: "Intermediário",
      flag: "🇪🇸",
    },
  ];

  return (
    <section id="idiomas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Idiomas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Comunicação Global</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Capacidade de comunicação em múltiplos idiomas, facilitando 
                  colaboração internacional e ampliando oportunidades em 
                  mercados globais, especialmente em logística e comércio exterior.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    className="bg-card p-6 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <h4 className="font-semibold">{language.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-primary font-bold">
                        {language.level}%
                      </span>
                    </div>
                    <Progress value={language.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}