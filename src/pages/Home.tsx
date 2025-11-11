import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-education.jpg";
import culturalTrip from "@/assets/cultural-trip.jpg";
import communityImage from "@/assets/community.jpg";
import mentoringImage from "@/assets/mentoring.jpg";
import { cn } from "@/lib/utils";
import {
  WPPost,
  stripHTML,
  formatPostDate,
  getFeaturedImage,
  WORDPRESS_API_URL,
  POSTS_PER_PAGE,
} from "@/lib/wordpress";

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

const heroButtonPop = {
  initial: { scale: 0.85, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 260, damping: 18 },
};

const clients = [
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
];

const services = [
  {
    icon: Globe,
    title: "Curated Educational Trips",
    description:
      "We coordinate travel experiences that bring learning to life by connecting students to culture, history, and global perspectives.",
  },
  {
    icon: BookOpen,
    title: "Educational Presentations & Workshops",
    description:
      "Interactive presentations exploring leadership, relationships, communication, and cultural awareness in schools and communities.",
  },
  {
    icon: Users,
    title: "Mentoring & Program Support",
    description:
      "Personal guidance and educational staffing to support students' social, emotional, and academic growth.",
  },
];

const whoWeAreContent = [
  {
    copy:
      "Steppingstones Management Services (“StepMS”) is an educational and mentoring organization that provides high-quality, people-centered services across the learning continuum.",
    image: communityImage,
    reverse: false,
  },
  {
    copy:
      "Founded in 2006 as a tutoring and mentoring initiative, StepMS has grown into a trusted provider of experiential learning opportunities, educational programming and staffing.",
    image: mentoringImage,
    reverse: true,
  },
  {
    copy:
      "Our work reflects a belief that education is not just what happens in classrooms, it’s about the relationships, environments, and experiences that help people thrive.",
    image: culturalTrip,
    reverse: false,
  },
];

