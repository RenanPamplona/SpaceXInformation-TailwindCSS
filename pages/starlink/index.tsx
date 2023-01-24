import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import SmallCard from "../../src/components/Cards/SmallCard";
import PopUpSetup from "../../src/components/PopUpSetup";
import SearchBar from "../../src/components/shared/SearchBar";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { fetchAllStarlinks, StarlinkType } from "../../src/services/starlink";

export const getServerSideProps: GetServerSideProps = async () => {
  const starlinkList = await fetchAllStarlinks();
  return {
    props: {
      starlinkList,
    },
  };
};

const Starlink: NextPage = (props: {
  children?: ReactNode;
  starlinkList?: StarlinkType[];
}) => {
  const [query, setQuery] = useState<string>();
  const starlinksToCompile: StarlinkType[] = [];

  props.starlinkList?.forEach((starlink) => {
    if (
      starlink.spaceTrack.OBJECT_NAME.toLowerCase().includes(
        query?.toLowerCase()!
      )
    ) {
      starlinksToCompile.push(starlink);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Starlink</title>
      </Head>
      <TitleWithImage
        title="Starlink"
        subtitle={`Starlink satellite count: ${props.starlinkList?.length}`}
        image="https://live.staticflickr.com/65535/52444210812_d44fa6f5d2_k.jpg"
        goBackLink="/"
      />
      <SearchBar setStateMethod={setQuery} type="starlinks" />
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col gap-2 py-4 px-4 sm:gap-4 md:grid md:w-5/6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {starlinksToCompile.map((starlink) => (
            <SmallCard
              key={starlink.id}
              name={starlink.spaceTrack.OBJECT_NAME}
              id={starlink.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Starlink;
