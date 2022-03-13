import Image from "next/image";

export const WorkItem = ({ title, shortDesc, src, alt }) => {
  console.log(shortDesc);
  return (
    <a href="https://github.com/" className="group" target="_blank" rel="noreferrer">
      <article className="flex flex-col text-center rounded-xl bg-josh-yellow/30 shadow-inner cursor-pointer border-2 mb-5 p-6 h-72 w-full group-hover:border-2 group-hover:border-black md:w-80 md:h-80">
        <h3 className="px-3 pt-3 text-lg">Project Name: {title}</h3>
        <p className="px-3 py-3 text-sm">Description: {shortDesc}</p>
        <div>
          <Image className="p-2" src={src} alt={alt} width="300" height="120" objectFit="contain" />
        </div>
      </article>
    </a>
  );
};
