import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    quote:
      "Steppingstones has been an outstanding partner in supporting our students' social and academic development.",
    author: "Principal, SunRise Academy",
    role: "School Leadership",
  },
  {
    quote:
      "The workshops were engaging, real, and empowering. Our students left inspired and better prepared for what's next.",
    author: "Coordinator, Prince George's County Community Schools Initiative",
    role: "Program Coordination",
  },
  {
    quote:
      "StepMS brings integrity and purpose to every project. Their team's professionalism makes them a trusted partner.",
    author: "Program Director, DCPS",
    role: "District Leadership",
  },
  {
    quote:
      "The cultural immersion trip to Ghana was transformative for our young men. They returned with a deeper sense of identity and purpose.",
    author: "Youth Program Director",
    role: "Community Organization",
  },
  {
    quote:
      "Working with Steppingstones has elevated our mentoring program. Their staff are skilled, dedicated, and genuinely care about student success.",
    author: "Department Chair, Community College",
    role: "Higher Education",
  },
  {
    quote:
      "The presentations on leadership and communication resonated deeply with our students. We've seen tangible improvements in their engagement.",
    author: "School Administrator",
    role: "Charter School Network",
  },
];

export default function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Star className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">What Our Partners Say</h1>
            <p className="text-xl opacity-95">
              Hear from the schools, agencies, and organizations we've had the privilege to serve
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 relative">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Impact by the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nearly two decades of transforming lives through education and mentorship
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: 19, suffix: "+", label: "Years of Service" },
              { number: 15, suffix: "+", label: "Partner Organizations" },
              { number: 500, suffix: "+", label: "Students Impacted" },
              { number: 100, suffix: "+", label: "Programs Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    className="text-5xl font-bold text-primary mb-2"
                  />
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Join Our Growing Network of Partners</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the difference that dedicated, culturally responsive educational services can make for
              your students and community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Get Started Today
                </button>
              </a>
              <a href="/programs">
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  View Our Programs
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
