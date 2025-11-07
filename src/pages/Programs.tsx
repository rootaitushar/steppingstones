import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Presentation, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import culturalTrip from "@/assets/cultural-trip.jpg";
import workshop from "@/assets/workshop.jpg";
import mentoring from "@/assets/mentoring.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const programs = [
  {
    icon: Globe,
    title: "Curated Educational Trips",
    image: culturalTrip,
    description:
      "Learning extends beyond the classroom. Our curated educational trips are immersive experiences that connect participants to history, culture, and global perspective.",
    details: [
      "Cultural immersion and identity development",
      "History and heritage learning",
      "Global citizenship and leadership development",
      "Community service and reflection",
    ],
  },
  {
    icon: Presentation,
    title: "Educational Presentations & Workshops",
    image: workshop,
    description:
      "Our team develops and delivers customized presentations for schools, universities, and youth organizations.",
    details: [
      "Leadership and personal growth",
      "Communication and conflict resolution",
      "Cultural awareness and diversity",
      "Emotional intelligence and resilience",
      "Academic motivation and goal setting",
    ],
  },
  {
    icon: Users,
    title: "Mentoring & Program Support",
    image: mentoring,
    description:
      "Mentoring remains at the heart of Steppingstones. We provide structured mentorship and educational staffing to help schools and agencies meet student needs.",
    details: [
      "Youth mentoring programs",
      "Classroom aides and support specialists",
      "Enrichment program staffing",
      "After-school and summer program facilitation",
    ],
  },
];

export default function Programs() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-95">
              Steppingstones Management Services offers a diverse portfolio of educational and developmental
              experiences for schools, colleges, and community organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.p {...fadeInUp} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our programs are designed to be flexible — scalable enough for institutional contracts yet personal
            enough to create real transformation for students.
          </motion.p>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <program.icon className="w-14 h-14 text-primary mb-6" />
                    <h2 className="text-4xl font-bold mb-6 text-primary">{program.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{program.description}</p>
                    <div className="space-y-3 mb-8">
                      {program.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <img src={program.image} alt={program.title} className="w-full h-auto" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Design & Consultation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Lightbulb className="w-14 h-14 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-primary">Program Design & Consultation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For schools and agencies seeking to build sustainable internal programs, StepMS offers consulting
                services to design and evaluate mentoring, enrichment, or training initiatives.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We help partners develop scalable, culturally responsive, and outcomes-driven solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
              <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto">
                We work with institutions of every size — from single-site schools to multi-campus programs — to
                design experiences that create lasting change.
              </p>
              <p className="text-2xl font-semibold mb-8">Let's create something impactful together.</p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Contact Us to Begin
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
}
