import { NavItem } from "./NavItem";
import {
  HomeIcon,
  BriefcaseIcon,
  UserCircleIcon,
  MailIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import ProfilePic from "../public/profile_image.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

export const Header = () => {
  const router = useRouter()
  // get time and date so welcome messages
  let date = new Date();
  let time = date.getHours();
  let message;
  // if statement for displaying message to user
  if (time < 12) {
    message = "Good morning";
  } else if (time < 17) {
    message = "Good afternoon";
  } else {
    message = "Good evening";
  }
  return (
    <header className="flex flex-col background-2">
      <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <nav className="flex flex-grow justify-evenly text-new-blue max-w-xl mt-3">
          <NavItem link="/" title="Home" Icon={HomeIcon} />
          <NavItem link="#about" title="About" Icon={UserCircleIcon} />
          <NavItem link="#projects" title="Work" Icon={BriefcaseIcon} />
          <NavItem link="/" title="Contact" Icon={MailIcon} />
        </nav>
        <motion.div initial={{ x: +200}} animate={{ x: 0 }} transition={{ duration: 2 }} className="hero-feature-text text-xl mt-3 drop-shadow-md text-josh-yellow sm:mr-6">
          fullStackJosh
        </motion.div>
      </div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1 }} className="flex flex-col items-center ml-3 mr-3 mt-6 mb-5">
        <Image
          src={ProfilePic}
          width="210px"
          height="200"
          alt="a profile image of host, Josh Callaway"
          className="profile-pic"
        />
      </motion.div>
      <article className="flex flex-col items-center m-5">
        <h1 className="mx-4 p-2 text-6xl font-bold text-center	leading-tight md:text-7xl md:px-32 lg:px-52">
          {message} Im <strong className="hero-feature-text text-josh-yellow drop-shadow-md">Josh</strong>
        </h1>
        <p className="mx-4 mt-12 text-3xl text-center">
          <strong className="hero-feature-text text-josh-yellow drop-shadow-md">Full Stack</strong> Developer
          from the United Kingdom
        </p>
      </article>
    </header>
  );
};
//flex justify-center hero-feature-text text-xl sm:mt-6 mr-5
