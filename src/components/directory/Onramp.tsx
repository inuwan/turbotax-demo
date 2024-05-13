import OnrampImage from "../../assets/images/onramp.svg";
import Button from "../atoms/Button";

interface OnrampProps {
  ctaUrl: string;
};

const Onramp = (props: OnrampProps) => {
  const title = "Match with a Verified Pro";
  const description = "Tell us a bit about you and your taxes to match with a pro who specializes in your tax situation.";
  const ctaText = "Get Started";
  const ctaUrl = props.ctaUrl ?? "https://pros.turbotax.intuit.com/pro-matching-intro";

  return (
    <div className="flex flex-col m-6 px-4 py-6 bg-tofu110 rounded-[16px] s:mx-[150px] s:my-[50px] m:flex-row m:justify-between m:px-[50px] m:py-[50px] l:px-[100px] xl:px-[150px]">
      <div className="">
        <div className="text-pepper110 text-[30px] leading-[40px] mb-4">
          {title}
        </div>
        <div className="text-pepper120 text-[16px] leading-[24px] font-normal mb-6">
          {description}
        </div>
        <Button
          className={"text-[14px] leading-[20px] font-medium h-[42px] mb-6 m:w-[130px]"}
          priority={"primary"}
          as={"a"}
          href={ctaUrl}
        >
          {ctaText}
        </Button>
      </div>
      <div className="flex justify-center">
        <img
          className={"w-[250px] min-w-[250px] h-[146px] m:w-[312px] m:min-w-[312px] m:h-[184px]"}
          src={OnrampImage}
          loading={"lazy"}
          alt={"Match with a verified pro image"}
        />
      </div>
    </div>
  );
};

export default Onramp;
