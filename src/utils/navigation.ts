import type { NavigateFunction } from "react-router-dom";

export const navigateWithSearch = (
  navigate: NavigateFunction,
  pathname: string,
  search: string,
) => {
  navigate({
    pathname,
    search,
  });
};
