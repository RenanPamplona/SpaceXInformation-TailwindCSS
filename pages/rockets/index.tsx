import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import BigCard from "../../src/components/Cards/BigCard";
import SearchBar from "../../src/components/shared/SearchBar";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { fetchAllRockets, RocketType } from "../../src/services/rocket";

export const getServerSideProps: GetServerSideProps = async () => {
  const rocketsArray = await fetchAllRockets();

  return {
    props: {
      rocketsArray,
    },
  };
};

const Rockets: NextPage = (props: {
  children?: ReactNode;
  rocketsArray?: RocketType[];
}) => {
  const [query, setQuery] = useState<string>();
  const rocketsToCompile: RocketType[] = [];

  props.rocketsArray?.forEach((rocket) => {
    if (rocket.name.toLowerCase().includes(query?.toLowerCase()!)) {
      rocketsToCompile.push(rocket);
    }
  });

  useEffect(() => {
    setQuery("");
  }, [props.rocketsArray]);

  return (
    <>
      <Head>
        <title>Rockets</title>
      </Head>

      <TitleWithImage
        title="Rockets"
        image="https://live.staticflickr.com/65535/52568401533_0d06419f01_k.jpg"
        goBackLink="/"
      />
      <SearchBar type="rockets" state={query} setStateMethod={setQuery} />
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center gap-8 md:w-5/6 md:p-8 lg:w-4/6">
          {rocketsToCompile.map((rocket) => (
            <BigCard
              key={rocket.id}
              name={rocket.name}
              image={rocket.flickr_images[0]}
              linkToPush={`/rockets/${rocket.id}`}
              infos={[
                rocket.description,
                `Cost per launch ${rocket.cost_per_launch.toLocaleString(
                  "en-Us",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}`,
                `Success rate: ${rocket.success_rate_pct}%`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rockets;
