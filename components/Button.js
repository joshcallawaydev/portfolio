import Link from "next/link";

export const Button = ({title, link}) => {

  let alertMessage = "Oops, this section is under construction at the moment. Apoloiges for the hassle."

  return (
    <div className="flex justify-center items-center uppercase font-bold shadow-2xl hero-feature-text rounded-xl w-2/5 h-12 mx-auto mt-14 bg-josh-yellow/40 border-4 border-black hover:bg-josh-yellow md:w-32">
      <Link href={link} >
        <a target="_blank">{title}</a>
      </Link>
    </div>
  );
};
