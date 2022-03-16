import Link from "next/link";

export const SocialIcon = ({ Icon, link }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 m-1 group sm:w-20">
      <Link href={link} target="_blank" passHref>
        <a target="_blank">
          <Icon className="h-8 w-12 mb-2 group-hover:text-josh-yellow hover:animate-bounce items-center" />
        </a>
      </Link>
    </div>
  );
};
