export const navItems = [
  {
    name: "Solutions",
    link: "#projects",
    type: "mega",
    subItems: [
      {
        name: "AI Sourcing",
        link: "/project/3",
        desc: "Quickly find top quality candidates",
        icon: "FaSearch",
        status: "online"
      },
      {
        name: "Applicant Match",
        link: "/project/2",
        desc: "Automated resume screening & ranking",
        icon: "FaUserCheck",
        status: "online"
      },
      {
        name: "AI Scheduling",
        link: "/project/1",
        desc: "Automated coordination & booking",
        icon: "FaCalendarAlt",
        status: "offline"
      },
      {
        name: "Campaigns & Nurturing",
        link: "/project/5",
        desc: "Personalized outreach sequences",
        icon: "FaBullhorn",
        status: "offline"
      },
      {
        name: "Talent Insights",
        link: "/project/4",
        desc: "Real-time market intelligence",
        icon: "FaChartLine",
        status: "offline"
      },
      {
        name: "Analytics",
        link: "/project/4",
        desc: "Pipeline performance metrics",
        icon: "FaChartBar",
        status: "offline"
      },
      {
        name: "AI Calling Agent",
        link: "/project/6",
        desc: "Human-like AI candidate calls",
        icon: "FaHeadset",
        status: "online"
      }
    ]
  },
  { name: "About", link: "#experience" },
  { name: "Approach", link: "#approach" },
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
    img: "/backgrounds/1.png",
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
    longDes: "Experience the future of coordination with our Interview Scheduling Agent. Built to handle complex calendar logic across global teams, it automatically negotiates times, handles reschedules, and sends reminders—so your recruiters never have to play calendar tetris again.",
    img: "/projects/p1.svg",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/gsap.svg"],
    link: "/project/1",
    features: [
      { title: "Smart Conflict Resolution", desc: "Automatically finds gaps in busy executive calendars." },
      { title: "Multi-Timezone Support", desc: "Seamlessly coordinates between NY, London, and Tokyo." },
      { title: "Instant Rescheduling", desc: "candidates can reschedule via text without human intervention." }
    ],
    challenges: "Coordinating 5+ stakeholders with different working hours was causing a 4-day delay in time-to-hire.",
    solution: "Implemented an autonomous agent that accesses calendar APIs directly to book slots instantly.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
  },
  {
    id: 2,
    title: "Matching Agent",
    des: "Advanced AI algorithms that analyze skills, experience, and culture fit to match candidates with the perfect opportunities.",
    longDes: "Stop keyword matching and start 'meaning' matching. Our Matching Agent understands the nuance of a candidate's career trajectory, mapping their soft skills and potential against your unique company DNA to predict long-term retention, not just interview pass rates.",
    img: "/projects/p2.png",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/companies/stream.svg", "/tech-icons/c.svg"],
    link: "/project/2",
    features: [
      { title: "Semantic Analysis", desc: "Understands 'Java' vs 'JavaScript' contextually." },
      { title: "Cultural Fit Score", desc: "Quantifies alignment with your company values." },
      { title: "Bias Elimination", desc: "Anonymized screening to ensure fair hiring practices." }
    ],
    challenges: "High turnover rates due to poor cultural fit despite technical alignment.",
    solution: "Developed a dual-layer scoring system that weights cultural compatibility equal to technical prowess.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
  },
  {
    id: 3,
    title: "Sourcing Agent",
    des: "Intelligent talent discovery that scours multiple platforms to find and qualify top candidates matching your criteria.",
    longDes: "Your 24/7 headhunter. The Sourcing Agent doesn't just look at LinkedIn; it aggregates signals from GitHub, StackOverflow, and portfolio sites to build a holistic view of talent, reaching out with hyper-personalized messages that get replies.",
    img: "/projects/p3.png",
    iconLists: ["/tech-icons/re.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/c.svg"],
    link: "/project/3",
    features: [
      { title: "Cross-Platform Scanning", desc: "Aggregates data from 15+ professional networks." },
      { title: "Automated Outreach", desc: "Sends personalized sequences that feel human." },
      { title: "Talent Pooling", desc: "Builds a pipeline of passive candidates for future needs." }
    ],
    challenges: "Recruiters spending 15 hours/week just searching for profiles.",
    solution: "Automated the search phase, delivering a morning shortlist of 'ready-to-interview' candidates.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
  },
  {
    id: 4,
    title: "Interview Agent",
    des: "AI-assisted interviewing that conducts preliminary screenings, assesses candidates, and provides detailed evaluation reports.",
    longDes: "Conduct first-round screens at infinite scale. Our Interview Agent acts as a friendly, professional interviewer that asks adaptive technical and behavioral questions, recording responses and generating a comprehensive scorecard for your hiring managers.",
    img: "/projects/p4.png",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/tech-icons/three.svg", "/tech-icons/gsap.svg"],
    link: "/project/4",
    features: [
      { title: "Adaptive Questioning", desc: "Digs deeper based on candidate answers." },
      { title: "Anti-Cheating", desc: "Detects AI usage or second-screen browsing." },
      { title: "Instant Scorecards", desc: "Delivers a PDF report immediately after the call." }
    ],
    challenges: "Inconsistent screening quality across different recruiters.",
    solution: "Standardized the first round with an AI agent that ensures every candidate gets the same fair chance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
  },
  {
    id: 5,
    title: "Outreach Agent",
    des: "Personalized candidate engagement with AI-crafted messages that resonate and convert passive candidates into active applicants.",
    longDes: "Cut through the noise. The Outreach Agent analyzes a candidate's recent work, blog posts, and interests to craft a 'hand-written' email that speaks directly to their motivations, resulting in industry-leading response rates.",
    img: "/projects/p5.png",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/companies/stream.svg", "/tech-icons/fm.svg"],
    link: "/project/5",
    features: [
      { title: "Hyper-Personalization", desc: "References specific projects or posts from the candidate." },
      { title: "Smart Follow-ups", desc: "Knows when to nudge and when to back off." },
      { title: "A/B Testing", desc: "Automatically optimizes subject lines for open rates." }
    ],
    challenges: "Templates were getting <2% response rates from top-tier engineers.",
    solution: "Switched to AI-generated personalized hooks, boosting response rates to ~18%.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
  },
  {
    id: 6,
    title: "AI Calling Agent",
    des: "Human-like AI calls to engage shortlisted candidates, capture genuine intent, and operate with compliance built into every call.",
    longDes: "Our AI agents call shortlisted candidates on your behalf, ensuring timely, professional, and consistent engagement at scale. Candidates experience fluid, human-sounding calls that respectfully gather interest, availability, and feedback, while strictly adhering to consent and privacy regulations.",
    img: "/projects/p6.png",
    iconLists: ["/tech-icons/next.svg", "/tech-icons/tail.svg", "/tech-icons/ts.svg", "/companies/stream.svg", "/tech-icons/c.svg"],
    link: "/project/6",
    features: [
      { title: "Natural Conversations", desc: "Reach candidates instantly using ultra-natural AI voices." },
      { title: "Interest Confirmation", desc: "Identify who’s interested, available, or needs follow-up." },
      { title: "Compliance-First", desc: "Every interaction is designed to follow consent and data-privacy regulations." }
    ],
    challenges: "High-volume hiring requires endless manual phone screens, often leading to recruiter burnout and slow response times.",
    solution: "Deployed AI calling agents to proactively reach candidates, improving speed-to-lead and ensuring consistent, compliant communication.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=6m6yXG8jSw4w9WgX"
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
    title: "Proven Results",
    desc: "60% faster time-to-hire, 40% cost reduction, and 35% improvement in candidate quality metrics.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp4.svg",
  },
  {
    id: 3,
    title: "Seamless Integration",
    desc: "Connect with your existing ATS, HRIS, and communication tools without disrupting workflows.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp2.svg",
  },
  {
    id: 4,
    title: "Enterprise Security",
    desc: "SOC 2 compliant with end-to-end encryption. Your candidate data is always protected.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp3.svg",
  }
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
    link: "https://www.linkedin.com/in/nishparikh1/",
  },
];

export const approachPhases = [
  {
    id: 1,
    phase: "01",
    title: "Foundation",
    subtitle: "Core Hiring Acceleration",
    description: "Understand jobs intelligently and prioritize them with context, urgency, and historical success patterns. Match the right candidates in minutes, using learning-based semantic and historical intelligence. Personalize outreach at scale to maximize candidate responses via email and SMS.",
  },
  {
    id: 2,
    phase: "02",
    title: "Automation with Intelligence",
    subtitle: "Screening & Coordination",
    description: "Screen candidates through natural AI phone conversations and qualify them with confidence scores. Eliminate scheduling friction by automatically coordinating interviews across calendars and time zones. Track the hiring pipeline predictively, identifying bottlenecks before they slow hiring.",
  },
  {
    id: 3,
    phase: "03",
    title: "Proactive & Predictive Intelligence",
    subtitle: "Scale & Strategy",
    description: "Proactively source high-quality candidates before roles are even opened. Predict hiring outcomes and success probability before client submission. Continuously learn and optimize every hiring decision with each placement.",
  },
];
