import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Presentation, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import culturalTrip from "@/assets/cultural-trip.jpg";
import workshop from "@/assets/workshop.jpg";
import mentoring from "@/assets/mentoring.jpg";
import heroBackground from "@/assets/vadsvdsv.jpg";

const arrowColor = "#931e3c"; // matches primary

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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

const fullPrograms = [
  ...programs,
  {
    icon: Lightbulb,
    title: "Program Design & Consultation",
    image: mentoring,
    description:
      "For schools and agencies seeking to build sustainable internal programs, StepMS offers consulting services to design and evaluate mentoring, enrichment, or training initiatives.",
    details: [
      "Scalable, culturally responsive roadmaps",
      "Outcome-focused evaluation support",
      "Mentoring & enrichment program frameworks",
      "Professional development facilitation",
    ],
  },
];

const ArrowConnector = ({ direction }: { direction: "right" | "left" }) => (
  <motion.svg
    width={1000}
    height={280}
    viewBox="0 0 1000 280"
    className="hidden md:block"
    style={{ transform: direction === "left" ? "scaleX(-1)" : undefined, marginTop: -16 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.path
      d="M200 20 V160 H940 V260"
      fill="transparent"
      stroke={arrowColor}
      strokeWidth={12}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    />
    <motion.polygon
      points="940,270 915,235 965,235"
      fill={arrowColor}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    />
  </motion.svg>
);

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-primary-foreground">
        <img src={heroBackground} alt="Programs hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/80" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
          animate={{ scale: [1, 1.05, 0.98], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white drop-shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-95">
              Steppingstones Management Services offers a diverse portfolio of educational and developmental
              experiences for schools, colleges, and community organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.p {...fadeInUp} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our programs are designed to be flexible — scalable enough for institutional contracts yet personal
            enough to create real transformation for students.
          </motion.p>

          <div className="space-y-24 relative">
            {fullPrograms.map((program, index) => {
              const isEven = index % 2 === 0;
              const containerColors = isEven
                ? "bg-primary text-primary-foreground"
                : "bg-white text-primary";
              const iconBg = isEven ? "bg-white/20 text-[#FFD991]" : "bg-primary/10 text-primary";

              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col gap-3 md:gap-4 ${isEven ? "items-start" : "items-end"}`}
                >
                  <div className={`relative w-full max-w-xl rounded-3xl p-8 shadow-2xl border border-primary/10 ${containerColors}`}>
                    <div className="space-y-5">
                      <div className={`inline-flex items-center gap-3 ${iconBg} rounded-full px-4 py-2 text-sm font-semibold`}
                      >
                        <program.icon className="w-6 h-6" />
                        <span>{program.title}</span>
                      </div>
                      <p className={`${isEven ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {program.description}
                      </p>
                      <div className={`${isEven ? "text-primary-foreground/80" : "text-muted-foreground"} space-y-2`}>
                        {program.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#FFD991]" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < fullPrograms.length - 1 && (
                    <ArrowConnector direction={isEven ? "right" : "left"} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center shadow-2xl">
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-160%" }}
              whileInView={{ x: "160%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            <div className="relative">
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
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.2 }}
                className="relative inline-flex"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-white/40 via-primary/50 to-white/40 blur-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0, 1, 0.6], scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
                />
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="group relative overflow-hidden">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-150%" }}
                      animate={{ x: "150%" }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative flex items-center">
                      Contact Us to Begin
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
