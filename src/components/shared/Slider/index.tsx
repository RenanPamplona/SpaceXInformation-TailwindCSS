/* eslint-disable @next/next/no-img-element */
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";

const Slider = (props: { children?: ReactNode; imagesArray: string[] }) => {
  const [index, setIndex] = useState<number>(0);

  const handleIndexUp = () => {
    if (index == props.imagesArray.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => (index += 1));
    }
  };

  const handleIndexDown = () => {
    if (index == 0) {
      setIndex(props.imagesArray.length - 1);
    } else {
      setIndex((index) => (index -= 1));
    }
  };

  return (
    <div className="relative flex text-2xl">
      <button
        className="absolute right-0 h-full p-2 hover:text-rose-600 lg:text-4xl"
        unselectable="on"
        onClick={() => handleIndexDown()}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </button>
      <img
        unselectable="on"
        src={props.imagesArray[index]}
        alt="rocket image"
        className="h-56 w-screen object-cover object-center sm:h-64 md:h-96"
      />
      <button
        className="absolute left-0 h-full p-2 hover:text-rose-600 lg:text-4xl"
        unselectable="on"
        onClick={() => handleIndexUp()}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </button>
    </div>
  );
};

export default Slider;
