import Link from "next/link";

export const NavItem = ({ title, Icon, link }) => {
  return (
    <nav className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
      <Link href={link} passHref>
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      </Link>
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </nav>
  );
};
