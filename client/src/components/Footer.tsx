import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:patricksantos496.ps@gmail.com",
      color: "bg-primary hover:bg-primary/80",
    },
    {
      icon: Phone,
      href: "https://wa.me/5511987057864",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/patrick-santos-9650a621b/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Patrick dos Santos</h3>
            <p className="text-slate-400">
              Analista de Gestão • Especialista em Logística e Dados
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-slate-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400">
              © 2024 Patrick dos Santos. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
