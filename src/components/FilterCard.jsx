function FilterCard({ title, children, titleSize = "base" }) {
  const titleSizes = {
    base: " text-base",
    medium: " text-md",
    large: " text-lg",
  };

  return (
    <div className="flex justify-center items-start flex-col px-8 py-4 border-b-2 border-b-gray-100">
      <p className={`font-bold tracking-wide ${titleSizes[titleSize]}`}>
        {title}
      </p>
      {children && <div className="mt-4 w-full">{children}</div>}
    </div>
  );
}

export default FilterCard;
