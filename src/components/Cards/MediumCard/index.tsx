/* eslint-disable @next/next/no-img-element */
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const MediumCard = (props: {
  children?: ReactNode;
  name: string;
  image: string;
  id: string;
  popUpState?: (string: string) => void;
  linkToPush?: string;
  long?: boolean;
  short?: boolean;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (props.popUpState) {
          props.popUpState(props.id!);
        }

        if (props.linkToPush) {
          router.push(props.linkToPush);
        }
      }}
      className="flex flex-col items-center border-2 border-solid border-gray-800 bg-gray-800 hover:border-rose-600 hover:bg-rose-600"
    >
      <img
        src={props.image == null ? "/images/logo.png" : props.image}
        alt="img"
        loading="lazy"
        className={`w-full object-cover object-center brightness-75 ${
          props.long ? "h-96" : "h-64"
        } ${props.short ? "m-4 h-auto w-auto" : "h-96"}`}
      />
      <span className="p-2 text-center text-2xl font-bold">{props.name}</span>
    </div>
  );
};

export default MediumCard;
