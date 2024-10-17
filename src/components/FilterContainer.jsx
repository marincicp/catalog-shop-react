import Button from "./Button";
import Dropdown from "./Dropdown";
import FilterCard from "./FilterCard";

function FilterContainer() {
  return (
    <div className="bg-white">
      <div>
        <FilterCard title="Filter" titleSize="large" />
        <FilterCard title="Categories">
          <Dropdown />
        </FilterCard>

        <FilterCard title="Type">
          <div>
            <Button className="mr-4">Virtual</Button>
            <Button>Physical</Button>
          </div>
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
