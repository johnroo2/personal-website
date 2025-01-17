export type Project = {
  cover: string,
  icon: string,
  banner: string,

  title: string,
  subtitle: string,
  body: React.ReactNode,
  left: string,
  right: string,
  date: string,

  tags: string[],

  github?: string | undefined,
  vercel?: string | undefined,
}

export type Experience = {

}

export const projectData: Project[] = [
  {
    cover: "/slimescholars-cover.png", icon: "/slimescholars-icon.png", banner: "/slimescholars-banner.png",
    github: "https://github.com/SlimeScholars/slime-scholars", vercel: "https://slimescholars.com",
    title: "Slime Scholars", subtitle: "EdTech Software",
    left: "#444444", right: "#101010", date: "Sep 2023",
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
      </div>
  },

  {
    cover: "/marble-cover.png", icon: "/marble-icon.png", banner: "/marble-banner.png",
    github: "https://github.com/jiayishen21/marble", vercel: "https://marbleinvestments.ca",
    title: "Marble Investments", subtitle: "Online Investment Platform",
    left: "#444444", right: "#101010", date: "Nov 2023",
    tags: ["TypeScript", "NextJS", "NodeJS", "MongoDB", "AWS"],
    body:
      <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
        <span>
          Marble Investments is a mutual fund built by students, for students built using TypeScript, NextJS, Node, and MongoDB.
        </span>
        <span>
          For more information, visit Marble Investments {" "}<a href="https://marbleinvestments.ca" className="inline-block">here</a>
        </span>
      </div>
  },

  {
    cover: "/darkestdungeons-cover.png", icon: "/darkestdungeons-icon.png", banner: "/darkestdungeons-banner.png",
    github: "https://github.com/johnroo2/darkest-dungeons",
    title: "Darkest Dungeons", subtitle: "Roguelike Dungeon Crawler",
    left: "#444444", right: "#101010", date: "Dec 2022",
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
      </div>
  },

  {
    cover: "/jobber-cover.png", icon: "/jobber-icon.png", banner: "jobber-banner.png",
    github: "https://github.com/johnroo2/Jobber", vercel: "https://hackthenorth2023.devpost.com/submissions/search?utf8=%E2%9C%93&prize_filter%5Bprizes%5D%5B%5D=68785",
    title: "Jobber", subtitle: "Service Exchange Platform",
    left: "#444444", right: "#101010", date: "Sep 2023",
    tags: ["TypeScript", "Flask", "PostgreSQL", "Material UI", "TailwindCSS"],
    body:
      <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
        For our team&apos;s submission for Hack the North 2023, we made Jobber, an online platform which facilitates the exchange of services.
        Any user on the platform may make a posting for a service that they want done or a good they would like to borrow.
      </div>
  },

  {
    cover: "/normalchess-cover.jpeg", icon: "/normalchess-icon.jpeg", banner: "/normalchess-banner.png",
    github: "https://github.com/johnroo2/normal-chess-api", vercel: "https://normal-chess-johnroo2.vercel.app/play",
    title: "Chess AI", subtitle: "Deep Learning Chess Bot",
    left: "#444444", right: "#101010", date: "Nov 2023",
    tags: ["Python", "ViteJS", "TypeScript", "Flask", "TensorFlow", "TailwindCSS"],
    body:
      <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
        <span>
          Normal Chess is a simple web application made using ViteJS and react-router that allows users to play with
          a chess bot that could be placed at (tested) ~1500-1600 lichess elo. The model uses Tensorflow models and
          is optimized with random forests.
        </span>
      </div>
  },

  {
    cover: "/deeplearningrace-cover.png", icon: "/deeplearningrace-icon.png", banner: "/deeplearningrace-banner.png",
    github: "https://github.com/johnroo2/deeplearning-racing",
    title: "Deep Learning Racing", subtitle: "Neuroevolution Simulation",
    left: "#444444", right: "#101010", date: "Jun 2022",
    tags: ["Python", "TensorFlow"],
    body:
      <div className="flex flex-col text-sky-50/[0.95] relative z-[1000] gap-4">
        <span>
          Using neuroevolution and TensorFlow models, this application trains cars to drive around
          any track as quickly as possible using sensors on their sides. While iterating through hundreds of generations,
          the data is stored on the side to be studied later. This project was made as a part of
          Google Development Group Edmonton&apos;s machine learning bootcamp.
        </span>
      </div>
  },
]