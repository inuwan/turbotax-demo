import { B2, B3 } from "../atoms/Typography";
import { ReactNode, useEffect, useState } from "react";
import { TextColor } from "../atoms/TextColor";
import {
  Blog,
  CLevelSecurity,
  Efile,
  FaceBook,
  Instagram,
  TheWebsiteFormallyKnownAsTwitter,
  Truste,
  Tumblr,
  YouTube,
} from "./FooterIcons";
import Link from "../atoms/Link";
import { TypeScale } from "../atoms/TypeScale";
import StateLinks from '../directory/StateLinks';
import classNames from "classnames";

interface FooterGlobalProps {
  baseUrl?: string;
}

const Footer: React.FC<FooterGlobalProps> = (props: FooterGlobalProps) => {
  const baseUrl = props.baseUrl ?? 'https://pros.turbotax.intuit.com/';
  const [isInCalifornia, setIsInCalifornia] = useState(
    globalThis.document?.cookie.includes("AKES_GEO=US~CA")
  );

  useEffect(() => {
    // We won't know if the user is in CA when the page is statically rendered, so we'll check again after the page loads.
    setTimeout(() => {
      setIsInCalifornia(document.cookie.includes("AKES_GEO=US~CA"));
    }, 200);
  }, []);

  const showCookiePreference = () => {
    // @ts-ignore
    window.intuit_gdpr.showCookiePreference();
  };

  return (
    <footer className={"w-full bg-pepper0"}>
      <FooterSection>
        <B3 color={TextColor.pepper110} className={"italic py-2"}>
          TurboTax offers or discounts don’t apply to TurboTax Verified Pro services.
          Your independent tax pro will work with you to set the final price before preparing your return, based on your tax situation.
          <br/><br/>
          *Not all feature combinations are available for all locations.
          In-person meetings with a local tax pro are available in some locations, but not available in all states or locations.
          "Local" tax pro is defined as being located within the same state as the client for virtual meetings.
          "Local" tax pro, for the purpose of in-person meetings, is defined as being located within 50 miles of the consumer's zip code.
        </B3>
      </FooterSection>
      <hr className={"border-pepper30"} />

      <FooterSection>
        <div className={"flex flex-wrap gap-5 justify-between"}>
          <B2 className={"flex flex-wrap gap-5"}>
            <FooterLink href={"/store-finder"}>Store Finder</FooterLink>
            <FooterLink href={"/expert-profile-sitemap.xml"}>Sitemap</FooterLink>
          </B2>
          <div className={"flex flex-wrap space-x-5"}>
            <YouTube />
            <Blog />
            <FaceBook />
            <TheWebsiteFormallyKnownAsTwitter />
            <Instagram />
            <Tumblr />
          </div>
        </div>
      </FooterSection>
      <hr className={"border-pepper30"} />
      <FooterSection>
        <div className={"flex flex-col pb-8 space-y-6"}>
          <div className={"flex flex-col s:flex-row  gap-4"}>
            <Link
              action={"engaged"}
              object={"footer product logo"}
              objectDetail={"Intuit"}
              href={"https://www.intuit.com/"}
              className={"s:w-[275px]"}
            >
              <img
                src={
                  "https://digitalasset.intuit.com/IMAGE/A6BBzN1lV/IntuitLogo_SuperBlue-2022-08-102x30.svg"
                }
                width={102}
                height={30}
                alt={"Intuit"}
                loading={"lazy"}
              />
            </Link>

            <div className={"flex flex-wrap flex-row "}>
              <ProductLogo
                href={"https://turbotax.intuit.com"}
                name={"TurboTax"}
                image={"https://digitalasset.intuit.com/IMAGE/A9yqxWvVJ/TT_Color.svg"}
                width={89}
              />
              <ProductLogo
                href={"https://www.creditkarma.com/?source=intuit"}
                name={"Credit Karma"}
                image={"https://digitalasset.intuit.com/IMAGE/A36wvFGOA/CK_Color.svg"}
                width={114}
              />
              <ProductLogo
                href={"https://quickbooks.intuit.com/"}
                name={"QuickBooks"}
                image={"https://digitalasset.intuit.com/IMAGE/A8nrdlHev/QB_Color.svg"}
                width={101}
              />
              <ProductLogo
                href={"https://mailchimp.com/?utm_source=intuit.com&utm_medium=referral"}
                name={"Mailchimp"}
                image={"https://digitalasset.intuit.com/IMAGE/A4zrQzkXj/Group-1.svg"}
                width={95}
              />
            </div>
          </div>

          <div className={"flex flex-col s:flex-row gap-4"}>
            <ul className={"flex flex-wrap s:block s:columns-2 s:w-[275px]"}>
              <FooterListLink href={"https://www.intuit.com/company/"} text={"About Intuit"} />
              <FooterListLink href={"https://www.intuit.com/careers/"} text={"Join Our Team"} />
              <FooterListLink href={"https://www.intuit.com/company/press-room/"} text={"Press"} />
              <FooterListLink href={"https://www.intuit.com/privacy/"} text={"Privacy"} />
              <FooterListLink href={"https://security.intuit.com/"} text={"Security"} />
              <FooterListLink
                href={"https://turbotax.intuit.com/corp/softwarelicense/"}
                text={"Software and Licenses"}
              />
              <FooterListLink href={"https://www.intuit.com/company/"} text={"Trademark Notices"} />
              <FooterListLink
                href={"https://turbotax.intuit.com/corp/affiliates.jsp"}
                text={"Affiliates and Partners"}
              />
              <FooterListLink
                href={"https://www.intuit.com/accessibility/"}
                text={"Accessibility"}
              />
            </ul>

            <section className={"space-y-4 max-w-[500px]"}>
              <B3>©1997-2023 Intuit, Inc. All rights reserved.</B3>
              <B3>
                Intuit, QuickBooks, QB, TurboTax, ProConnect, and Mint are registered trademarks of
                Intuit Inc. Terms and conditions, features, support, pricing, and service options
                subject to change without notice.
              </B3>
              <B3>
                Security Certification of the TurboTax Online application has been performed by
                C-Level Security.
              </B3>
              <B3>
                By accessing and using this page you agree to the{" "}
                <Link
                  action={"engaged"}
                  object={"footer link"}
                  objectDetail={"Terms of Use"}
                  href={"https://turbotax.intuit.com/corp/terms-of-use/"}
                  target={"_blank"}
                  className={"underline text-blueberry90"}
                />
                .
              </B3>

              <section className={`flex flex-wrap gap-2`}>
                <Link
                  typeScale={TypeScale.Body03}
                  href={"https://security.intuit.com/index.php/intuit-cookie-policy/"}
                  className={`hover:underline text-blueberry90`}
                  action={"engaged"}
                  object={"footer link"}
                  objectDetail={"About cookies"}
                >
                  About cookies
                </Link>

                <B3 className={"select-none"}>|</B3>

                <Link
                  typeScale={TypeScale.Body03}
                  className={"flex gap-1 hover:underline text-blueberry90"}
                  onClick={showCookiePreference}
                  href={"#"}
                  action={"engaged"}
                  object={"footer link"}
                  objectDetail={"Manage cookies"}
                >
                  {isInCalifornia ? (
                    <>
                      Your California Privacy Rights
                      <img
                        alt={"Privacy Setting"}
                        className={"w-10"}
                        width={30}
                        height={14}
                        src={
                          "https://lib.intuitcdn.net/img/marketingtechnology/icons/1.0/privacy-options.svg"
                        }
                      />
                    </>
                  ) : (
                    "Manage Cookies"
                  )}
                </Link>
              </section>
            </section>
          </div>

          <div className={"flex justify-end space-x-4 items-start"}>
            <Truste />
            <Efile />
            <CLevelSecurity />
          </div>
        </div>
      </FooterSection>
      <FooterSection noMobileVerticalPadding={true}>
        <StateLinks baseUrl={baseUrl} />
      </FooterSection>
    </footer>
  );
};

