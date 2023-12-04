import { createContext, useContext } from "react";
import type { TaxProsDevExtended } from "./useIndependentPro";

type Env = "local" | "qa" | "prod";
type Page = "independentPro" | "matchingPreview" | "faq" | "dynamicPreview";

export interface Config {
  env: Env;
  showWIP: boolean;
  showMatchingCTAs: boolean;
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
  makeMatchingCtaUrl: (pro: TaxProsDevExtended) => [string, URLSearchParams];
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
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) => {
      const baseUrl = "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro";
      const urlParams = new URLSearchParams();
      urlParams.set("pseudo-id", pro.c_pseudonymID);
      return [baseUrl, urlParams];
    },
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
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) => {
      const baseUrl = "https://pros-turbotax-e2e.app.intuit.com/pro-matching-intro";
      const urlParams = new URLSearchParams();
      urlParams.set("pseudo-id", pro.c_pseudonymID);
      return [baseUrl, urlParams];
    },
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
    makeMatchingCtaUrl: (pro: TaxProsDevExtended) => {
      const baseUrl = "https://pros-turbotax.app.intuit.com/pro-matching-intro";
      const urlParams = new URLSearchParams();
      urlParams.set("pseudo-id", pro.c_pseudonymID);
      return [baseUrl, urlParams];
    },
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
