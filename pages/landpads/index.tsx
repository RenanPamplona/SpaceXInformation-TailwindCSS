import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import BigCard from "../../src/components/Cards/BigCard";
import SearchBar from "../../src/components/shared/SearchBar";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { fetchAllLandpads, LandpadType } from "../../src/services/landpads";

export const getServerSideProps: GetServerSideProps = async () => {
  const landpadsArray = await fetchAllLandpads();

  return {
    props: {
      landpadsArray,
    },
  };
};

/*
<S.Wrapper>
        {landpadsToCompile.map((landpad) => (
          <BigCard
            key={landpad.id}
            name={landpad.full_name}
            image={landpad.images.large[0]}
            linkToPush={landpad.wikipedia}
            infos={[
              landpad.details,
              `Success rate: ${(
                (landpad.landing_successes * 100) /
                landpad.landing_attempts
              ).toFixed(1)}%`,
            ]}
          />
        ))}
      </S.Wrapper>
*/

const Landpads: NextPage = (props: {
  children?: ReactNode;
  landpadsArray?: LandpadType[];
}) => {
  const [query, setQuery] = useState<string>();
  const landpadsToCompile: LandpadType[] = [];

  props.landpadsArray?.forEach((landpad) => {
    if (
      landpad.full_name.toLowerCase().includes(query?.toLowerCase()!) ||
      landpad.name.toLowerCase().includes(query?.toLowerCase()!)
    ) {
      landpadsToCompile.push(landpad);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <>
      <Head>
        <title>Landpads</title>
      </Head>
      <TitleWithImage
        title="Landpads"
        image="https://live.staticflickr.com/297/18610429514_e5d758edf3_h.jpg"
        goBackLink="/"
      />
      <SearchBar type="landpads" setStateMethod={setQuery} />
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center gap-8 md:w-5/6 md:p-8 lg:w-4/6">
          {landpadsToCompile.map((landpad) => (
            <BigCard
              key={landpad.id}
              name={landpad.full_name}
              image={landpad.images.large[0]}
              linkToPush={landpad.wikipedia}
              infos={[
                landpad.details,
                `Success rate: ${(
                  (landpad.landing_successes * 100) /
                  landpad.landing_attempts
                ).toFixed(1)}%`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Landpads;
