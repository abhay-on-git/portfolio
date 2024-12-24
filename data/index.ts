import { profile } from "console";

// data/index.ts
export const navItems = [
  { name: "About", link: "#about"},
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials"},
  { name: "Contact", link: "#contact" },
];


  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on the React Native.",
      description: "The StackMentalist",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
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
      title: "RealStick",
      linkTiitle:"RealStick",
      des: "A fullstack e-commerce platform using the MERN stack, with proper authentication ,database management and nodemailer for automated order confirmations.",
      img: "/realstick.poster.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.logo.webp", "/express-js.webp", "/mongodb.webp","/nodejs.webp","/jwt.webp","/mui.webp"],
      link: "https://realstick.vercel.app/",
    },
    {
      id: 2,
      title: "BeSocial",
      linkTiitle:"BeSocial",
      des: "A dedicated social media platform for social activists to spread awareness and inspire people.",
      img: "/beSocial-poster.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.logo.webp", "/gsap.svg"],
      link: "https://besocial-ztkc.onrender.com/",
    },
    {
      id: 3,
      title: "MOQO",
      linkTiitle:"moqo.be",
      des: "Awwwards-Winning Design! 🏆 A Fully Responsive Frontend Project Which Represents The Morden Web Design. ",
      img: "/moqo-poster.png",
      iconLists: ["/html.webp", "/css.webp", "/js.logo.webp", "/gsap.svg"],
      link: "https://abhay-on-git.github.io/MOQO-Clone/MOQO-CLONE/",
    },
    {
      id: 4,
      title: "AritstWeb",
      linkTiitle:"artistweb",
      des: "A sleek UI built with React and Framer, offering a premium experience that makes users proud to belong to the brand.",
      img: "/artistweb-poster.png",
      iconLists: ["/re.svg","/tail.svg", "/js.logo.webp","/fm.svg"],
      link: "https://artistweb.netlify.app/",
    },
    {
      id: 5,
      title: "Liquid Death",
      linkTiitle:"liquiddeath",
      des: "Re-Designed a very famous American Drink brand in my flavour and make it alive.✌️ ( only for web view ! )",
      img: "/liquiddeath-poster.png",
      iconLists: ["/html.webp", "/css.webp", "/js.logo.webp", "/gsap.svg"],
      link: "https://liquiddeath.netlify.app/",
    },
    {
      id: 6,
      title: "Ochi",
      linkTiitle:"ochi",
      des: "Just watching the user's interaction with my virtual eyes.😃 ( only for web view ! )",
      img: "/ochi-poster.png",
      iconLists: ["/js.logo.webp", "/gsap.svg","/re.svg","/tail.svg","/fm.svg"],
      link: "https://ochi-io.netlify.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Abhay has been a great experience. I closely observed, he brings clarity, creativity, and a user-first approach to every project, making his designs both functional and impactful. As a mentor, he simplifies complex concepts and inspires passion for coding in our students. Abhay consistently delivers value, innovation, and excellence—truly a transformative professional.",
      name: "Dhanesh Malviya",
      profile: "/dhaneshMalviya.png",
      title: "Co-Founder at Sheryians Coding School",
    },
    {
      quote:
        "Working with Abhay on the web project has been a fantastic experience. His front-end skills are top-notch, and his ability to collaborate seamlessly with the backend team made the entire development process smooth. Abhay is not only skilled but also a great problem-solver, always bringing innovative solutions to the table. His professionalism and dedication to the project were invaluable. It was a pleasure working with him, and I look forward to future collaborations.",
      name: "Abhishek Vishwakarma",
      profile: "/abhishekVishwkarma.png",
      title: "Backend Developer at Gestureminds",
    },
    {
      quote:
        "Abhay is a dedicated and highly driven individual. During our time working together, he consistently showed a deep understanding of coding and design principles. His ability to break down complex topics and apply them practically was impressive. He approaches challenges with creativity and determination, always striving for excellence. It’s been a pleasure mentoring him, and I’m confident he will continue to excel in whatever he pursues.",
      name: "Sarthak Sharma",
      profile: "/sarthaksharma.png",
      title: "Instructor at Sheryians Coding School",
    },
    {
      quote:
        "Abhay is a Great Designer. He perfectly captured the essence of our brand, Skin Aura, through a stunning logo and professional visiting card design. His attention to detail and ability to align with our vision were impressive. The designs not only stand out but also resonate with our values as a healthcare company. It was a pleasure working with Abhay, and I highly recommend him for any design needs.",
      name: "Dr. Sahid Ali",
      profile: "/skinaura.png",
      title: "CEO at SkinAura",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link :"https://github.com/abhay-on-git/"
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://x.com/abhayog"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/abhay-agnihotri-34328a24a/"
    },
  ];