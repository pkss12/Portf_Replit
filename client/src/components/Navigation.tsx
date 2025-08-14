import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollToSection } = useSmoothScroll();
  const scrollProgress = useScrollProgress();

  const navigationItems = [
    { name: "Sobre", id: "sobre" },
    { name: "Experiência", id: "experiencia" },
    { name: "Skills", id: "skills" },
    { name: "Idiomas", id: "idiomas" },
    { name: "Projetos", id: "projetos" },
    { name: "Objetivos", id: "objetivos" },
    { name: "Contato", id: "contato" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-40 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="font-bold text-xl text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
            >
              Patrick Santos
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Botão para baixar o currículo */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/curriculo.pdf";
                  link.download = "Patrick_dos_Santos_Curriculo.pdf";
                  link.click();
                }}
              >
                Baixar Currículo
              </Button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden mt-4 pb-4 border-t border-border ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Botão para baixar o currículo no mobile */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/curriculo.pdf";
                  link.download = "Patrick_dos_Santos_Curriculo.pdf";
                  link.click();
                }}
              >
                Baixar Currículo
              </Button>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
