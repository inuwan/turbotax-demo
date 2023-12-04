export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export interface TaxProsDev {
  description: string;
  address: Address;
  slug: string;
  geocodedCoordinate: Coordinate;
  headshot: Image;
  services: string[];
  c_advisorBio: string;
  c_uRLName: string;
  hours: Hours;
  c_areasOfExpertise: string[];
  c_metaDescription: string;
  c_title: string;
  c_metaKeywords: string;
  c_taxProName: string;
  c_officeLocationName: string;
  certifications: string[];
  yearsOfExperience: number;
  languages: string[];
  c_jotFormId: string;
  googlePlaceId: string;
  c_signedMapUrlPreProd: string;
  c_signedMapUrlProd: string;
  id: string;
  labels: any;
  c_pseudonymID: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface TaxProsPreview {
  name: string;
  description: string;
  address: Address;
  slug: string;
  photoGallery: ComplexImage[];
  geocodedCoordinate: Coordinate;
  c_backgroundImage: Image;
  headshot: Image;
  keywords: string[];
  services: string[];
  logo: ComplexImage;
  c_advisorBio: string;
  c_uRLName: string;
  hours: Hours;
  c_areasOfExpertise: string[];
  c_metaDescription: string;
  c_title: string;
  c_metaKeywords: string;
  c_taxProName: string;
  c_officeLocationName: string;
  certifications: string[];
  yearsOfExperience: number;
  languages: string[];
  c_jotFormId: string;
  googlePlaceId: string;
  c_signedMapUrlPreProd: string;
  c_signedMapUrlProd: string;
  id: string;
  labels: any;
}
