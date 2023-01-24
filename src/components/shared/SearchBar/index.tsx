import React, { ReactNode, useEffect, useState } from "react";

const SearchBar = (props: {
  children?: ReactNode;
  setStateMethod: (string: string) => void;
  state?: string;
  type?: string;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-gray-800 p-2 md:flex-row md:justify-center md:py-4">
      <label className="text-lg font-bold">Search for {props.type}:</label>
      <input
        type="text"
        placeholder="Type here..."
        value={props.state}
        onChange={(e) => props.setStateMethod(e.target.value)}
        className="w-full bg-gray-900 p-2 outline-none md:w-auto"
      />
    </div>
  );
};

export default SearchBar;
