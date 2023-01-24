import React, { ReactNode, use, useEffect, useState } from "react";
import { CrewType } from "../../../services/crew";
import BigCard from "../../Cards/BigCard";
import SmallCard from "../../Cards/SmallCard";
import { fetchOneLaunch, LaunchType } from "./../../../services/launches";

async function getAllLaunches(IDs: string[]) {
  return await Promise.all(
    IDs.map(async (launch) => await fetchOneLaunch(launch))
  );
}

/*

*/

const CrewPopUp = (props: { children?: ReactNode; crewMember: CrewType }) => {
  const [launchCards, setLaunchCards] = useState<ReactNode[]>([]);

  useEffect(() => {
    getAllLaunches(props.crewMember.launches).then((data) => {
      setLaunchCards(
        data.map((launch) => (
          <SmallCard
            name={launch.name}
            key={launch.id}
            id={launch.id}
            linkToPush={`/launches/${launch.id}`}
          />
        ))
      );
    });
  }, [props.crewMember.launches]);

  return (
    <>
      <BigCard
        key={props.crewMember.id}
        image={props.crewMember.image}
        name={props.crewMember.name}
        linkToPush={props.crewMember.wikipedia}
        infos={[
          `Agency: ${props.crewMember.agency}`,
          `Launches:`,
          ...launchCards,
        ]}
      />
    </>
  );
};

export default CrewPopUp;
