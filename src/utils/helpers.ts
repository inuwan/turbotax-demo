import { DirectoryProfile } from "../types/entities";
import { TaxProsMain } from "../types/autogen";

const stateAbbrToNameMap: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  TT: "Trust Territories",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  VI: "Virgin Islands",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

function stateAbbrToName(abbr: string): string {
  if (Object.keys(stateAbbrToNameMap).includes(abbr)) {
    return stateAbbrToNameMap[abbr];
  } else {
    return abbr;
  }
}

function formatUSPhoneNumber(phoneNumber: string): string {
  const numericOnly = phoneNumber.replace(/\D/g, '');
  if (numericOnly.length === 11) {
    return numericOnly.substring(1).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  } else {
    return phoneNumber;
  }
}

export {
  stateAbbrToName,
  formatUSPhoneNumber,
};
