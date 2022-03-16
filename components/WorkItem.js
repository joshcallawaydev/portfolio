import Image from "next/image";

export const WorkItem = ({ title, shortDesc, src, alt, siteLink, techOne, techTwo, techThree }) => {
  console.log(shortDesc);

  let width = "460"
  let height = "250"

  return (
    <a href={siteLink} className="group flex flex-col text-left h-102 w-4/5 mb-14 bg-new-blue rounded-xl md:w-2/5" target="_blank" rel="noreferrer">
        <h3 className="px-5 pt-8 text-3xl text-another-blue"><strong>{title}</strong></h3>
        <p className="px-5 py-8 text-lg text-another-blue">{shortDesc}</p>
        <ul className="flex flex-row justify-evenly pb-8 text-another-blue list-disc">
          <li>{techOne}</li>
          <li>{techTwo}</li>
          <li>{techThree}</li>
        </ul>
        <div className="w-full flex justify-center">
          <Image className="rounded-xl" src={src} alt={alt} layout="intrinsic" width={width} height={height}/>
        </div>
    </a>
  );
};
