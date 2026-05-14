import CoursePage, { CourseData } from "@/components/CoursePage";

const courseData: CourseData = {
  slug: "programming",
  title: "C & Python Programming",
  tagline: "Build real software — start with C, grow with Python",
  heroImage: "/course-programming.png",
  badge: "New Batch",
  duration: "3 – 6 Months",
  batchTimes: ["9:00 AM – 10:00 AM", "3:00 PM – 4:00 PM", "7:00 PM – 8:00 PM"],
  fees: "₹4,500 – ₹7,000",
  emiNote: "Flexible payment — pay monthly",
  whatsappMessage: "Hi Nice Computer Education! I'm interested in C & Python Programming. Please share the batch schedule and fees.",
  seo: {
    title: "C & Python Programming Course Vinod Nagar, Delhi | Coding Classes | Nice Computer Education",
    description: "Learn C and Python programming at Nice Computer Education in Vinod Nagar, Delhi. Beginner-friendly coding course with real project work. Python for data, automation, and web basics."
  },
  overview: "This course starts with C programming to build strong logic and problem-solving skills, then transitions into Python — one of the world's most versatile and in-demand languages. You'll work on real projects including automation scripts and basic data work.",
  highlights: [
    "Starts from zero — no prior coding knowledge needed",
    "C for logic building and systems understanding",
    "Python for automation, data, and scripting",
    "Real projects: calculator, file organizer, quiz app",
    "Certificate of completion valued in IT companies"
  ],
  syllabus: [
    { module: "C Programming Fundamentals", topics: ["Variables, data types, and operators", "Control structures (if, while, for loops)", "Functions and recursion", "Arrays, strings, and pointers basics"] },
    { module: "Problem Solving with C", topics: ["Pattern printing and logic exercises", "Sorting and searching algorithms", "File handling in C", "Mini project: student management system"] },
    { module: "Python Fundamentals", topics: ["Python syntax and data types", "Lists, tuples, dictionaries, sets", "Functions, modules, and file handling", "OOP basics in Python"] },
    { module: "Python Projects", topics: ["Automation: renaming and organizing files", "Basic web scraping with requests", "Simple data analysis with pandas", "Final project: mini CLI application"] }
  ],
  whoIsItFor: [
    "Students pursuing computer science degrees",
    "Job seekers targeting IT and software companies",
    "Working professionals who want to learn automation",
    "Anyone curious about programming who wants a structured start"
  ],
  outcomes: [
    "Write programs in both C and Python confidently",
    "Solve coding problems asked in IT job interviews",
    "Build and present 2 real projects in your portfolio",
    "Enter the world of software development and data science"
  ],
  relatedSlugs: ["advanced-excel", "graphics-designing", "ms-office"]
};

export default function ProgrammingCourse() {
  return <CoursePage course={courseData} />;
}
