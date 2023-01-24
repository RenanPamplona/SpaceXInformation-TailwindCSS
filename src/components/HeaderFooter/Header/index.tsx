/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { ReactNode } from "react";

const Header = (props: { children?: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 p-7 text-sm">
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-72 brightness-0 invert"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
