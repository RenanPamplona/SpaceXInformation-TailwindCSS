import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const HeaderFooter = (props: {
  children?: ReactNode;
  changeTheme?: () => void;
  theme?: object;
}) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100 ">
        <Header />

        <div className="flex-grow">{props.children}</div>

        <Footer />
      </div>
    </>
  );
};

export default HeaderFooter;
