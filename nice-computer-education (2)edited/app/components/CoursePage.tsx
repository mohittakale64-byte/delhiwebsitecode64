"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Clock,
  IndianRupee,
  Calendar,
  CheckCircle2,
  Phone,
  ChevronDown,
  ArrowRight,
  MapPin,
  Mail,
  Award
} from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

export interface CourseData {
  title: string;
  slug: string;
  tagline: string;
  heroImage: string;
  badge?: string;
  duration: string;
  batchTimes: string[];
  fees: string;
  emiNote?: string;
  whatsappMessage: string;
  seo: { title: string; description: string };
  overview: string;
  highlights: string[];
  syllabus: { module: string; topics: string[] }[];
  whoIsItFor: string[];
  outcomes: string[];
  relatedSlugs: string[];
}

const ALL_COURSES = [
  { slug: "typing", title: "Typing (English & Marathi)", image: "/course-typing.png" },
  { slug: "ms-office", title: "MS Office Suite", image: "/course-msoffice.png" },
  { slug: "advanced-excel", title: "Advanced Excel & Data Analysis", image: "/course-data.png" },
  { slug: "tally-gst", title: "Tally with GST & Taxation", image: "/course-tally.png" },
  { slug: "graphics-designing", title: "Graphics Designing", image: "/course-graphics.png" },
  { slug: "programming", title: "C & Python Programming", image: "/course-programming.png" },
];

export default function CoursePage({ course }: { course: CourseData }) {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  useEffect(() => {
    document.title = course.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", course.seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = course.seo.description;
      document.head.appendChild(meta);
    }
  }, [course.seo]);

  const handleEnrollClick = () => {
    const msg = encodeURIComponent(course.whatsappMessage);
    window.open(`https://wa.me/919891802542?text=${msg}`, "_blank");
  };

  const relatedCourses = ALL_COURSES.filter(c => course.relatedSlugs.includes(c.slug));

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm py-3 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src="/favicon.png" alt="Nice Computer Education Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              Nice Computer Education
            </span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="rounded-full font-medium">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${course.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10 text-center text-white mt-10"
        >
          {course.badge && (
            <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              {course.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{course.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{course.tagline}</p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Courses</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{course.title}</span>
        </div>
      </div>

      {/* Quick Info Strip */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <Clock className="w-6 h-6 opacity-80" />
              <div>
                <p className="text-sm opacity-80 mb-1">Duration</p>
                <p className="font-semibold text-lg">{course.duration}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <IndianRupee className="w-6 h-6 opacity-80" />
              <div>
                <p className="text-sm opacity-80 mb-1">Fees</p>
                <p className="font-semibold text-lg">{course.fees}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <Calendar className="w-6 h-6 opacity-80" />
              <div>
                <p className="text-sm opacity-80 mb-1">Batches</p>
                <p className="font-semibold text-sm max-w-[200px] truncate">{course.batchTimes.join(" | ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4">Course Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {course.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.highlights.map((highlight, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                    className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl"
                  >
                    <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4">Syllabus</h2>
              <div className="space-y-3">
                {course.syllabus.map((module, idx) => (
                  <div key={idx} className="border rounded-xl overflow-hidden bg-card">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between bg-muted/20 hover:bg-muted/40 transition-colors text-left"
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                    >
                      <span className="font-semibold">{module.module}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeModule === idx ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeModule === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 py-4 border-t bg-white"
                        >
                          <ul className="space-y-2">
                            {module.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-display font-bold mb-4">Who is it for?</h2>
                <ul className="space-y-3">
                  {course.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {course.outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] border rounded-2xl p-6 bg-white shadow-xl shadow-primary/5">
              <h3 className="text-2xl font-bold mb-6 border-b pb-4">Enrollment Details</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Course Fees</p>
                  <p className="text-3xl font-display font-bold text-primary">{course.fees}</p>
                  {course.emiNote && <p className="text-xs text-muted-foreground mt-1">{course.emiNote}</p>}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Available Batches</p>
                  <div className="space-y-2">
                    {course.batchTimes.map((batch, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg px-3 py-2 text-sm font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {batch}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleEnrollClick}
                  className="w-full h-14 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold rounded-xl text-base flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Enroll Now via WhatsApp
                </Button>

                <Button
                  variant="outline"
                  onClick={() => window.open('tel:09891802542')}
                  className="w-full h-14 font-semibold rounded-xl text-base flex items-center justify-center gap-2 border-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: 098918 02542
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm font-medium mb-2">100% Practical Training</p>
                <p className="text-xs text-muted-foreground">Get a verified certificate upon completion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="bg-muted/30 py-16 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">More Courses You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedCourses.map((related) => (
                <Link key={related.slug} href={`/courses/${related.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border cursor-pointer group"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{related.title}</h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center font-display font-bold text-lg">
                  N+
                </div>
                <span className="font-display font-bold text-xl">Nice Computer Education</span>
              </div>
              <p className="text-primary-foreground/80 text-sm max-w-sm mb-6">
                Empowering students with practical, job-ready computer skills in Vinod Nagar, Delhi.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><FaFacebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><FaInstagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><FaLinkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>West Vinod Nagar, East Delhi – 110092 · Near Vinod Nagar Metro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+91 98918 02542</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>info@nicecomputereducation.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Nice Computer Education. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
