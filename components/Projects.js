import { WorkItem } from "./WorkItem";
import { useState } from "react";

export const Projects = () => {

  const [projects, setProjects] = useState([
    {
      name: "Zero",
      shortDesc: "A commercial product built for Dynamon harnessing AI for sustainable fleet produrement",
      image: { src: "/zero_image.png", alt: "Image of the product Zero UI" },
    },
    {
      name: "Fore-Play",
      shortDesc:
        "One of my first projects while learning webdev. Built in Python with Flask and uses MongoDB. A golf tracker.",
      image: {
        src: "/foreplay.png",
        alt: "Social network for golfers, Fore-Play",
      },
    },
    {
      name: "Pokemon Memory Game",
      shortDesc: "A memory game built in vanilla JS for my webdev bootcamp.",
      image: { src: "/memory_game.png", alt: "An image of the memory game homepage" },
    },
    {
      name: "Petal Bakehouse",
      shortDesc: "Finticious bakery site built in HTML5 and CSS3. The first site i built.",
      image: { src: "/petalbakehouse.png", alt: "An image of the homepage for Petal Bakehouse" },
    },
  ]);

  return (
    <div className="flex flex-col items-center mx-10 mt-20 lg:mx-44">
      <h2 id="projects" className="flex justify-center hero-feature-text text-5xl mb-20 drop-shadow-md text-black-100">
        Projects
      </h2>
      <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
        <WorkItem title={projects[0].name} shortDesc={projects[0].shortDesc} src={projects[0].image.src} alt={projects[0].image.alt} />
        <WorkItem title={projects[1].name} shortDesc={projects[1].shortDesc} src={projects[1].image.src} alt={projects[1].image.alt} />
        <WorkItem title={projects[2].name} shortDesc={projects[2].shortDesc} src={projects[2].image.src} alt={projects[2].image.alt} />
        <WorkItem title={projects[3].name} shortDesc={projects[3].shortDesc} src={projects[3].image.src} alt={projects[3].image.alt} />
      </div>
    </div>
  );
};
