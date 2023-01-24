export type LandpadType = {
  name: string;
  full_name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  landing_attempts: number;
  landing_successes: number;
  wikipedia: string;
  details: string;
  launches: string[];
  id: string;
  images: { large: string[] };
};

export const fetchAllLandpads = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/landpads`);
  const landpadsArray: LandpadType[] = await response.json();
  return landpadsArray;
};

export const fetchOneLandpad = async (id: string) => {
  const response = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`);
  const landpad: LandpadType = await response.json();
  return landpad;
};
