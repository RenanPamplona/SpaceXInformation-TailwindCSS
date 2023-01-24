export type RocketType = {
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  flickr_images: string[];
  name: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  wikipedia: string;
  description: string;
  id: string;
};

export const fetchAllRockets = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/rockets`);
  const rockets: RocketType[] = await response.json();
  return rockets;
};

export const fetchOneRocket = async (id: string) => {
  const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
  const rocket: RocketType = await response.json();
  return rocket;
};
