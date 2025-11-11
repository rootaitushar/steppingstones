import { motion } from "framer-motion";
import { Download, FileText, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import catalogPdf from "@/assets/Catalog.pdf";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const competencies = [
  "Educational Program Development & Facilitation",
  "Mentoring & Youth Development",
  "Educational Staffing & Support",
  "Leadership & Student Workshops",
  "Cultural & Experiential Learning (Curated Trips)",
];

const partners = [
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
];

const differentiators = [
  "Nearly 20 years of consistent educational service (est. 2006)",
  "Proven record of collaboration with academic institutions",
  "Culturally responsive and student-centered programming",
  "Leadership with advanced degrees in education and communication",
  "Deep community ties and youth mentorship experience",
];

export default function Downloads() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = catalogPdf;
    link.download = "Catalog.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Catalog download started");
  };

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
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Capabilities Statement</h1>
            <p className="text-xl opacity-95">
              Steppingstones Management Services — Capabilities at a Glance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <BookOpen className="w-14 h-14 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-primary">Core Competencies</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="font-medium">{competency}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Users className="w-14 h-14 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-primary">Past Performance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted partnerships with leading educational and community organizations
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card p-4 rounded-lg hover:bg-muted transition-colors text-sm font-medium text-center"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Award className="w-14 h-14 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-primary">What Sets Us Apart</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg">{diff}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <Download className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Download Our Capabilities Statement</h2>
            <p className="text-xl opacity-95 mb-8">
              Get the complete overview of our services, experience, and impact
            </p>
            <Button size="lg" variant="secondary" onClick={handleDownload} className="group">
              <Download className="mr-2 group-hover:animate-bounce" />
              Download PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
            <p className="text-lg text-muted-foreground mb-2">
              (202) 345-0282 • admin@stepms.com • www.StepMS.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
