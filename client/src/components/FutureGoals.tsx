import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, Ship } from "lucide-react";

export function FutureGoals() {
  const goals = [
    {
      icon: GraduationCap,
      title: "Mestrado em Engenharia de Sistemas Logísticos",
      description: "Aprofundamento acadêmico em modelagem e análise de sistemas logísticos sustentáveis",
      color: "bg-primary",
      timeline: "Próximos 3 anos",
    },
    {
      icon: Lightbulb,
      title: "Especialização em IA Aplicada à Logística",
      description: "Desenvolvimento de expertise em aplicação de Inteligência Artificial para otimização de processos logísticos",
      color: "bg-secondary",
      timeline: "Em andamento",
    },
    {
      icon: Ship,
      title: "Pesquisa em Transporte Aquaviário",
      description: "Estudo do impacto do transporte aquaviário em grandes metrópoles no Brasil e soluções sustentáveis",
      color: "bg-accent",
      timeline: "Interesse acadêmico",
    },
    {
      icon: Target,
      title: "Liderança em Projetos Sustentáveis",
      description: "Liderar projetos de alto impacto focados em sustentabilidade em centros urbanos",
      color: "bg-primary",
      timeline: "Objetivo profissional",
    },
  ];

  return (
    <section id="objetivos" className="py-20 bg-card">
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
              Projeções Profissionais
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Visão estratégica para os próximos anos, focada em inovação, sustentabilidade e excelência em logística
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className="bg-gradient-to-br from-muted/30 to-muted/10 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${goal.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold leading-tight">{goal.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {goal.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision Statement */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Visão de Futuro</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Nos próximos 3 anos, pretendo aprofundar minha especialização em Inteligência Artificial 
              aplicada à Logística e concluir o mestrado em Engenharia de Sistemas Logísticos. 
              Meu foco é liderar projetos sustentáveis com alto impacto nos centros urbanos e no modal aquaviário, 
              contribuindo para um futuro mais eficiente e sustentável no setor logístico brasileiro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}