import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "Logistack's AI integration with our SAP systems has transformed our operations. The efficiency gains have been remarkable.",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, GlobalTech",
    image: "https://i.pravatar.cc/150?u=michael",
    content: "The expertise and professionalism of the Logistack team made our digital transformation journey smooth and successful.",
  },
  {
    name: "Emma Davis",
    role: "Innovation Lead, FutureCo",
    image: "https://i.pravatar.cc/150?u=emma",
    content: "Working with Logistack has been a game-changer. Their AI solutions have given us a competitive edge in the market.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped organizations achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
