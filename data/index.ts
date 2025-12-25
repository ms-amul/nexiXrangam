export const navItems = [
  { 
    name: "Solutions", 
    link: "#projects",
    subItems: [
      { name: "Interview Scheduling Agent", link: "#projects" },
      { name: "Matching Agent", link: "#projects" },
      { name: "Sourcing Agent", link: "#projects" },
      { name: "Interview Agent", link: "#projects" },
      { name: "Outreach Agent", link: "#projects" }
    ]
  },
  { 
    name: "About", 
    link: "#about",
    subItems: [
      { name: "Our Approach", link: "#approach" },
      { name: "Why Choose Us", link: "#experience" }
    ]
  },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Enterprise-grade AI infrastructure built for scale",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/backgrounds/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "24/7 global operations across all time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our AI Tech Stack",
    description: "Cutting-edge AI models",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about revolutionizing talent acquisition",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/backgrounds/grid.svg",
    spareImg: "/backgrounds/b4.svg",
  },
  {
    id: 5,
    title: "Building the next generation of recruiting AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/backgrounds/b5.svg",
    spareImg: "/backgrounds/grid.svg",
  },
  {
    id: 6,
    title: "Ready to transform your recruiting process?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interview Scheduling Agent",
    des: "AI-powered scheduling that coordinates interviews across time zones, syncs calendars, and eliminates back-and-forth emails.",
    img: "/projects/p1.svg",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/gsap.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Matching Agent",
    des: "Advanced AI algorithms that analyze skills, experience, and culture fit to match candidates with the perfect opportunities.",
    img: "/projects/p2.svg",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/companies/stream.svg", "/tech-icons/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "Sourcing Agent",
    des: "Intelligent talent discovery that scours multiple platforms to find and qualify top candidates matching your criteria.",
    img: "/projects/p3.svg",
    iconLists: ["/tech-icons/re.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/c.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "Interview Agent",
    des: "AI-assisted interviewing that conducts preliminary screenings, assesses candidates, and provides detailed evaluation reports.",
    img: "/projects/p4.svg",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/gsap.svg"],
    link: "#",
  },
  {
    id: 5,
    title: "Outreach Agent",
    des: "Personalized candidate engagement with AI-crafted messages that resonate and convert passive candidates into active applicants.",
    img: "/projects/p1.svg",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/companies/stream.svg", "/tech-icons/fm.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "Rangam's AI agents have completely transformed our hiring process. We've reduced time-to-hire by 60% while improving candidate quality. The Interview Scheduling Agent alone saves our team 20+ hours per week.",
    name: "Sarah Mitchell",
    title: "VP of Talent Acquisition, TechCorp Global",
  },
  {
    quote:
      "The Matching Agent's accuracy is incredible. It understands not just skills but cultural fit, which has dramatically reduced our turnover rates. This is the future of recruitment.",
    name: "David Chen",
    title: "Chief People Officer, InnovateTech",
  },
  {
    quote:
      "We were skeptical about AI in recruiting, but Rangam proved us wrong. Their Sourcing Agent found candidates we would have never discovered through traditional methods.",
    name: "Jennifer Adams",
    title: "Head of HR, Enterprise Solutions Inc.",
  },
  {
    quote:
      "The seamless integration of all Rangam agents creates a recruitment pipeline that's faster, smarter, and more efficient than anything we've used before. Highly recommended!",
    name: "Michael Roberts",
    title: "Director of Operations, Staffing Partners",
  },
  {
    quote:
      "Rangam's Outreach Agent helped us engage passive candidates with personalized messages that actually get responses. Our response rates jumped from 5% to 35%.",
    name: "Amanda Foster",
    title: "Recruiting Manager, Growth Dynamics",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/companies/cloud.svg",
    nameImg: "/companies/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/companies/app.svg",
    nameImg: "/companies/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/companies/host.svg",
    nameImg: "/companies/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/companies/s.svg",
    nameImg: "/companies/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/companies/dock.svg",
    nameImg: "/companies/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI-First Approach",
    desc: "Our agents are built from the ground up with cutting-edge AI, not legacy systems with AI bolted on.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp1.svg",
  },
  {
    id: 2,
    title: "Seamless Integration",
    desc: "Connect with your existing ATS, HRIS, and communication tools without disrupting workflows.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp2.svg",
  },
  {
    id: 3,
    title: "Enterprise Security",
    desc: "SOC 2 compliant with end-to-end encryption. Your candidate data is always protected.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp3.svg",
  },
  {
    id: 4,
    title: "Proven Results",
    desc: "60% faster time-to-hire, 40% cost reduction, and 35% improvement in candidate quality metrics.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/social/git.svg",
    link: "https://github.com/rangam",
  },
  {
    id: 2,
    img: "/social/twit.svg",
    link: "https://twitter.com/rangam",
  },
  {
    id: 3,
    img: "/social/link.svg",
    link: "https://linkedin.com/company/rangam",
  },
];
