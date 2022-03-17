import { WorkItem } from "./WorkItem";
import { useState } from "react";

export const Projects = () => {

  const [projects, setProjects] = useState([
    {
      name: "Zero",
      shortDesc: "A commercial product built for Dynamon harnessing AI for sustainable fleet produrement",
      image: { src: "/zero_image.png", alt: "Image of the product Zero UI" },
      link: "https://dynamon.co.uk/zero/",
      siteTech: ['Next.js', 'Python', 'PostgreSQL']
    },
    {
      name: "Fore-Play",
      shortDesc:
        "One of my first projects while learning webdev. Built in Python with Flask and uses MongoDB. A golf tracker.",
      image: {
        src: "/foreplay.png",
        alt: "Social network for golfers, Fore-Play",
      },
      link: "https://github.com/joshcallawaydev/fore-play-app",
      siteTech: ['Flask', 'MongoDB', 'Heroku']
    },
    {
      name: "Pokemon Memory Game",
      shortDesc: "A memory game built in vanilla JS for my webdev bootcamp.",
      image: { src: "/memorygame.png", alt: "An image of the memory game homepage" },
      link: "https://github.com/joshcallawaydev/memory_game",
      siteTech: ['Vanilla js', 'HTML', 'CSS']
    },
    {
      name: "Petal Bakehouse",
      shortDesc: "Ficticious bakery site. The first site i built. Focus was on responsivness",
      image: { src: "/petalbakehouse.png", alt: "An image of the homepage for Petal Bakehouse" },
      link: "https://github.com/joshcallawaydev/petal-bakehouse",
      siteTech: ['HTML', 'CSS', 'Bootstrap']
    },
  ]);

  return (
    <div className="flex flex-col items-center mx-6 mt-20 lg:mx-44">
      <h2 id="projects" className="flex justify-center hero-feature-text text-5xl mb-20 drop-shadow-md text-black-100">
        Projects
      </h2>
      <h4 className="flex justify-center text-3xl text-center mx-6 mb-20 ">A selection of my favourite work...</h4>
      <div className="flex flex-row flex-wrap justify-evenly w-full h-auto">
        <WorkItem title={projects[0].name} shortDesc={projects[0].shortDesc} src={projects[0].image.src} alt={projects[0].image.alt} siteLink={projects[0].link} techOne={projects[0].siteTech[0]} techTwo={projects[0].siteTech[1]} techThree={projects[0].siteTech[2]}/>
        <WorkItem title={projects[1].name} shortDesc={projects[1].shortDesc} src={projects[1].image.src} alt={projects[1].image.alt} siteLink={projects[1].link} techOne={projects[1].siteTech[0]} techTwo={projects[1].siteTech[1]} techThree={projects[1].siteTech[2]}/>
        <WorkItem title={projects[2].name} shortDesc={projects[2].shortDesc} src={projects[2].image.src} alt={projects[2].image.alt} siteLink={projects[2].link} techOne={projects[2].siteTech[0]} techTwo={projects[2].siteTech[1]} techThree={projects[2].siteTech[2]}/>
        <WorkItem title={projects[3].name} shortDesc={projects[3].shortDesc} src={projects[3].image.src} alt={projects[3].image.alt} siteLink={projects[3].link} techOne={projects[3].siteTech[0]} techTwo={projects[3].siteTech[1]} techThree={projects[3].siteTech[2]}/>
      </div>
    </div>
  );
};
