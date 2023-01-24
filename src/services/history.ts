export type HistoryType = {
  title: string;
  event_date_utc: string;
  details: string;
  links: {
    article: string;
  };
  id: string;
};

export const fetchHistory = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/history`);
  const history: HistoryType[] = await response.json();
  return history;
};
