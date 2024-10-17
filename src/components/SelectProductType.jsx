import { productTypes } from "../constants/constants";
import Button from "./Button";

function SelectProductType({ handleSelectType, active }) {
  return (
    <div className="flex gap-6">
      <Button
        type={active === productTypes.VIRTUAL ? "secondary" : "primary"}
        onClick={() => handleSelectType(productTypes.VIRTUAL)}
      >
        Virtual
      </Button>
      <Button
        onClick={() => handleSelectType(productTypes.PHYSICAL)}
        type={active === productTypes.PHYSICAL ? "secondary" : "primary"}
      >
        Physical
      </Button>
    </div>
  );
}

export default SelectProductType;
