import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { paramsConstants } from "../constants/constants";

export default function useQueryParams() {
  const timeoutID = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

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

  return {
    deleteQueryParam,
    searchParams,
    setQueryParam,
    handleCategoryDropdown,
    handleInputChange,
    getQueryParam,
  };
}
