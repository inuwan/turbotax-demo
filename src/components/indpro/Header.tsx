import Button from "../atoms/Button";
import Search from "../../assets/icons/Search";
import Lock from "../../assets/icons/Lock";
import useConfig from "../../hooks/useConfig";
import Link from "../atoms/Link";
import type React from "react";

interface Props {}

const Header: React.FC<Props> = () => {
  const config = useConfig();

  return (
    <header
      className={
        "flex justify-between items-center px-5 py-4 sticky top-0 bg-white z-10 border-b-1 border-pepper20"
      }
    >
      <Link
        action={"engaged"}
        object={"header logo"}
        objectDetail={"Verified Pro logo"}
        href={"https://pros.turbotax.intuit.com/"}
      >
        <picture>
          <source
            srcSet={"https://lib.intuitcdn.net/img/nav/4.0/intuit-tt-verified-pro.svg"}
            media={"(min-width: 480px)"}
            width={225}
            height={32}
          />
          <img
            src={"https://digitalasset.intuit.com/IMAGE/A1Ess9OMc/turbo-checkball.svg"}
            height={32}
            width={32}
            className={"h-8 w-auto"}
            alt={"Intuit TurboTax Verified Pro"}
          />
        </picture>
      </Link>

      {config.showMatchingCTAs && (
        <div className={"gap-5 flex"}>
          <Button priority={"primary"} iconBefore={<Search />} as={"a"} href={"https://pros.turbotax.intuit.com/"}>
            Find a pro
          </Button>
          <Button
            className={"hidden m:flex"}
            priority={"secondary"}
            iconBefore={<Lock />}
            as={"a"}
            href={"https://myturbotax.intuit.com/"}
          >
            Sign in
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
