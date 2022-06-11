import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      window.scrollTo(0, 0);

      if (pathname === "/") {
        document.title = `${name} | Portfolio`;
      }
      if (pathname === "/All-Projects") {
        document.title = `${name} | All Projects`;
      }
    },
    [pathname, name]
  );

  return null;
}
