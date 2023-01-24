import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import MediumCard from "../../src/components/Cards/MediumCard";
import CrewPopUp from "../../src/components/PopUps/CrewPopUp";
import PopUpSetup from "../../src/components/PopUpSetup";
import SearchBar from "../../src/components/shared/SearchBar";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { CrewType, fetchAllCrew } from "../../src/services/crew";

export const getServerSideProps: GetServerSideProps = async () => {
  const crewMembers = await fetchAllCrew();

  return {
    props: {
      crewMembers,
    },
  };
};

const Crew: NextPage = (props: {
  children?: ReactNode;
  crewMembers?: CrewType[];
}) => {
  const [query, setQuery] = useState<string>();
  const [currentPopUp, setCurrentPopUp] = useState<string>("0");
  const crewMembersToCompile: CrewType[] = [];

  props.crewMembers?.forEach((crewMember) => {
    if (crewMember.name.toLowerCase().includes(query?.toLowerCase()!)) {
      crewMembersToCompile.push(crewMember);
    }
  });

  useEffect(() => {
    setQuery("");
  }, []);

  const crewPopUpObject: any = {
    0: <div></div>,
  };

  props.crewMembers?.forEach((crewMember) => {
    crewPopUpObject[crewMember.id] = (
      <PopUpSetup popUpState={setCurrentPopUp}>
        <CrewPopUp crewMember={crewMember} />
      </PopUpSetup>
    );
  });

  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>
      <TitleWithImage
        title="Crew"
        image="https://live.staticflickr.com/65535/52035158910_eed8ba4193_4k.jpg"
        goBackLink="/"
      />
      <SearchBar type="crew members" setStateMethod={setQuery} />

      {crewPopUpObject[currentPopUp]}

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 p-8 sm:py-8 sm:px-20 md:grid md:w-5/6 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4">
          {crewMembersToCompile?.map((crewMember) => (
            <MediumCard
              name={crewMember.name}
              image={crewMember.image}
              key={crewMember.id}
              id={crewMember.id}
              linkToPush={crewMember.wikipedia}
              long={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Crew;
