/* eslint-disable @next/next/no-img-element */
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const TitleWithImage = (props: {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  goBackLink?: string;
}) => {
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src={props.image}
        alt="image"
        className="h-64 w-screen object-cover object-center brightness-50 md:h-72 xl:h-96"
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span className="xl text-5xl font-bold uppercase sm:text-6xl md:text-8xl xl:text-9xl">
          {props.title}
        </span>
        {props.subtitle ? <span>{props.subtitle}</span> : <span></span>}
      </div>

      {props.goBackLink ? (
        <span
          onClick={() => router.push(props.goBackLink ? props.goBackLink : "/")}
          className="absolute top-4 left-4 text-3xl hover:cursor-pointer hover:text-rose-600"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default TitleWithImage;
