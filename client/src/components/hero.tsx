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

  const handleItemClick = useCallback((id: number) => {
    if (selectedItem === id) {
      // If clicking the same item, close it
      setSelectedItem(null);
      return;
    }

    // Move the selected item to the top of the stack
    const newStackOrder = [
      ...stackItems.filter(item => item.id === id),
      ...stackItems.filter(item => item.id !== id)
    ];
    setStackItems(newStackOrder);

    // Wait a second before expanding
    setTimeout(() => {
      setSelectedItem(id);
    }, 1000);
  }, [stackItems, selectedItem]);

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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: index * 20, // Reduced spacing between cards
                    scale: selectedItem === item.id ? 1.05 : 1,
                    zIndex: stackItems.length - index,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: item.delay
                  }}
                  onClick={() => handleItemClick(item.id)}
                  className="absolute w-full cursor-pointer"
                >
                  <div 
                    className={`
                      bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-bronze/20
                      transition-all duration-300
                      ${selectedItem === item.id ? 'scale-105' : 'hover:scale-102'}
                    `}
                  >
                    <h3 className="text-xl font-semibold text-primary">{item.text}</h3>
                    <AnimatePresence>
                      {selectedItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
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
                    </AnimatePresence>
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