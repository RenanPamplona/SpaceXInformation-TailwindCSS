import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import SmallCard from "../../../src/components/Cards/SmallCard";
import LabelAndInfo from "../../../src/components/shared/LabelAndInfo";
import Slider from "../../../src/components/shared/Slider";
import TitleWithImage from "../../../src/components/shared/TitleWithImage";
import { fetchOneRocket, RocketType } from "../../../src/services/rocket";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const rocket = await fetchOneRocket(id);

    return {
      props: {
        rocket,
      },
    };
  }

  return {
    redirect: {
      destination: "/rockets",
      permanent: false,
    },
  };
};

const IndividualRocket: NextPage = (props: {
  children?: ReactNode;
  rocket?: RocketType;
}) => {
  return (
    <>
      <Head>
        <title>{props.rocket?.name}</title>
      </Head>
      <TitleWithImage
        title={`${props.rocket?.name}`}
        image={`${props.rocket?.flickr_images[0]}`}
        goBackLink="/rockets"
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-16 py-4 px-8 text-justify md:w-5/6 md:p-8 lg:w-4/6">
          <span className="text-justify text-sm xl:text-lg">
            {props.rocket?.description}
          </span>
          <div className="flex w-full flex-col items-center gap-4">
            <LabelAndInfo
              label="Height"
              info={`${props.rocket?.height.meters} m`}
              secondaryInfo={`${props.rocket?.height.feet} ft`}
            />
            <LabelAndInfo
              label="Diameter"
              info={`${props.rocket?.diameter.meters} m`}
              secondaryInfo={`${props.rocket?.diameter.feet} ft`}
            />
            <LabelAndInfo
              label="Mass"
              info={`${props.rocket?.mass.kg.toLocaleString("en-US")} kg`}
              secondaryInfo={`${props.rocket?.mass.lb.toLocaleString(
                "en-US"
              )} lb`}
            />
            <SmallCard name="Wikipedia" linkToPush={props.rocket?.wikipedia} />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-lg font-bold">Images</span>
          <Slider imagesArray={props.rocket?.flickr_images!} />
        </div>
      </div>
    </>
  );
};

export default IndividualRocket;
