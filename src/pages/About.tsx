import { motion } from "framer-motion";
import { Shield, Users, Globe, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import communityImage from "@/assets/community.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We deliver what we promise and hold ourselves accountable to measurable outcomes.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work collaboratively with schools, agencies, and families to achieve shared goals.",
  },
  {
    icon: Globe,
    title: "Cultural Awareness",
    description: "We honor the diverse backgrounds and stories that shape our students and staff.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain high standards in every project, presentation, and partnership.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We believe progress is a process, one step at a time.",
  },
];

export default function About() {
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
            <p className="text-accent text-lg mb-4 font-semibold">Established 2006</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Steppingstones Management Services
            </h1>
            <p className="text-xl opacity-95">
              An education-focused organization dedicated to helping individuals and institutions build
              capacity, confidence, and connection through learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                StepMS was founded with the belief that every learner, regardless of background, deserves access
                to quality instruction, meaningful mentorship, and opportunities to grow.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What began in 2006 as a small tutoring and mentoring initiative has evolved into a comprehensive
                educational service firm that provides programming, staffing, consulting, and experiential
                learning.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to build bridges between students, educators, and communities by designing
                experiences that nurture growth and inspire purpose.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={communityImage} alt="Educational community" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-2xl text-foreground font-medium leading-relaxed">
              To cultivate growth and connection through education, mentorship, and meaningful experiences,
              helping students and institutions take their next step with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Leadership</h2>
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Yao Tyus</h3>
                  <p className="text-xl text-primary mb-6">President</p>
                  <p className="text-muted-foreground mb-4">
                    Yao Tyus is an educator, mentor, and organizational leader with nearly two decades of
                    experience in program development, youth engagement, and cultural exchange.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    He holds degrees from Howard University and The George Washington University and has worked
                    with institutions including DCPS, CFSA, and Howard University, designing programs that
                    strengthen academic outcomes and student resilience.
                  </p>
                  <p className="text-muted-foreground">
                    His leadership centers on the belief that education is most powerful when it is personal,
                    consistent, and connected to community.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Past Performance</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              StepMS has successfully partnered with a wide range of organizations:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "District of Columbia Public Schools (DCPS)",
                "Child and Family Services Agency (CFSA)",
                "Prince George's County Community College",
                "Howard University",
                "Coppin State University",
                "Bowie State University",
                "American University",
                "Office of the State Superintendent of Education",
                "University of Michigan",
                "The George Washington University",
                "Tidewater Community College",
                "SunRise Academy",
                "Bridges Academy",
                "Progressive Life Center",
                "National Center for Children and Families",
                "Numerous charter schools, nonprofit organizations, and private families",
              ].map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium">{org}</span>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeInUp} className="text-center mt-12 text-lg text-muted-foreground">
              Through these collaborations, we've provided mentoring, program staffing, leadership presentations,
              and educational travel experiences that have impacted hundreds of students and families.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
