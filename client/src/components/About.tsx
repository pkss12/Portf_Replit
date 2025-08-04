import { motion } from "framer-motion";
import { Truck, BarChart3, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function About() {
  const specializations = [
    {
      icon: Truck,
      title: "Logística Integrada",
      color: "text-primary",
      bgColor: "bg-primary",
    },
    {
      icon: BarChart3,
      title: "Análise de Dados & IA",
      color: "text-secondary",
      bgColor: "bg-secondary",
    },
    {
      icon: TrendingUp,
      title: "Excelência Operacional",
      color: "text-accent",
      bgColor: "bg-accent",
    },
    {
      icon: Users,
      title: "Gestão de Processos",
      color: "text-primary",
      bgColor: "bg-primary",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Analista de Gestão na Era Técnica Engenharia desde agosto de 2021, com especialização em{" "}
                <span className="text-primary font-semibold">
                  Logística Integrada
                </span>
                ,{" "}
                <span className="text-secondary font-semibold">
                  Excelência Operacional
                </span>{" "}
                e{" "}
                <span className="text-accent font-semibold">
                  Melhoria Contínua
                </span>
                .
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tecnólogo em Gestão e Logística com MBA em Comércio Exterior e 
                Especialização em Gestão de Pessoas pela Universidade Cruzeiro do Sul. 
                Atualmente cursando Análise de Dados pela Microsoft, com foco em 
                aplicação de IA em processos logísticos.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  MBA Comércio Exterior
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                  Especialização Gestão de Pessoas
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                  Tecnólogo Gestão e Logística
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Análise de Dados - Microsoft
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Áreas de Especialização
                </h3>

                <div className="space-y-4">
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={spec.title}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-8 h-8 ${spec.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <spec.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{spec.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
