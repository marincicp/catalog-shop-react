import { useLocation } from "react-router-dom";
import Button from "./Button";

function FilterCard({
  title,
  children,
  titleSize = "base",
  showButton = false,
  onClick,
}) {
  const titleSizes = {
    base: " text-base",
    medium: " text-md",
    large: " text-lg",
  };
  const location = useLocation();

  const hasQueryParams = location.search.length > 0;
  return (
    <div className="flex justify-center items-start flex-col px-8 py-4 border-b-2 border-b-gray-100">
      <div className="flex items-center max-h-6 ">
        <p className={`font-bold tracking-wide ${titleSizes[titleSize]}`}>
          {title}
        </p>

        {showButton && hasQueryParams && (
          <Button onClick={onClick} className="ml-6">
            Clear All
          </Button>
        )}
      </div>
      {children && <div className="mt-4 w-full">{children}</div>}
    </div>
  );
}

export default FilterCard;
