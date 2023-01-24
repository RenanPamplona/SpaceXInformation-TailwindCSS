export type StarlinkType = {
  version: string;
  launch: string;
  id: string;
  spaceTrack: {
    OBJECT_NAME: string;
    LAUNCH_DATE: string;
  };
};

export const fetchAllStarlinks = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/starlink`);
  const starlinks: StarlinkType[] = await response.json();
  return starlinks;
};

export const fetchOneStarlink = async (id: string) => {
  const response = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`);
  const starlink: StarlinkType = await response.json();
  return starlink;
};
