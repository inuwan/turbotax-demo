import { TaxProsMain } from "../../types/autogen";
import { Address, AddressType, getDirections } from "@yext/pages-components";
import Link from "../atoms/Link";
import { formatUSPhoneNumber } from "../../utils/helpers";
import PhoneIcon from "../../assets/images/phone.svg";
import PinIcon from "../../assets/images/pin.svg";

interface DirectoryCardProps {
  profile: TaxProsMain;
  relativePrefixToRoot: string;
}

const DirectoryCard: React.FC<DirectoryCardProps> = (props) => {
  // relativePrefixToRoot could be used in phase 2 for link to location page
  const { profile, relativePrefixToRoot } = props;

  return (
    <div className="h-full p-6 s:px-10">
      <div className="flex justify-start mb-2">
        {profile.headshot ? (
          <div className="mr-2">
            <img
              className={"w-[60px] h-[60px] min-w-[60px] s:w-[75px] s:h-[75px] s:min-w-[75px] rounded-[100px] object-cover"}
              src={profile.headshot.url}
              alt={profile.c_taxProName ? "Headshot of " + profile.c_taxProName : ""}
              loading={"lazy"}
            />
          </div>
        ) : (
          <div className="h-[60px] s:h-[75px]" />
        )}
        {profile.c_taxProName && (
          <div className="flex justify-center items-center text-pepper120 text-[20px] leading-[28px] font-normal s:text-[24px] s:leading-[30px]">
            <Link
              className={"text-blueberry80 underline hover:no-underline"}
              href={relativePrefixToRoot + profile.slug}
              action={"engaged"}
              object={"directory teaser pro name"}
              objectDetail={profile.c_taxProName}
            >
              {profile.c_taxProName}
            </Link>
          </div>
        )}
      </div>
      {profile.c_tagline && profile.c_tagline.length > 200 ? (
        <div className="text-pepper120 text-[14px] leading-[20px] font-normal italic mb-2">
          {profile.c_tagline.slice(0, 200)}...
          <Link
            className={"ml-1 text-blueberry80 underline hover:no-underline"}
            href={relativePrefixToRoot + profile.slug}
            action={"engaged"}
            object={"directory teaser tagline learn more"}
            objectDetail={"Learn More"}
          >
            Learn More
          </Link>
        </div>
      ) : (
        <div className="text-pepper120 text-[14px] leading-[20px] font-normal italic mb-2">
          {profile.c_tagline}
        </div>
      )}
      {(profile.mainPhone || profile.address) && (
        <div className="border-b border-pepper40 my-4" />
      )}
      {profile.mainPhone && (
        <div className="flex text-sm text-blueberry80 font-medium underline mt-2 hover:no-underline">
          <img
            className={"w-4 h-4 mr-[10px] mt-1"}
            src={PhoneIcon}
            loading={"eager"}
            alt={"Phone icon"}
          />
          <Link
            className={""}
            href={`tel:${profile.mainPhone}`}
            action={"engaged"}
            object={"directory teaser phone"}
          >
            {formatUSPhoneNumber(profile.mainPhone)}
          </Link>
        </div>
      )}
      {(profile.address && !profile.addressHidden) && (
        <div className="flex mt-2">
          <img
            className={"w-4 h-4 mr-[10px] mt-1"}
            src={PinIcon}
            loading={"eager"}
            alt={"Address icon"}
          />
          <Link
            className="text-sm text-blueberry80 font-medium underline hover:no-underline"
            // Listings will pass through for agents opted in for Google Business Profile
            href={`${getDirections(
              profile.address as AddressType,
              undefined,
              profile.googlePlaceId ?? ""
            )}`}
            action={"engaged"}
            object={"directory teaser address"}
          >
            <Address
              address={profile.address as AddressType}
              lines={[["line1"], ["city", ",", "region", "postalCode"]]}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DirectoryCard;
