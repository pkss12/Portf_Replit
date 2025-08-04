import { motion } from "framer-motion";
import { Briefcase, Package, CheckCircle } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Analista de Gestão",
      company: "Era Técnica Engenharia",
      period: "2021 - Atual",
      icon: Briefcase,
      color: "from-primary to-secondary",
      achievements: [
        "Dashboards Operacionais",
        "Automação VBA",
        "Análise de Dados",
        "Melhoria Contínua",
      ],
      description:
        "Responsável por análises logísticas, projetos de melhoria contínua, uso avançado de Excel e Power BI para otimização de operações. Lidero iniciativas de transformação digital e automação de processos.",
      status: "current",
    },
    {
      title: "Especialista em Logística",
      company: "Setor Privado",
      period: "2017 - 2021",
      icon: Package,
      color: "from-secondary to-accent",
      achievements: [
        "Gestão de CD",
        "Otimização de Rotas",
        "Redução de Custos",
        "Controle de Qualidade",
      ],
      description:
        "Atuação em Centros de Distribuição, planejamento de transportes, redução de perdas e custos logísticos. Implementação de processos otimizados que resultaram em economia significativa.",
      status: "previous",
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/50">
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
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-muted-foreground mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          exp.status === "current"
                            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                            : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achievement}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + achIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