interface FooterProps {
  href: string;
  openInNewWindow?: boolean;
  children: string;
}

const ProductLogo: React.FC<{ href: string; name: string; image: string; width: number }> = ({
  href,
  name,
  image,
  width,
}) => {
  return (
    <Link
      action={"engaged"}
      object={"product logo"}
      objectDetail={name}
      href={href}
      target={"_blank"}
      className={"mr-4 s:mr-8"}
    >
      <img
        src={image}
        alt={name}
        height={19}
        width={width}
        className={"h-[31px] py-[6px]"}
        loading={"lazy"}
      />
    </Link>
  );
};

const FooterListLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li
      className={`mb-2 s:max-w-[130px] text-2 after:content-['|'] after:px-2 after:last:content-none after:last:px-0 s:after:content-none s:after:px-0`}
    >
      <FooterLink href={href}>{text}</FooterLink>
    </li>
  );
};

const FooterLink: React.FC<FooterProps> = ({ children, href, openInNewWindow }) => {
  return (
    <Link
      action={"engaged"}
      object={"footer link"}
      objectDetail={children}
      href={href}
      target={openInNewWindow ? "_blank" : undefined}
      rel={"noopener"}
      className={"hover:underline hover:text-blueberry90"}
    >
      {children}
    </Link>
  );
};

interface FooterSectionProps {
  children: ReactNode;
  noMobileVerticalPadding?: boolean;
}

const FooterSection: React.FC<FooterSectionProps> = ({ children, noMobileVerticalPadding }) => {
  return <section className={classNames("max-w-[1200px] py-5 mx-auto", !noMobileVerticalPadding ? "px-10" : "s:px-10")}>{children}</section>;
};

export default Footer;
