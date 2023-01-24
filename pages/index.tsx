import {
  faFire,
  faHistory,
  faPerson,
  faRocket,
  faShip,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import TitleWithImage from "../src/components/shared/TitleWithImage";

const Button: any = (props: { children?: ReactNode; onClick: () => void }) => {
  return (
    <div
      onClick={props.onClick}
      className="flex w-full flex-col items-center gap-2 rounded border-2 border-solid border-transparent bg-rose-600 py-4 text-xl font-bold hover:scale-105"
    >
      {props.children}
    </div>
  );
};

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SpaceX Information</title>
      </Head>

      <Link href="/companyInfo">
        <div className="w-full bg-rose-600 p-1 text-center font-bold hover:bg-white hover:text-rose-600 hover:underline">
          Check the company info here!
        </div>
      </Link>

      <TitleWithImage
        title="SpaceX"
        subtitle="Space Exploration Technologies Corp."
        image="https://live.staticflickr.com/4615/40143096241_bd658df7a5_k.jpg"
      />
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center gap-6 p-6 md:grid md:w-5/6 md:grid-cols-2 lg:w-4/6">
          <Button onClick={() => router.push("/rockets")}>
            <FontAwesomeIcon icon={faRocket} /> Rockets
          </Button>
          <Button onClick={() => router.push("/crew")}>
            <FontAwesomeIcon icon={faPerson} /> Crew
          </Button>
          <Button onClick={() => router.push("/history")}>
            <FontAwesomeIcon icon={faHistory} /> History
          </Button>
          <Button onClick={() => router.push("/starlink")}>
            <FontAwesomeIcon icon={faWifi} /> Starlink
          </Button>
          <Button onClick={() => router.push("/launches")}>
            <FontAwesomeIcon icon={faFire} /> Launches
          </Button>
          <Button onClick={() => router.push("/landpads")}>
            <FontAwesomeIcon icon={faShip} /> Landpads
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
