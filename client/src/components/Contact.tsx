import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const handleEmailContact = () => {
    const subject = encodeURIComponent("Contato Profissional - Portfolio");
    const body = encodeURIComponent("Olá Patrick,\n\nVi seu portfólio e gostaria de conversar sobre oportunidades.\n\nAtt,");
    window.open(`mailto:patricksantos496.ps@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá Patrick! Vi seu portfólio e gostaria de conversar sobre oportunidades profissionais.");
    window.open(`https://wa.me/5511987057864?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "patricksantos496.ps@gmail.com",
      link: "mailto:patricksantos496.ps@gmail.com",
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "(11) 98705-7864",
      link: "https://wa.me/5511987057864",
      color: "bg-secondary",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "patrick-santos-9650a621b",
      link: "https://www.linkedin.com/in/patrick-santos-9650a621b/",
      color: "bg-accent",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-card">
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
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
            <p className="text-xl text-muted-foreground mt-6">
              Localizado em São Paulo, SP - Vamos conversar sobre oportunidades e projetos futuros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Direct Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Entre em Contato Diretamente</h3>
                
                <Button
                  onClick={handleEmailContact}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar E-mail
                </Button>

                <Button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>

                <Button
                  onClick={() => window.open("https://www.linkedin.com/in/patrick-santos-9650a621b/", '_blank')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>

                <div className="mt-8 p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl">
                  <h4 className="font-bold mb-3 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Resposta Rápida
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Prefere WhatsApp para respostas mais rápidas ou e-mail para propostas detalhadas. 
                    Também estou no LinkedIn para networking profissional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-muted/50 to-muted/25 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-8">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center`}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.title}</div>
                        <a
                          href={contact.link}
                          target={contact.link.startsWith("http") ? "_blank" : undefined}
                          rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4">Disponibilidade</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Analista de Gestão na Era Técnica Engenharia desde agosto de 2021.
                    Aberto a discussões sobre oportunidades de colaboração, projetos de 
                    consultoria e desenvolvimento profissional em logística e análise de dados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}