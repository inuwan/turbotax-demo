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

const Page: React.FC = () => {
  const config = useConfig();

  return (
    <div className={"text-pepper120"}>
      {config.showHeader && <Header />}
      <Hero />
      <div className={"max-w-screen-xl s:mx-auto s:px-6"}>
        {/*<Debug />*/}
        <Skills />
        <WorkingTogether />
        <Bio />
        <Reviews />
        <Location />
        <PoweredBy />
      </div>
      <Spacer size={"80"} stationaryOnly />
      {config.showFooter && (
        <>
          <Footer />
          {config.showMatchingCTAs && <StickyMatchingFooter />}
        </>
      )}
    </div>
  );
};

export default Page;