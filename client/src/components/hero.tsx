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

  const getItemDescription = (text: string) => {
    switch (text) {
      case "AI Solutions":
        return `Leverage cutting-edge AI technologies to transform your business processes and drive innovation. Our AI solutions include:
        • Custom AI model development and implementation
        • Natural Language Processing for document analysis
        • Predictive analytics and forecasting systems
        • Machine learning for process automation
        • AI-powered decision support systems
        • Real-time data analysis and insights
        • Intelligent chatbots and virtual assistants
        • Computer vision solutions for quality control`;

      case "SAP Integration":
        return `Seamlessly integrate AI capabilities with your existing SAP infrastructure for enhanced efficiency. Our integration services include:
        • End-to-end SAP system integration
        • Custom SAP module development
        • AI-enhanced SAP workflows
        • Automated data synchronization
        • Real-time analytics integration
        • Legacy system migration
        • Performance optimization
        • Security and compliance implementation`;

      case "Process Optimization":
        return `Streamline operations with intelligent automation and data-driven process improvements. Our optimization solutions include:
        • Business process analysis and redesign
        • Workflow automation implementation
        • Performance metrics and KPI tracking
        • Bottleneck identification and resolution
        • Resource allocation optimization
        • Quality control automation
        • Cost reduction strategies
        • Continuous improvement frameworks`;

      case "Digital Transformation":
        return `Embrace digital evolution with comprehensive transformation strategies and solutions. Our transformation services include:
        • Digital strategy development
        • Technology infrastructure modernization
        • Cloud migration and optimization
        • Data architecture redesign
        • Digital workplace implementation
        • Customer experience enhancement
        • Digital security framework
        • Change management and training`;

      default:
        return "";
    }
  };

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
                    y: index * 80, 
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
                      bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-bronze/20
                      transition-all duration-300
                      ${selectedItem === item.id ? 'scale-105' : 'hover:scale-102'}
                    `}
                  >
                    <h3 className="text-xl font-semibold text-primary p-6">{item.text}</h3>
                    <AnimatePresence>
                      {selectedItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 border-t border-bronze/20"
                        >
                          <p className="text-muted-foreground whitespace-pre-line">
                            {getItemDescription(item.text)}
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