import { useState } from "react";
import { paramsConstants } from "../constants/constants";
import { useProducts, useQueryParams } from "../hooks";
import Dropdown from "./Dropdown";
import FilterCard from "./FilterCard";
import SelectProductType from "./SelectProductType";

function FilterContainer() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const {
    handleCategoryDropdown,
    handleSelectType,
    getQueryParam,
    handlePriceFilter,
    clearAllParms,
  } = useQueryParams();

  const { categories } = useProducts();

  const activeType = getQueryParam(paramsConstants.TYPE);
  return (
    <div className="bg-white">
      <div>
        <FilterCard
          title="Filter"
          titleSize="large"
          onClick={clearAllParms}
          showButton={true}
        />
        <FilterCard title="Categories">
          <Dropdown onChange={handleCategoryDropdown} data={categories} />
        </FilterCard>

        <FilterCard title="Type">
          <SelectProductType
            active={activeType}
            handleSelectType={handleSelectType}
          />
        </FilterCard>
        <FilterCard title="Min Price">
          <div className="flex gap-4 justify-center items-center w-full">
            <span className="font-bold tracking-wider">$0</span>{" "}
            <input
              type="range"
              min="0"
              max={3000}
              step={50}
              onChange={(e) => {
                setMinPrice(e.target.value);
                handlePriceFilter(e.target.value, "minPrice");
              }}
              className="accent-gray-500"
            />
            <span className="font-bold tracking-wider">$3000</span>
          </div>
        </FilterCard>
        <FilterCard title="Max Price">
          <div className="flex gap-4 justify-center items-center w-full">
            <p className="font-bold tracking-wider">
              <span>$</span>
              <span>{minPrice}</span>
            </p>
            <input
              step={50}
              value={maxPrice <= minPrice ? 0 : maxPrice}
              type="range"
              min={minPrice}
              max={3000}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                handlePriceFilter(e.target.value, "maxPrice");
              }}
              className="accent-gray-500"
            />
            <span className="font-bold tracking-wider">$3000</span>
          </div>
        </FilterCard>
      </div>
    </div>
  );
}

export default FilterContainer;
