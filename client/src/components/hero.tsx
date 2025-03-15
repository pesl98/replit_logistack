import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

export default function Hero() {
  const [stackItems, setStackItems] = useState([
    { id: 1, text: "AI Solutions", delay: 0.2 },
    { id: 2, text: "SAP Integration", delay: 0.4 },
    { id: 3, text: "Process Optimization", delay: 0.6 },
    { id: 4, text: "Digital Transformation", delay: 0.8 },
  ]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleItemClick = useCallback((id: number) => {
    if (isShuffling || selectedItem !== null) return;

    setIsShuffling(true);

    // Shuffle animation
    const shuffleItems = [...stackItems];
    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }
    setStackItems(shuffleItems);

    // Set selected item after shuffle animation
    setTimeout(() => {
      setSelectedItem(id);
      setIsShuffling(false);
    }, 3000);
  }, [stackItems, isShuffling, selectedItem]);

  return (
    <section className="relative min-h-screen pt-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Stack Your Success with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-bronze"> AI-Powered</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              Transform your business with intelligent SAP solutions and AI-driven processes
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="relative h-[400px]">
            <AnimatePresence>
              {stackItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: selectedItem === item.id ? 0 : `${index * 100}px`,
                    scale: selectedItem === item.id ? 1.1 : 1,
                    zIndex: selectedItem === item.id ? 50 : stackItems.length - index,
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.5,
                    delay: isShuffling ? Math.random() * 0.5 : item.delay
                  }}
                  onClick={() => handleItemClick(item.id)}
                  className="absolute w-full cursor-pointer"
                  style={{
                    top: selectedItem === item.id ? '50%' : `${index * 100}px`,
                    transform: selectedItem === item.id ? 'translateY(-50%)' : 'none',
                  }}
                >
                  <div 
                    className={`
                      bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-bronze/20
                      transition-all duration-300
                      ${selectedItem === item.id ? 'scale-110' : 'hover:scale-105'}
                    `}
                  >
                    <h3 className="text-xl font-semibold text-primary">{item.text}</h3>
                    {selectedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: 3.5 }}
                        className="mt-4"
                      >
                        <p className="text-muted-foreground">
                          {item.text === "AI Solutions" && "Leverage cutting-edge AI technologies to transform your business processes and drive innovation."}
                          {item.text === "SAP Integration" && "Seamlessly integrate AI capabilities with your existing SAP infrastructure for enhanced efficiency."}
                          {item.text === "Process Optimization" && "Streamline operations with intelligent automation and data-driven process improvements."}
                          {item.text === "Digital Transformation" && "Embrace digital evolution with comprehensive transformation strategies and solutions."}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}