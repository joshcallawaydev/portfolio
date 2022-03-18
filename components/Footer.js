import {
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiBuymeacoffee,
  SiBiolink,
  SiLinkedin,
} from "react-icons/si";
import { SocialIcon } from "../components/SocialIcon";

export const Footer = ({ Icon }) => {
  return (
    <>
      <div className="flex flex-row justify-evenly cursor-pointer self-center pt-14 pb-4 bg-another-blue">
        <SocialIcon
          Icon={SiInstagram}
          link="https://www.instagram.com/fullstackjosh/"
        />
        <SocialIcon
          Icon={SiTwitter}
          link="https://twitter.com/fullstackjoshua"
        />
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
        <p>Made with &#9829; by <em className="hero-feature-text">fullStackJosh</em> &copy;</p>
      </section>
    </>
  );
};
