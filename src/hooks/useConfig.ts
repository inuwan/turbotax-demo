import { createContext, useContext } from "react";
import type { TaxProsDevExtended } from "./useIndependentPro";

type Env = "local" | "qa" | "prod";
export type Page = "independentPro" | "matchingPreview" | "proReferral" | "faq" | "dynamicPreview" | "directory" | "directory_region" | "directory_city";

export interface Config {
  env: Env;
  showWIP: boolean;
  showMatchingCTAs: boolean;
  referralOverridden?: boolean;
  showHeader: boolean;
  showFooter: boolean;
  loadTealium: boolean;
  tealiumURL: string;
  loadAnalytics: boolean;
  debugAnalytics?: boolean;
  analyticsConfig: {
    writeKey: string;
    env: string;
    src: string;
    loadAdobeVisitorAPI: boolean;
  };
  proMatchingIntroUrl: string;
  makeMatchingCtaUrl: (pro: TaxProsDevExtended) => [string, URLSearchParams];
}

function makeCtaUrl(pro: TaxProsDevExtended, baseUrl: string): [string, URLSearchParams] {
  const urlParams = new URLSearchParams();
  if (!pro.c_pseudonymID) throw new Error("Pro is missing pseudonymId");
  urlParams.set("pseudo-id", pro.c_pseudonymID);
  return [baseUrl, urlParams];
}

const ConfigsByEnv: Record<Env, Config> = {
  local: {
    env: "local",
    showWIP: true,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: false,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/dev/utag.js",
    loadAnalytics: false,
    debugAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "e2e",
      src: "//uxfabric.intuitcdn.net/analytics/staging/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
    proMatchingIntroUrl: "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro",
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) =>
      makeCtaUrl(pro, "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro"),
  },
  qa: {
    env: "qa",
    showWIP: true,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: true,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/dev/utag.js",
    loadAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "e2e",
      src: "//uxfabric.intuitcdn.net/analytics/staging/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
    proMatchingIntroUrl: "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro",
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) =>
      makeCtaUrl(pro, "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro"),
  },
  prod: {
    env: "prod",
    showWIP: false,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: true,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/prod/utag.js",
    loadAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "prod",
      src: "//uxfabric.intuitcdn.net/analytics/prod/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
    proMatchingIntroUrl: "https://pros.turbotax.intuit.com/",
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) =>
      makeCtaUrl(pro, "https://pros-turbotax.app.intuit.com/pro-matching-intro"),
  },
};

function getConfigForEnv(): Config {
  const env = YEXT_PUBLIC_ENVIRONMENT as Env;
  if (env in ConfigsByEnv) {
    return ConfigsByEnv[env];
  }

  console.error("Invalid environment, fallback to prod config", env);
  return ConfigsByEnv.prod;
}

export const createConfig = (page: Page = "independentPro"): Config => {
  const config: Config = { ...getConfigForEnv() };

  if (page === "proReferral") {
    config.referralOverridden = true;
  }

  if (page === "matchingPreview" || page === "dynamicPreview") {
    config.showHeader = false;
    config.showMatchingCTAs = false;
  }

  return config;
};

export const ConfigContext = createContext<Config>(createConfig());

const useConfig = (): Config => {
  return useContext(ConfigContext);
};

export default useConfig;
