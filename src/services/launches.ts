export type LaunchType = {
  links: {
    patch: {
      small: string;
      large: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    webcast: string;
    article: string;
    wikipedia: string;
  };
  rocket: string;
  success: boolean;
  details: string;
  crew: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  upcoming: boolean;
  id: string;
};

export const fetchAllLaunches = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/launches`);
  const launchArray: LaunchType[] = await response.json();
  return launchArray;
};

export const fetchOneLaunch = async (id: string) => {
  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch: LaunchType = await response.json();
  return launch;
};

export const fetchLatestLaunch = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/launches/latest`);
  const launch: LaunchType = await response.json();
  return launch;
};

export const fetchNextLaunch = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/launches/next`);
  const launch: LaunchType = await response.json();
  return launch;
};
