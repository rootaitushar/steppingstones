import { motion } from "framer-motion";
import { Shield, Users, Globe, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/Yao-Tyus.jpg";

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
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
          animate={{ scale: [1, 1.05, 0.98], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
        />
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
            <motion.span
              aria-hidden
              className="mx-auto mb-6 block h-[2px] w-24 rounded-full bg-white/70"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
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
              className="md:shadow-xl md:bg-white/90 md:rounded-2xl md:p-8 md:border md:border-primary/10"
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
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30 blur-3xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
              />
              <img src={aboutImage} alt="Educational community" className="w-full h-auto relative" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-32 bg-gradient-to-br from-primary/20 via-[#FFD991]/10 to-primary/40 blur-3xl"
          animate={{ scale: [1, 1.05, 0.98], rotate: [0, 4, -3, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold mb-6 text-[#FFD991]"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-2xl text-primary-foreground font-medium leading-relaxed"
            >
              To cultivate growth and connection through education, mentorship, and meaningful experiences,
              helping students and institutions take their next step with confidence.
            </motion.p>
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

          <div className="relative mt-12">
            <div className="grid gap-12 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex flex-col items-center text-center gap-4"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">{value.title}</h3>
                  <Card className="p-6 w-full bg-white/90 backdrop-blur border-2 hover:border-primary/60 transition">
                    <p className="text-muted-foreground text-left md:text-center">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Leadership</h2>
            <div className="relative">
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl blur-xl"
                style={{ background: "linear-gradient(135deg, rgba(255,217,145,0.2), rgba(255,217,145,0.45), rgba(255,217,145,0.2))" }}
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.04, 0.97] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Card className="relative overflow-hidden p-8 md:p-12">
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD991]/70 to-transparent"
                  initial={{ x: "-180%" }}
                  animate={{ x: "180%" }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex flex-col md:flex-row gap-8 relative">
                  <motion.div
                    className="flex-1"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  >
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
                  </motion.div>
                </div>
              </Card>
            </div>
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
