import {
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiBuymeacoffee,
  SiBiolink,
  SiLinkedin,
} from "react-icons/Si";
import { SocialIcon } from "../components/SocialIcon";

export const Footer = ({ Icon }) => {
  return (
    <>
      <div className="flex flex-row justify-evenly cursor-pointer self-center pt-16 pb-4 bg-another-blue">
        <SocialIcon
          Icon={SiInstagram}
          link="https://www.instagram.com/fullstackjosh/"
        />
        <SocialIcon
          Icon={SiTwitter}
          link="https://twitter.com/fullstackjoshua"
        />
        <SocialIcon Icon={SiGithub} link="https://github.com/joshcallawaydev" />
        <SocialIcon
          Icon={SiBuymeacoffee}
          link="https://www.buymeacoffee.com/fullstackjosh"
        />
        <SocialIcon Icon={SiBiolink} link="https://fullstackjosh.bio.link/" />
        <SocialIcon
          Icon={SiLinkedin}
          link="https://www.linkedin.com/in/joshcallaway/"
        />
      </div>
      <section className="flex flex-row justify-evenly pb-4">
        <p>Made with &#9829; by <em className="hero-feature-text">Josh Callaway</em> &copy;</p>
      </section>
    </>
  );
};
