export type CrewType = {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: string;
  id: string;
};

export const fetchAllCrew = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/crew`);
  const crewData: CrewType[] = await response.json();
  return crewData;
};
