import { motion } from "framer-motion";
import { Brain, Cog, Database, LineChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Expert guidance on implementing AI solutions in your business processes",
  },
  {
    icon: Database,
    title: "SAP Integration",
    description: "Seamless integration of AI capabilities with your existing SAP infrastructure",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation solutions to streamline your operations",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Data-driven insights to optimize your business performance",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive solutions to transform your business with AI and SAP integration
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
