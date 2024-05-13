import DirectoryHeroImage from "../../assets/images/directory_hero.jpg";
import { LexicalRichText } from "@yext/pages-components";
import { RTF2, CTA } from "../../types/entities";
import Button from "../atoms/Button";

interface DirectoryHeroProps {
  name: string;
  title?: string;
  description?: string | RTF2;
  FindProCTA?: CTA;
  FindProText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const DirectoryHero = (props: DirectoryHeroProps) => {
  const { name, title, description, FindProText, FindProCTA, imageUrl, imageAlt } = props;
  const titleText = title || `Find a TurboTax Verified Pro in ${name == "Directory" ? "the United States" : name}`;
  const ctaText = FindProText ?? "Find your forever pro based on your tax situation and location";
  const ctaLabel = FindProCTA?.label ?? "Find a Verified Pro";
  const ctaUrl = FindProCTA?.link ?? "https://pros.turbotax.intuit.com/pro-matching-intro";

  return (
    <div className="flex flex-col px-4 py-6 justify-center items-center bg-blueberry10 s:px-[150px] m:flex-row m:gap-x-[80px] m:py-[50px] l:gap-x-[100px]">
      <div className="flex flex-col gap-y-[16px] mb-6 max-w-[520px]">
        <h1 className="text-[34px] leading-[44px] m:text-[40px] m:leading-[52px] text-pepper110 font-normal">
          {titleText}
        </h1>
        <div className="text-base text-pepper120 font-normal">
          {description ?
            typeof description === "string" ? (
              description
              ) : (
              <LexicalRichText serializedAST={JSON.stringify(description.json)} />
          ) : (
            <span>
              Find an independent tax pro who’s got your back— they’ll only sign and file your return when it’s <strong className="font-medium">100% accurate</strong>.
            </span>
          )}
        </div>
        <div className="text-pepper120 text-[16px] leading-[24px] font-bold">
          {ctaText}
        </div>
        <Button
          className={"text-[14px] leading-[20px] font-medium h-[42px] mt-2 m:mt-4 m:w-[188px]"}
          priority={"primary"}
          as={"a"}
          href={ctaUrl}
        >
          {ctaLabel}
        </Button>
      </div>
      <img
        className={"w-full h-[234px] object-cover rounded-[16px] xs:max-w-[520px] l:w-[550px] l:h-[392px]"}
        src={imageUrl || DirectoryHeroImage}
        loading={"eager"}
        alt={imageAlt || ""}
      />
    </div>
  );
};

export default DirectoryHero;
