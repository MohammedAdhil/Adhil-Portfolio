export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Synthetix",
    description:
      "Built specifically for AI startups, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/MohammedAdhil/synthetix",
    demo: "https://synthetix-ai.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 1,
    name: "SkyWatch",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["React", "CSS", "Chart.js"],
    github: "https://github.com/MohammedAdhil/weather-forecast-website",
    demo: "https://sky-watch-app.vercel.app/",
    image: require(".//../../public/projects/skywatch-new.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Flixify",
    description:
      "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/MohammedAdhil/Flixify",
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  {
    id: 3,
    name: "Dress Hub",
    description:
      "DressHub is an e-commerce shopper web application showcasing diverse fashion collections for men & women.",
    technologies: ["React", "SweetAlert", "FakeStore's API"],
    github: "https://github.com/MohammedAdhil/react-ecommerce-app",
    demo: "https://dress-hub.netlify.app/",
    image: require(".//../../public/projects/e-commerce.png"),
    available: true,
  },
  {
    id: 4,
    name: "HomeLand",
    description:
      "HomeLand is a real estate portal using ReactJS with Tailwind CSS, featuring a streamlined user interface (UI) and efficient state management using React Context.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/MohammedAdhil/real-estate-website",
    demo: "https://homeland-real-estate-portal.netlify.app/",
    image: require(".//../../public/projects/Real-estate.png"),
    available: true,
  },
  {
    id: 5,
    name: "Link Shortener",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/MohammedAdhil/url-shortener",
    demo: "https://url-shortener-hub.vercel.app/",
    image: require(".//../../public/projects/shortener-new.webp"),
    available: true,
  },
  {
    id: 6,
    name: "Zorotube",
    description:
      "Zorotube is A YouTube-like website built using ReactJS, RapidAPI, and Axios for dynamic data fetching and integration.",
    technologies: ["React", "Material UI", "Rapid API"],
    github: "https://github.com/MohammedAdhil/Youtube-Clone",
    demo: "https://zorotube.netlify.app/",
    image: require(".//../../public/projects/Zorotube.png"),
    available: true,
  },
  {
    id: 7,
    name: "Alpaca Image Generator",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/MohammedAdhil/alpaca-image-generator",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/alpaca-flip.png"),
    available: true,
  },
  {
    id: 8,
    name: "DreamGo",
    description:
      "A tech-savvy travel planning platform offering customizable itineraries, detailed guides, and immersive AOS animations for seamless exploration.",
    technologies: ["React", "Tailwind CSS", "AOS"],
    github: "https://github.com/MohammedAdhil/travel-planner-front-end",
    demo: "https://dream-go.vercel.app/",
    image: require(".//../../public/projects/Travel-Planner.png"),
    available: true,
  },
  // {
  //   id: 10,
  //   name: "Propellent",
  //   description:
  //     "A Landing Page built for software startups and small businesses, to showcase their services and mark their online presence.",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com/victorcodess/propellent",
  //   demo: "https://propellent.vercel.app/",
  //   image: require(".//../../public/projects/propellent-new.png"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
