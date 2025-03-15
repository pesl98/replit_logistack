import { motion } from "framer-motion";
import { Award, Users, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "200+", label: "Clients Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "30+", label: "Countries" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Empowering Businesses Through Technology
            </h2>
            <p className="text-muted-foreground mb-6">
              At Logistack, we combine deep expertise in AI and SAP systems to help
              businesses achieve digital transformation. Our team of experts works
              closely with you to understand your unique challenges and develop
              tailored solutions that drive growth and efficiency.
            </p>
            <p className="text-muted-foreground">
              With a proven track record of successful implementations across
              industries, we're committed to delivering innovative solutions that
              create lasting value for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-muted rounded-lg"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
