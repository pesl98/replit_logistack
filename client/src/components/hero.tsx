import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const stackItems = [
    { text: "AI Solutions", delay: 0.2 },
    { text: "SAP Integration", delay: 0.4 },
    { text: "Process Optimization", delay: 0.6 },
    { text: "Digital Transformation", delay: 0.8 },
  ];

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
            {stackItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                className="absolute w-full"
                style={{
                  top: `${index * 100}px`,
                  zIndex: stackItems.length - index,
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-bronze/20">
                  <h3 className="text-xl font-semibold text-primary">{item.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}