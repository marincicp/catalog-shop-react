import { paramsConstants } from "../constants/constants";
import { useProducts, useQueryParams } from "../hooks";
import Dropdown from "./Dropdown";
import FilterCard from "./FilterCard";
import SelectProductType from "./SelectProductType";

function FilterContainer() {
  const { handleCategoryDropdown, handleSelectType, getQueryParam } =
    useQueryParams();
  const { categories } = useProducts();
  const activeType = getQueryParam(paramsConstants.TYPE);
  return (
    <div className="bg-white">
      <div>
        <FilterCard title="Filter" titleSize="large" />
        <FilterCard title="Categories">
          <Dropdown onChange={handleCategoryDropdown} data={categories} />
        </FilterCard>

        <FilterCard title="Type">
          <SelectProductType
            active={activeType}
            handleSelectType={handleSelectType}
          />
        </FilterCard>
        <FilterCard title="Price">
          <div className="flex gap-4 justify-center items-center w-full">
            <span className="font-bold tracking-wider">$0</span>{" "}
            <input type="range" min="0" max="100" className="accent-gray-500" />
            <span className="font-bold tracking-wider">$23</span>
          </div>
        </FilterCard>
      </div>
    </div>
  );
}

export default FilterContainer;
