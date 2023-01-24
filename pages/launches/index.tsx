import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import MediumCard from "../../src/components/Cards/MediumCard";
import SearchBar from "../../src/components/shared/SearchBar";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { fetchAllLaunches, LaunchType } from "../../src/services/launches";

export const getServerSideProps: GetServerSideProps = async () => {
  const launchArray = await fetchAllLaunches();

  return {
    props: {
      launchArray,
    },
  };
};

const Launches: NextPage = (props: {
  children?: ReactNode;
  launchArray?: LaunchType[];
}) => {
  const [query, setQuery] = useState<string>();
  const launchesToCompile: LaunchType[] = [];

  props.launchArray?.forEach((launch) => {
    if (launch.name?.toLowerCase().includes(query?.toLowerCase()!)) {
      launchesToCompile.push(launch);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Launches</title>
      </Head>
      <TitleWithImage
        title="Launches"
        subtitle={`Launches count: ${props.launchArray?.length}`}
        image="https://live.staticflickr.com/65535/52264517689_109fea17d1_k.jpg"
        goBackLink="/"
      />
      <SearchBar type="launches" setStateMethod={setQuery} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 p-8 sm:px-20 md:grid md:w-5/6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {launchesToCompile.map((launch) => (
            <MediumCard
              key={launch.id}
              name={launch.name}
              image={launch.links.patch.small}
              id={launch.id}
              short={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Launches;
