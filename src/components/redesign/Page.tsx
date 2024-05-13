import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import WorkingTogether from "./WorkingTogether";
import Bio from "./Bio";
import Reviews from "./Reviews";
import Location from "./Location";
import PoweredBy from "./PoweredBy";
import Footer from "../indpro/Footer";
import { Spacer } from "./SharedComponents";
import Header from "./Header";
import StickyMatchingFooter from "./StickyMatchingFooter";
import useConfig from "../../hooks/useConfig";
import ErrorBoundary from "../ErrorBoundary";

const Page: React.FC = () => {
  const config = useConfig();

  return (
    <div className={"text-pepper120"}>
      {config.showHeader && (
        <ErrorBoundary fallback={null}>
          <Header />
        </ErrorBoundary>
      )}
      <main className={"contents"}>
        <Hero />
        <div className={"max-w-screen-xl s:mx-auto s:px-6"}>
          <Skills />
          <WorkingTogether />
          <Bio />
          <Reviews />
          <Location />
          <PoweredBy />
        </div>
      </main>
      <Spacer size={"80"} stationaryOnly />
      {config.showFooter && (
        <>
          <Footer />
          {config.showMatchingCTAs && (
            <ErrorBoundary fallback={null}>
              <StickyMatchingFooter />
            </ErrorBoundary>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
