export type Project = {
    cover:string,
    icon:string,
    banner:string,
  
    title:string,
    subtitle:string,
    body: React.ReactNode,
    left:string,
    right:string,
    date:string,
  
    tags: string[],

    github?: string | undefined,
    vercel?: string | undefined,
  
    showcase: boolean,
  }
  
  export const projectData:Project[] = [
    {cover:"/slimescholars-cover.png", icon:"/slimescholars-icon.png", banner:"/slimescholars-banner.png",
    github:"https://github.com/SlimeScholars/slime-scholars", vercel: "https://slimescholars.com",
    title: "Slime Scholars", subtitle: "EdTech Software",
    left: "#444444", right: "#101010", date: "Sep 2023", showcase: true,
    tags: ["JavaScript", "NextJS", "NodeJS", "MongoDB", "TailwindCSS", "AWS"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
      Level up your learning today with Slime Scholars! Collect adorable slimes while learning from lessons designed to 
      help maximize success in our modern world. 
      </span>
      <span>Slime Scholars combines gaming and learning and presents it to students, parents, and teachers. 
      With microservices-oriented APIs, optimized MongoDB data storage, and deployment on AWS, Slime Scholars is
      optimized and scaleable. 
      </span>
      <span>
        For more information, visit Slime Scholars {" "}<a href="https://www.slimescholars.com/" className="inline-block">here</a>
      </span>
    </div>},

  {cover:"/marble-cover.png", icon:"/marble-icon.png", banner:"/marble-banner.png",
  github:"https://github.com/jiayishen21/marble", vercel: "https://marbleinvestments.ca",
  title: "Marble Investments", subtitle: "Online Investment Platform",
  left: "#444444", right: "#101010", date: "Nov 2023", showcase: false,
  tags: ["TypeScript", "NextJS", "NodeJS", "MongoDB", "Ant Design", "AWS"],
  body: 
  <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    <span>
    Marble Investments is a hedge fund built by students, for students.
    </span>
    <span>Marble is more than just an investment fund, though. We aim to provide users with a seamless and 
      hands-on investment process while building a community of financially oriented young adults.
      Built using TypeScript, NextJS, Node, and MongoDB, its website provides investors with the best
      possible user experience.
    </span>
    <span>
      For more information, visit Marble Investments {" "}<a href="https://marbleinvestments.ca" className="inline-block">here</a>
    </span>
  </div>},

{cover:"/darkestdungeons-cover.png", icon:"/darkestdungeons-icon.png", banner:"/darkestdungeons-banner.png",
github:"https://github.com/johnroo2/darkest-dungeons",
title: "Darkest Dungeons", subtitle: "Roguelike Dungeon Crawler",
left: "#444444", right: "#101010", date: "Dec 2022", showcase: true,
tags: ["Java"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
 <span>Darkest Dungeons is a spin-off of the game Realm of the Mad God that I made in high school as a final
  project for my computer science class. The game features six playable characters, four randomly-generated 
  dungeons to make your way through, and dozens of items and enemies to find along the way.
 </span>
 <span>The game is optimized using many of the principles taught in the aforementioned class. This includes 
  general concepts such as modularization and abstraction alongside heavy use of data structures such as hash maps and 
  search trees. Notably, Darkest Dungeons uses complex numbers and rotation matricies to enhance the unique and diverse
  set of shot patterns and animations in the game.
 </span>
</div>},

{cover:"/jobber-cover.png", icon:"/jobber-icon.png", banner:"jobber-banner.png",
github:"https://github.com/johnroo2/Jobber", vercel: "https://hackthenorth2023.devpost.com/submissions/search?utf8=%E2%9C%93&prize_filter%5Bprizes%5D%5B%5D=68785",
title: "Jobber", subtitle: "Service Exchange Platform",
left: "#444444", right: "#101010", date: "Sep 2023", showcase: true,
tags: ["TypeScript", "Flask", "PostgreSQL", "Material UI", "TailwindCSS", "Cohere"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
As our team&apos;s submission for Hack the North 2023, Jobber is an online platform which facilitates the exchange of services. 
Any user on the platform may make a posting for a service that they want done or a good they would like to borrow. More notably, Jobber uses Cohere AI and the Google Maps API to make this 
service much more streamlined. 
</div>},

{cover:"/normalchess-cover.jpeg", icon:"/normalchess-icon.jpeg", banner:"/normalchess-banner.png",
github:"https://github.com/johnroo2/normal-chess-api", vercel: "https://normal-chess-johnroo2.vercel.app/play",
title: "Normal Chess", subtitle: "Deep Learning Chess Bot",
left: "#444444", right: "#101010", date: "Nov 2023", showcase: true,
tags: ["Python", "ViteJS", "TypeScript", "Flask", "TensorFlow", "TailwindCSS"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
  <span>
    Normal Chess is a simple web application made using ViteJS and react-router that allows users to play with
    a chess bot that could be placed at (tested) ~1500-1600 lichess elo. The model uses Tensorflow models and 
    is optimized with random forests.
  </span> 
  <span>
    The API is not publically hosted, so only pass and play works on the Vercel deployment.
  </span>
</div>},

   {cover:"/alct-cover.jpeg", icon:"/alct-icon.png", banner:"/alct-banner.png",
    github:"https://github.com/johnroo2/ALCTSHOP", vercel: "https://www.alcanntrace.com/",
    title: "ALCannTrace", subtitle: "E-commerce Marketplace",
    left: "#444444", right: "#101010", date: "Aug 2023", showcase: true,
    tags: ["TypeScript", "Material UI", "TailwindCSS"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span className="font-bold italic">NOTE: I do NOT distribute, purchase, sell, or use marijuana. </span>
      <span>
        ALCannTrace is an e-commerce platform used to help distribute various marijuana products under ALink Computer Solutions Inc. 
        The site helps licensed sellers manage all facets of their marijuana sales using secure cloud-base technology. 
        Note that the GitHub repository is just a clone of the frontend. The code included on this page is not
        affiliated with the company and no data is actually fetched on my end. Consequently, this site has no Vercel deployment.
      </span>
      <span>
        For more (official) information about this website, click{" "}<a href="https://www.alcanntrace.com/" className="inline-block">here</a>
      </span>
    </div>},

{cover:"", icon:"/sa-icon.png", banner:"/sa-banner.png",
title: "Sentiment Analyzer", subtitle: "Text to Emotion Processor",
github: "https://github.com/johnroo2/text-emotion-api/",
left: "#444444", right: "#101010", date: "Jan 2024", showcase: false,
tags: ["TypeScript", "NextJS", "TensorFlow", "Flask", "Python", "AWS"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
  <span>
    Sentiment Analzyer uses a transformer model and deep learning to read emotion data from text. 
    The backend was built with Flask with a model trained using Tensorflow, the website was built using NextJS, 
    and the entire site was once hosted using AWS. 
  </span> 
  <span>
    The API is not publically hosted, so its emotion reading feature is not available at the time.
  </span>
</div>},

{cover:"", icon:"/tcxr-icon.png", banner:"/tcxr-banner.png",
title: "The Commons XR (Website)", subtitle: "Data-driven VR Experience",
vercel: "https://thecommonsxr.com/",
left: "#444444", right: "#101010", date: "Jan 2024", showcase: false,
tags: ["JavaScript", "Python", "Azure", "PostgreSQL"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
  <span>
  TCXR is the next generation behavioral analytics tool - combining AI & XR to generate real-time analytics, 
  assessing individual behaviors in any group activity in a safe, unbiased 3D environment.
    </span>
    <span>Regardless of the setting - classroom, therapy group, training session, or other group learning/training setting - 
      Let TCXR's patented platform empower teachers, leaders, clinicians, therapists, 
      and researchers to more accurately assess, identify, adjust and analyze behaviors.
    </span>
    <span>
      For more information, visit The Commons XR {" "}<a href="https://thecommonsxr.com/" className="inline-block">here</a>
    </span>
</div>},
  
    {cover:"", icon:"/flounder-icon.png", banner:"/flounder-banner.png",
    github:"https://github.com/johnroo2/flounder", vercel: "https://flounder-alpha.vercel.app/",
    title: "Flounder", subtitle: "Math Forums Board",
    left: "#444444", right: "#101010", date: "Jul 2023", showcase: false,
     tags: ["TypeScript", "NextJS", "Django", "SQLite", "Ant Design", "TailwindCSS"],
     body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
        Flounder is a full-stack application that is designed as a contest math site structured like many 
        online competitive programming judges like LeetCode, DMOJ and PEZ. 
      </span> 
      <span>
        The backend is no longer being publically hosted, so most features don&apos;t work on the Vercel deployment.
      </span>
    </div>},
  
     {cover:"", icon:"/deeplearningrace-icon.png", banner:"/deeplearningrace-banner.png",
     github:"https://github.com/johnroo2/deeplearning-racing", 
     title: "2D Racecar Sensor Builder", subtitle: "Neuroevolution Simulation",
     left: "#444444", right: "#101010", date: "Jun 2022", showcase: false,
     tags: ["Python", "TensorFlow"],
     body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
      Using neuroevolution and TensorFlow models, this application trains cars to drive around
      any track as quickly as possible using sensors on their sides. While iterating through hundreds of generations,
      the data is stored on the side to be studied later. This project was made as a part of 
      Google Development Group Edmonton&apos;s machine learning bootcamp.
      </span>
    </div>},
  
     {cover:"", icon:"/abs-icon.png", banner:"/abs-banner.png",
     github:"https://github.com/johnroo2/breeding-system-ui", 
     title: "Agripowers Breeding Systems", subtitle: "Crop Management System",
     left: "#444444", right: "#101010", date: "Apr 2023", showcase: false,
     tags: ["TypeScript", "NextJS", "Ant Design", "TailwindCSS", "Java Spring", "SQLite"],
     body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
        Agripowers Breeding Systems (ABS) manages crop yields and damages under ALink Computer Solutions Inc. 
        As a custom-built web application, ABS allows its owner to manage the users of the app and customize
        the way in which data is inputted/displayed. 
      </span>
      <span>
        Note that the GitHub repository is just a clone of the frontend. The code included on this page is not
        affiliated with the company and no data is actually fetched on my end. Consequently, this site has no Vercel deployment.
      </span>
      <span>
      For more information about ALink products, check out{" "}<a href="https://www.alinkinfo.com/products" className="inline-block">this link</a>
      </span>
    </div>},

    {cover:"", icon:"/alcportal-icon.png", banner:"/alcportal-banner.png",
    github:"https://github.com/johnroo2/alcanada-online-payment", 
    title: "A&L Canada Client Portal", subtitle: "Client Oriented Services Portal",
    left: "#444444", right: "#101010", date: "Jun 2023", showcase: false,
    tags: ["TypeScript", "NextJS", "Ant Design", "TailwindCSS"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    <span>
        The A&L Canada Client Portal is a streamlined, all-in-one single sign on service that allows customers of the company to 
        manage whatever they need. In the banner, the online payment system is shown, which uses the Moneris API to handle these 
        payments.
      </span>
      <span>
        Note that the GitHub repository is just a clone of the frontend. The code included on this page is not
        affiliated with the company and no data is actually fetched on my end. Consequently, this site has no Vercel deployment.
      </span>
      <span>
      For more information about ALink products, check out{" "}<a href="https://www.alinkinfo.com/products" className="inline-block">this link</a>
      </span>
    </div>},

    {cover:"", icon:"jowilder-icon.png", banner:"jowilder-banner.png",
    github: "https://github.com/johnroo2/jowilder-studentperformance",
    title: "Student Performance Simulator", subtitle: "Data Visualization Experience",
    left: "#444444", right: "#101010", date: "Feb 2023", showcase: false,
    tags: ["Python", "Pandas/Numpy", "TensorFlow"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    My submission involves a single Jupyter notebook submitted for The Learning Agency Lab&apos;s Kaggle competition, 
    which involves improving knowledge-tracing methods for game-based learning. My notebook uses Tensorflow to train 
    models and the Polars library over Pandas to save memory.
    </div>},

  {cover:"", icon:"/flourish-icon.png", banner:"/flourish-banner.png",
  github:"https://github.com/johnroo2/flourish-app",
  title: "Flourish", subtitle: "Time Management Software",
  left: "#444444", right: "#101010", date: "Mar 2023", showcase: false,
  tags: ["JavaScript", "NodeJS", "Firebase", "TailwindCSS"],
  body: 
  <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    <span className="italic">
      How do you manage your time? 
    </span>
    <span>
      Flourish began as the culmination of a month of planning, market research, and development
      at SHAD Laurier 2022 to solve the issue of physical and mental well-being. In this iteration,
      Flourish exists as a completed full-stack application.
    </span>
    <span>
      The backend is no longer being publically hosted, so the current deployment doesn&apos;t really do anything.
    </span>
  </div>},
  ]
  
  export const showcaseData:Project[] = projectData.filter(item => item.showcase)