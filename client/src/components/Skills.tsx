import { motion } from "framer-motion";
import { Code, BarChart3, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Ferramentas Técnicas",
      icon: Code,
      color: "primary",
      bgClass: "from-primary/10 to-primary/5",
      skills: [
        { name: "Excel Avançado", level: 95 },
        { name: "Power BI Intermediário", level: 78 },
        { name: "VBA & Office Scripts", level: 88 },
        { name: "Microsoft Análise de Dados", level: 70 },
      ],
    },
    {
      title: "Análise & Processos",
      icon: BarChart3,
      color: "secondary",
      bgClass: "from-secondary/10 to-secondary/5",
      skills: [
        { name: "Análise de Dados", level: 85 },
        { name: "Automação de Processos", level: 88 },
        { name: "Dashboards & Relatórios", level: 82 },
        { name: "Inteligência Artificial", level: 65 },
      ],
    },
    {
      title: "Gestão & Logística",
      icon: Users,
      color: "accent",
      bgClass: "from-accent/10 to-accent/5",
      skills: [
        { name: "Logística Integrada", level: 92 },
        { name: "Excelência Operacional", level: 90 },
        { name: "Melhoria Contínua", level: 88 },
        { name: "Gestão de Processos", level: 85 },
      ],
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary bg-primary";
      case "secondary":
        return "text-secondary bg-secondary";
      case "accent":
        return "text-accent bg-accent";
      default:
        return "text-primary bg-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-card">
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
              Skills & Ferramentas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={`bg-gradient-to-br ${category.bgClass} p-8 rounded-2xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 ${getColorClass(category.color).split(" ")[1]} rounded-xl flex items-center justify-center mb-6`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`${getColorClass(category.color).split(" ")[0]} font-bold`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
