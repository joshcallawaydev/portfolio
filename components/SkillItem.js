export const SkillItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer self-center w-12 m-1 group sm:w-20">
      <p className="text-center text-xs mb-2 opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
      <Icon className="h-8 w-12 mb-2 group-hover:text-josh-yellow" />
    </div>
  );
};