export default function Home() {
  const whoWeAreRef = useRef<HTMLDivElement | null>(null);
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: whoWeAreRef,
    offset: ["start center", "end end"],
  });
  const whoWeAreLineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  const clientsPerRow = 4;
  const clientRows = Array.from({ length: Math.ceil(clients.length / clientsPerRow) }, (_, rowIndex) =>
    clients.slice(rowIndex * clientsPerRow, rowIndex * clientsPerRow + clientsPerRow),
  );

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        setPostsLoading(true);
        setPostsError(null);
        const response = await fetch(
          `${WORDPRESS_API_URL}?per_page=${POSTS_PER_PAGE}&page=${currentPage}&_embed`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load the latest posts right now.");
        }

        const totalPagesHeader = response.headers.get("X-WP-TotalPages");
        setTotalPages(totalPagesHeader ? Math.max(parseInt(totalPagesHeader, 10) || 1, 1) : 1);

        const data: WPPost[] = await response.json();
        setPosts(data);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setPostsError("Unable to load the latest posts right now. Please try again later.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setPostsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, [currentPage]);

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prev) => {
      if (direction === "prev") {
        return prev > 1 ? prev - 1 : prev;
      }
      return prev < totalPages ? prev + 1 : prev;
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Educational mentoring" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-primary-foreground"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-3"
            >
              Building Pathways. Inspiring Growth. Strengthening Communities.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 opacity-95"
            >
              Since 2006, Steppingstones Management Services has been helping students, schools, and
              communities move forward… one step at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                initial={heroButtonPop.initial}
                animate={heroButtonPop.animate}
                transition={{ ...heroButtonPop.transition, delay: 0.75 }}
                className="relative"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-secondary/40 via-white/50 to-secondary/40 blur-md opacity-0"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.85, 1.1, 1] }}
                  transition={{ duration: 2.3, repeat: Infinity, repeatDelay: 1.2 }}
                />
                <Link to="/programs">
                  <Button size="lg" variant="secondary" className="group relative overflow-hidden">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-150%" }}
                      animate={{ x: "150%" }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.1 }}
                    />
                    <span className="relative flex items-center">
                      Explore Our Programs
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={heroButtonPop.initial}
                animate={heroButtonPop.animate}
                transition={{ ...heroButtonPop.transition, delay: 0.9 }}
                className="relative"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-white/40 via-primary/40 to-white/40 blur-md opacity-0"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.85, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 relative overflow-hidden">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-150%" }}
                      animate={{ x: "150%" }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative">Get in Touch</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-24 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-secondary/25 blur-3xl opacity-70"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -3, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-lg">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 bg-primary"
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD991] to-transparent opacity-80"
                initial={{ x: "-190%" }}
                animate={{ x: "190%" }}
                transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-6 opacity-0 blur-3xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 40% 50%, rgba(255,215,141,0.45), transparent 60%)",
                }}
                animate={{ scale: [0.95, 1.07, 0.93], opacity: [0.05, 0.7, 0.08] }}
                transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
              />
              <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 overflow-hidden px-8 py-4 text-center text-3xl md:text-4xl font-bold uppercase tracking-[0.3em] text-primary-foreground"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-120%" }}
                  whileInView={{ x: "120%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.2 }}
                />
                <span className="relative">Who We Are</span>
              </motion.h2>
            </div>
          </div>

          <div className="relative mt-16" ref={whoWeAreRef}>
            <motion.div
              style={{ scaleY: whoWeAreLineScale }}
              className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[6px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-primary/20 via-primary/70 to-primary/20 md:block"
            />

            <div className="space-y-16">
              {whoWeAreContent.map((item, index) => {
                const textMotionX = item.reverse ? 80 : -80;
                const imageMotionX = item.reverse ? -80 : 80;

                return (
                  <div key={item.copy} className="grid items-center gap-8 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, x: textMotionX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7 }}
                      className={cn(
                        "text-lg leading-relaxed text-muted-foreground",
                        item.reverse ? "md:order-2 md:text-left md:pl-8" : "md:order-1 md:text-right md:pr-8",
                      )}
                    >
                      {item.copy}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: imageMotionX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className={cn("flex justify-center", item.reverse ? "md:order-1" : "md:order-2")}
                    >
                      <img
                        src={item.image}
                        alt="Who We Are illustration"
                        className="w-full max-w-md rounded-2xl object-cover h-80"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              We design and deliver programs that meet the educational and developmental needs of students and the teams that support them.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotate: index % 2 === 0 ? -4 : 4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: 0.8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex"
              >
                <Card className="p-8 h-full w-full bg-gradient-to-br from-white to-primary/5 shadow-lg shadow-primary/5 border border-primary/10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Every service we provide is guided by one principle: learning becomes lasting when it is personal,
              purposeful, and connected to real life.
            </p>
            <motion.div className="relative inline-flex" initial={heroButtonPop.initial} whileInView={{ scale: 1 }} viewport={{ once: true }}>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 blur-md opacity-0"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: [0, 1, 0], scale: [0.85, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
              />
              <Link to="/programs">
                <Button size="lg" className="group relative overflow-hidden">
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-140%" }}
                    animate={{ x: "140%" }}
                    transition={{ duration: 1.7, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative flex items-center">
                    Explore Our Programs
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clients & Collaborations */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Clients & Collaborations
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              We are honored to have collaborated with a broad range of educational and community partners
            </p>
          </motion.div>

          <div className="space-y-6">
            {clientRows.map((row, rowIndex) => {
              const fromLeft = rowIndex % 2 === 0;
              return (
                <motion.div
                  key={rowIndex}
                  initial={{ opacity: 0, x: fromLeft ? -220 : 220 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: rowIndex * 0.05 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {row.map((client) => (
                    <motion.div
                      key={client}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                      className="bg-white/10 p-4 rounded-lg text-center text-sm font-medium border border-white/20 text-primary-foreground shadow-sm hover:shadow-lg transition-all"
                    >
                      {client}
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>

          <motion.p {...fadeInUp} className="text-center mt-12 text-primary-foreground/80">
            These partnerships represent nearly two decades of consistent, high-quality service and
            collaboration.
          </motion.p>
        </div>
      </section>

      {/* Featured Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Featured Impact: Ghana Cultural Immersion Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In July 2025, StepMS led a curated trip to Ghana for young men. It was a transformative journey
                focused on cultural heritage, leadership, and identity development.
              </p>
              <motion.div className="relative inline-flex mt-2">
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 blur-md opacity-0"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.85, 1.1, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
                />
                <Link to="/programs">
                  <Button className="group relative overflow-hidden">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      initial={{ x: "-140%" }}
                      animate={{ x: "140%" }}
                      transition={{ duration: 1.7, repeat: Infinity, repeatDelay: 1.1 }}
                    />
                    <span className="relative flex items-center">
                      Learn More About Our Educational Trips
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={culturalTrip} alt="Ghana cultural trip" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Latest From StepMS</h2>
            <p className="text-lg text-muted-foreground">
              Fresh perspectives and updates from our WordPress blog, pulled in real time so you never miss the
              latest insights.
            </p>
          </motion.div>

          {postsError ? (
            <div className="text-center text-destructive font-medium">{postsError}</div>
          ) : postsLoading ? (
            <div className="flex justify-center py-16">
              <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                {posts.map((post, index) => {
                  const featuredImage = getFeaturedImage(post);
                  const excerpt = stripHTML(post.excerpt?.rendered ?? "");
                  const truncatedExcerpt = excerpt.length > 220 ? `${excerpt.slice(0, 217).trimEnd()}...` : excerpt;
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl shadow-primary/5 hover:-translate-y-1 hover:shadow-2xl transition-all"
                    >
                      {featuredImage && (
                        <div className="h-56 overflow-hidden">
                          <img src={featuredImage} alt={post.title.rendered} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                        </div>
                      )}
                      <div className="flex flex-col flex-1 p-6 gap-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary/70">
                          {formatPostDate(post.date)}
                        </p>
                        <h3
                          className="text-2xl font-bold text-primary"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p className="text-muted-foreground">{truncatedExcerpt}</p>
                        <div className="mt-auto">
                          <Link
                            to={`/posts/${post.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-primary font-semibold group"
                          >
                            Read Full Story
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 1 || postsLoading}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("next")}
                    disabled={currentPage === totalPages || postsLoading}
                  >
                    Next
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground">No posts found.</div>
          )}
        </div>
      </section>

      {/* Looking Forward */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden pt-20 pb-28 bg-white text-primary shadow-2xl shadow-primary/15 rounded-[32px] mx-4 sm:mx-8 lg:mx-16 mb-16 sm:mb-24 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(15,23,42,0.2)]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1.5, -1.5, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking Forward</h2>
            <p className="text-lg text-primary/80 mb-8">
              From our beginnings in tutoring and mentoring to our expansion into educational programming,
              staffing, and curated travel, Steppingstones Management Services continues to evolve — always
              grounded in the same mission: helping people and communities grow through education and experience.
            </p>
            <motion.div className="relative inline-flex">
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[999px] bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 blur-lg opacity-0"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0, 1, 0], scale: [0.85, 1.12, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1 }}
              />
              <Link to="/contact">
                <Button size="lg" variant="default" className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90">
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-150%" }}
                    animate={{ x: "150%" }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative flex items-center justify-center">
                    Let's Take the Next Step Together
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
