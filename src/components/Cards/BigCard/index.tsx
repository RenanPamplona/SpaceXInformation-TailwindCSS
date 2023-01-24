/* eslint-disable @next/next/no-img-element */
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const BigCard = (props: {
  children?: ReactNode;
  name: string;
  infos: string[] | ReactNode[];
  linkToPush: string;
  image: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-800 lg:grid lg:grid-cols-2">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          loading="lazy"
          className="h-64 w-full object-cover object-center brightness-50 lg:h-full"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold uppercase md:text-5xl">
          {props.name}
        </span>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4 py-4 px-8 text-justify text-sm xl:text-base">
          {props.infos?.map((info) => (
            <div key={""}>
              {typeof info == "string"
                ? info.length > 500
                  ? info.slice(0, 501) + "..."
                  : info
                : info}
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center gap-2 bg-rose-600 p-2 text-xl font-bold hover:bg-white hover:text-rose-600 xl:p-4 xl:text-2xl"
          onClick={() => router.push(`${props.linkToPush}`)}
        >
          Read More <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
