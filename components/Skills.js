import { SkillItem } from "../components/SkillItem";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiNpm,
  SiGit,
  SiGitlab,
  SiGitpod,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiBootstrap,
  SiAmazonaws,
} from "react-icons/Si";

export const Skills = () => {
  return (
    <div className="flex flex-col justify-center text-center mx-10 mt-20 px-5 lg:mx-44">
      <h1 id="skills" className="flex justify-center hero-feature-text text-5xl mb-20 drop-shadow-md text-black group-hover:text-josh-yellow">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap justify-between mx-8 uppercase">
        <SkillItem Icon={SiReact} title="React" />
        <SkillItem Icon={SiNextdotjs} title="Next.js" />
        <SkillItem Icon={SiJavascript} title="Javascript" />
        <SkillItem Icon={SiHtml5} title="HTML5" />
        <SkillItem Icon={SiCss3} title="CSS3" />
        <SkillItem Icon={SiTailwindcss} title="Tailwind" />
        <SkillItem Icon={SiBootstrap} title="Bootstrap" />
        <SkillItem Icon={SiPython} title="Python" />
        <SkillItem Icon={SiFlask} title="Flask" />
        <SkillItem Icon={SiPostgresql} title="PostgreSQL" />
        <SkillItem Icon={SiMongodb} title="MongoDB" />
        <SkillItem Icon={SiNumpy} title="Numpy" />
        <SkillItem Icon={SiPandas} title="Pandas" />
        <SkillItem Icon={SiNpm} title="NPM" />
        <SkillItem Icon={SiGit} title="Git" />
        <SkillItem Icon={SiGitlab} title="GitLab" />
        <SkillItem Icon={SiGitpod} title="GitPod" />
        <SkillItem Icon={SiGithub} title="GitHub" />
        <SkillItem Icon={SiAmazonaws} title="AWS" />
      </div>
    </div>
  );
};
