export type CompanyType = {
  name: string;
  founder: string;
  founded: string;
  employees: string;
  ceo: string;
  cto: string;
  coo: string;
  valuation: number;
  headquarters: {
    address: string;
    city: string;
    state: string;
  };
  links: {
    website: string;
    flickr: string;
    twitter: string;
    elon_twitter: string;
  };
  summary: string;
};

export const fetchCompanyData = async () => {
  const response = await fetch(`https://api.spacexdata.com/v4/company`);
  const companyData: CompanyType = await response.json();
  return companyData;
};
