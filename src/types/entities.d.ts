import type { Image } from "./autogen";

interface BaseProfile {
  readonly id: string;
  readonly businessId: number;
  readonly locale: string;
  readonly siteDomain: string;
  readonly siteId: number;
  readonly siteInternalHostname: string;
  readonly uid: number;
  readonly meta: {
    readonly entityType: {
      readonly id: string;
      readonly uid: number;
    };
    readonly locale: string;
  };
}

interface Meta {
  title: string;
  description: string;
}

export interface RTF2 {
  readonly json: object;
}

export enum LinkType {
  URL = 'URL',
  Email = 'Email',
  Phone = 'Phone',
}

export interface CTA {
  link: string
  label: string
  linkType?: LinkType
}

export type DirectoryProfile<T> = BaseProfile & {
  readonly name: string;
  readonly slug: string;
  readonly c_meta: Meta;
  readonly c_heroTitle: string;
  readonly c_heroDescription: string;
  readonly c_findAVerifiedPro: CTA,
  readonly c_findAVerifiedProHeroText: string,
  readonly c_directoryHeroImage: Image,
  readonly c_onrampCTAURL: string;
  readonly dm_baseEntityCount: number;
  readonly dm_directoryChildren?: T[];
  readonly dm_directoryParents_directory?: Array<{ slug: string; name: string }>;
};
