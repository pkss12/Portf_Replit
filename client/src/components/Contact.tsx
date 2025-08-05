import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  disabled={submitContactMutation.isPending}
                >
                  {submitContactMutation.isPending ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
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
