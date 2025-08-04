import { motion } from "framer-motion";
import { BarChart4, Route, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Automação de Processos Logísticos",
      description:
        "Desenvolvimento de soluções automatizadas com VBA e Office Scripts para otimização de processos logísticos, reduzindo significativamente o tempo de execução de tarefas manuais.",
      icon: BarChart4,
      color: "primary",
      bgGradient: "from-primary/20 to-primary/5",
      tags: ["VBA", "Office Scripts", "Automação"],
      impact: "Otimizado",
      impactDescription: "processos logísticos",
    },
    {
      title: "Dashboards & Análise de Performance",
      description:
        "Criação de dashboards operacionais para gestão logística, fornecendo insights valiosos para tomada de decisões estratégicas e monitoramento de KPIs.",
      icon: Route,
      color: "secondary",
      bgGradient: "from-secondary/20 to-secondary/5",
      tags: ["Power BI", "Dashboards", "KPIs"],
      impact: "Melhoria",
      impactDescription: "na tomada de decisão",
    },
    {
      title: "IA Aplicada à Logística",
      description:
        "Pesquisa e aplicação de técnicas de Inteligência Artificial em processos logísticos e análise de dados, explorando soluções inovadoras para otimização operacional.",
      icon: Truck,
      color: "accent",
      bgGradient: "from-accent/20 to-accent/5",
      tags: ["IA", "Machine Learning", "Inovação"],
      impact: "Futuro",
      impactDescription: "da logística",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };

  const getTagColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary hover:bg-secondary/20";
      case "accent":
        return "bg-accent/10 text-accent hover:bg-accent/20";
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <section id="projetos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos de Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Seleção dos principais projetos que demonstram expertise em
              análise de dados, otimização de processos e inovação em logística.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Project Visual */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <project.icon
                      className={`w-16 h-16 ${getColorClass(project.color)} mx-auto mb-4`}
                    />
                    <span className="text-muted-foreground">
                      {project.title.split(" ")[0]} {project.title.split(" ")[1]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`${getTagColorClass(project.color)} text-xs font-medium`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`text-2xl font-bold ${getColorClass(project.color)}`}
                    >
                      {project.impact}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {project.impactDescription}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Metrics */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-primary via-secondary to-accent p-8 rounded-2xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Impactos Gerados
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold mb-2">+23%</div>
                <div className="text-white/90">Redução de Custos Logísticos</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold mb-2">+35%</div>
                <div className="text-white/90">
                  Agilidade em Processos Operacionais
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold mb-2">-42h</div>
                <div className="text-white/90">
                  Economia Semanal em Processos Manuais
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
