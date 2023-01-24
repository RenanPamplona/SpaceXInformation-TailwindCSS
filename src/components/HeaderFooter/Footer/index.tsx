import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 bg-gray-800 p-5 text-center text-xs">
        <div>
          <span>Made by </span>
          <a
            href="https://github.com/RenanPamplona"
            className="text-rose-600 hover:underline"
          >
            Renan Pamplona
          </a>
          <span> for educational purposes.</span>
        </div>
        <div>
          <span>This project is not affiliated with </span>
          <a
            href="https://www.spacex.com"
            className="text-rose-600 hover:underline"
          >
            SpaceX
          </a>
          <span> company or any of its affiliates in any way.</span>
        </div>
        <div>
          <span>Images source: </span>
          <a
            href="https://www.flickr.com/photos/spacex/"
            className="text-rose-600 hover:underline"
          >
            SpaceX Flickr
          </a>
          <span> | Data source: </span>
          <a
            href="https://github.com/r-spacex/SpaceX-API"
            className="text-rose-600 hover:underline"
          >
            SpaceX API
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
