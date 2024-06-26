import React from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import {TextColor} from "../atoms/TextColor";
import Badge from "../atoms/Badge";
import ItemList, {ListItem} from "../indpro/ItemList";
import ShieldCheck from "../../assets/icons/ShieldCheck";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import {TypeScale} from "../atoms/TypeScale";
import {StateIcon} from "../../assets/icons/primary/StateIcon";
import Calendar from "../../assets/icons/Calendar";
import {MatchingCtaButton} from "./SharedComponents";
import {PageSection} from "./constants";
import {Label, useProHasLabel} from "../../hooks/useProHasLabel";
import {Headshot} from "./Bio";

const Hero: React.FC = () => {
  return (
    <section className={"bg-blueberry0 px-4 py-6"} aria-labelledby={"taxProName"}>
      <div
        className={
          "flex flex-col gap-8 s:flex-row-reverse s:gap-6 justify-between s:items-center s:px-6 m:px-20 l:px-[140px] s:max-w-screen-xl mx-auto"
        }
      >
        <Headshot includeLogo />
        <div
          className={"contents s:flex flex-col s:gap-6 gap-8 s:max-w-[600px] items-start s:py-14"}
        >
          <Name />
          <Reviews />
          <Details />
          <Booking />
        </div>
      </div>
    </section>
  );
};

const Name: React.FC = () => {
  const pro = useIndependentPro();

  return (
    <div className={"flex flex-col gap-1"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Body03}
        typescaleStationary={TypeScale.Headline06}
        weightMobile={"regular"}
        weightStationary={"medium"}
        color={TextColor.textSecondary}
        as={"div"}
        className={"uppercase"}
      >
        {pro.c_officeLocationName}
      </ResponsiveTypography>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline01}
        typescaleStationary={TypeScale.Display04}
        weightMobile={"regular"}
        weightStationary={"medium"}
        color={TextColor.textPrimary}
        as={"h1"}
        id={"taxProName"}
      >
        {pro.c_taxProName}
      </ResponsiveTypography>
    </div>
  );
};

const Reviews: React.FC = () => {
  // return <ReviewsWidget />;
  return null;
};

const Details: React.FC = () => {
  const pro = useIndependentPro();
  const isOffboarding = useProHasLabel(Label.OffboardInProgress);

  let certification: string;
  if (pro.certifications && pro.certifications.length > 0) {
    if (pro.certifications[0] === "EA") certification = "Enrolled Agent";
    else certification = pro.certifications[0];
  } else {
    certification = `Verified Pro with ${pro.yearsOfExperience} ${
      pro.yearsOfExperience == 1 ? "year" : "years"
    } of experience`;
  }

  const items: ListItem[] = [];
  items.push({
    icon: <ShieldCheck className={"w-6 h-6 s:w-8 s:h-8"} />,
    children: certification,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  items.push({
    icon: <StateIcon state={pro.address.region} />,
    children: `${pro.address.city}, ${pro.address.region}`,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  const acceptingClients = pro.c_acceptingNewClients && !isOffboarding;

  return (
    <div className={"flex flex-col gap-4 items-start"}>
      <Badge variant={acceptingClients ? "success" : "critical"}>
        {acceptingClients ? "Accepting new clients" : "Not accepting new clients"}
      </Badge>
      <ItemList items={items} />
    </div>
  );
};

const Booking: React.FC = () => {
  return (
    <MatchingCtaButton size={"large"} icon={Calendar} id={"primary-cta"} section={PageSection.Hero}>
      Book a free call
    </MatchingCtaButton>
  );
};

export default Hero;
