import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paramsConstants, productTypes } from "../constants/constants";

export default function useQueryParams() {
  const timeoutID = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function setQueryParam(param, value) {
    setSearchParams(
      (prev) => {
        prev.set(param, value);
        return prev;
      },
      { replace: true }
    );
  }

  function deleteQueryParam(param) {
    setSearchParams((prev) => {
      prev.delete(param);
      return prev;
    });
  }

  function getQueryParam(param) {
    return searchParams.get(param);
  }

  function handleCategoryDropdown(value) {
    if (!value) {
      return deleteQueryParam(paramsConstants.CATEGORY);
    } else {
      return setQueryParam(paramsConstants.CATEGORY, value);
    }
  }

  function handleInputChange(value) {
    if (timeoutID.current) clearTimeout(timeoutID.current);

    timeoutID.current = setTimeout(() => {
      if (value) {
        setQueryParam(paramsConstants.NAME, value);
      } else {
        deleteQueryParam(paramsConstants.NAME);
      }
    }, 1000);
  }

  function clearAllParms() {
    navigate("/", { replace: true });
  }

  function handlePriceFilter(value, type) {
    const currentType = getQueryParam(paramsConstants.PRICE[type]);

    const minPrice = getQueryParam(paramsConstants.PRICE.MIN);
    const maxPrice = getQueryParam(paramsConstants.PRICE.MAX);

    if (maxPrice && minPrice === maxPrice) {
      return deleteQueryParam(paramsConstants.PRICE.MAX);
    }

    if (!currentType || currentType === type) {
      if (value === "0") {
        return deleteQueryParam(type);
      }

      return setQueryParam(type, value);
    }
  }
  function handleSelectType(type) {
    const currentType = getQueryParam(paramsConstants.TYPE);

    if (!currentType || currentType !== type) {
      return setQueryParam(paramsConstants.TYPE, type);
    }

    if (
      currentType === productTypes.VIRTUAL ||
      currentType === productTypes.PHYSICAL
    ) {
      return deleteQueryParam(paramsConstants.TYPE);
    }
  }

  return {
    deleteQueryParam,
    searchParams,
    setQueryParam,
    handleCategoryDropdown,
    handleInputChange,
    getQueryParam,
    handleSelectType,
    handlePriceFilter,
    clearAllParms,
  };
}
