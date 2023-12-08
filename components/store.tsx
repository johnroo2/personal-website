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
    title: "Slime Scholars", subtitle: "Gameifying Education",
    left: "#666666", right: "#101010", date: "Sep 2023", showcase: true,
    tags: ["JavaScript", "NextJS", "NodeJS", "MongoDB", "TailwindCSS"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
      Level up your learning today with Slime Scholars! Collect adorable slimes while learning from lessons designed to 
      help maximize success in our modern world. 
      </span>
      <span>Slime Scholars combines gaming and learning and presents it to students, parents, and teachers. 
      With microservices-based APIs, optimized MongoDB data storage, and deployment on AWS, Slime Scholars is
      optimized and scaleable. 
      </span>
      <span>
        For more information, visit Slime Scholars {" "}<a href="https://www.slimescholars.com/" className="inline-block">here</a>
      </span>
    </div>},

    {cover:"/alct-cover.jpeg", icon:"/alct-icon.png", banner:"/alct-banner.png",
    title: "ALCannTrace E-Commerce", subtitle: "Shop Cannabis Online",
    left: "#666666", right: "#101010", date: "Aug 2023", showcase: true,
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

{cover:"/darkestdungeons-cover.png", icon:"/darkestdungeons-icon.png", banner:"/darkestdungeons-banner.png",
title: "Darkest Dungeons", subtitle: "Roguelike Bullet Hell",
left: "#666666", right: "#101010", date: "Dec 2022", showcase: true,
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
title: "Jobber", subtitle: "Problems & Services",
left: "#666666", right: "#101010", date: "Sep 2023", showcase: true,
tags: ["TypeScript", "Flask", "PostgreSQL", "Material UI", "TailwindCSS", "Cohere.AI"],
body: 
<div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
As our team&apos;s submission for Hack the North 2023, Jobber is an online platform which facilitates the exchange of services. 
Any user on the platform may make a posting for a service that they want done or a good they would like to borrow. More notably, Jobber uses Cohere AI and the Google Maps API to make this 
service much more streamlined. 
</div>},

{cover:"/normalchess-cover.jpeg", icon:"/normalchess-icon.jpeg", banner:"/normalchess-banner.png",
title: "Normal Chess", subtitle: "Chess AI",
left: "#666666", right: "#101010", date: "Nov 2023", showcase: true,
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
  
    {cover:"", icon:"/flourish-icon.png", banner:"/flourish-banner.png",
    title: "Flourish", subtitle: "Community-Oriented Time Management",
    left: "#666666", right: "#101010", date: "Mar 2023", showcase: false,
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
  
    {cover:"", icon:"/flounder-icon.png", banner:"/flounder-banner.png",
    title: "Flounder", subtitle: "Flounder About With Math",
    left: "#666666", right: "#101010", date: "Jul 2023", showcase: false,
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
     title: "Neuroevolution: 2D Car Sensors", subtitle: "Visualize Machine Learning",
     left: "#666666", right: "#101010", date: "Jun 2021", showcase: false,
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

    {cover:"", icon:"/neatflappybird-icon.jpeg", banner:"/neatflappybird-banner.png",
    title: "Neuroevolution: Flappy Bird", subtitle: "Visualize Machine Learning",
    left: "#666666", right: "#101010", date: "Apr 2021", showcase: false,
    tags: ["Python", "Neat-Python"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>
      Using Neat-Python&apos;s neuroevolution library, this application trains models to play Flappy 
      Bird. The graphics of the game used to train the models are made using PyGame. 
      </span>
      <span>
      No real birds were harmed in this process of making this.
      </span>
    </div>},
  
     {cover:"", icon:"/abs-icon.png", banner:"/abs-banner.png",
     title: "Agripowers Breeding Systems", subtitle: "Crop Management System",
     left: "#666666", right: "#101010", date: "Apr 2023", showcase: false,
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
    title: "A&L Canada Client Portal", subtitle: "Customer Management",
    left: "#666666", right: "#101010", date: "Jun 2023", showcase: false,
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
    title: "Predict Student Performance from Game Play", subtitle: "Featured Code Competition",
    left: "#666666", right: "#101010", date: "Feb 2023", showcase: false,
    tags: ["Python", "Pandas/Numpy", "TensorFlow"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    My submission involves a single Jupyter notebook submitted for The Learning Agency Lab&apos;s Kaggle competition, 
    which involves improving knowledge-tracing methods for game-based learning. My notebook uses Tensorflow to train 
    models and the Polars library over Pandas to save memory.
    </div>},

    {cover:"", icon:"gsdc-icon.png", banner:"gsdc-banner.png",
    title: "Google Smartphone Decimeter Challenge", subtitle: "Community Prediction Competition",
    left: "#666666", right: "#101010", date: "Dec 2023", showcase: false,
    tags: ["Python", "Pandas/Numpy", "TensorFlow"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
    <span>Our team&apos;s submission involves a single Jupyter notebook submitted for 
    Google&apos;s 2023 Smartphone Decimeter Challenge which involves produce better positions, bridging the connection between 
    the geo-spatial information of finer human behavior and mobile internet with improved granularity.
    </span>
    <span>
      The notebook will not be available on GitHub until the competition is finished. 
    </span>
    </div>},

    {cover:"", icon:"thiswebsite-icon.jpeg", banner:"thiswebsite-banner.png",
    title: "Personal Webiste", subtitle: "This Page",
    left: "#666666", right: "#101010", date: "Dec 2023", showcase: false,
    tags: ["TypeScript", "NextJS", "TailwindCSS"],
    body: 
    <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
      <span>This website was made using AOS and React-Parallax, along with the other tags listed above. </span> 
    </div>},
  ]
  
  export const showcaseData:Project[] = projectData.filter(item => item.showcase)