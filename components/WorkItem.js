import Image from "next/image";

export const WorkItem = ({
  title,
  shortDesc,
  src,
  alt,
  siteLink,
  techOne,
  techTwo,
  techThree,
}) => {
  console.log(shortDesc);

  let width = "460";
  let height = "180";

  return (
    <div className="mb-14 bg-new-blue rounded-xl shadow-2xl w-80">
      <h3 className="px-5 pt-8 text-3xl h-20 text-another-blue">
        <strong>{title}</strong>
      </h3>
      <p className="h-44 px-5 py-8 text-lg font-medium text-another-blue">{shortDesc}</p>
      <ul className="flex flex-row justify-evenly pb-8 text-another-blue list-disc text-sm">
        <li>{techOne}</li>
        <li>{techTwo}</li>
        <li>{techThree}</li>
      </ul>
      <a className="flex" href={siteLink} target="_blank" rel="noreferrer">
        <Image className="rounded-xl" src={src} alt={alt} layout="fixed" width={width} height={height} />
      </a>
    </div>
  );
};
