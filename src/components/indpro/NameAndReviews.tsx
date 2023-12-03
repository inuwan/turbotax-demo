import { useEffect, useState } from "react";
import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import Button from "../atoms/Button";
import useConfig from "../../hooks/useConfig";

const AND = '&';
const CID_KEY = 'cid';
const PRO_REFERRED_VALUE = 'pr';
const CID_KV = AND + CID_KEY + '=' + PRO_REFERRED_VALUE;
const CHANNEL_URL_KEY = '&channelUrl=';

const NameAndReviews = () => {
  const { c_taxProName, c_officeLocationName, id } = useIndependentPro();
  const config = useConfig();
  const [requestOriginParams, setRequestOriginParams] = useState('');

  useEffect(() => {
      if (!document) {
          return;
      }

      let paramValue = '';
      let currentParams = (new URL(document.URL)).searchParams;
      let referrer = document.referrer;
      const cidParam = currentParams?.get(CID_KEY)

      if (cidParam != null && cidParam === PRO_REFERRED_VALUE) {
          paramValue = paramValue.concat(CID_KV);
      }

      if (referrer != null && referrer.length > 0) {
          paramValue = paramValue.concat(CHANNEL_URL_KEY + encodeURIComponent(document.referrer));
      }

      setRequestOriginParams(paramValue);
  }, []);

  return (
    <div>
      <B2 weight={"medium"} color={TextColor.gray02} className={"uppercase"}>
        {c_officeLocationName}
      </B2>
      <H3 as={"h1"}>{c_taxProName}</H3>
      {config.showMatchingCTAs && (
        <div className={"flex flex-wrap gap-2 mt-2"}>
          <Button
            action={"engaged"}
            object={"Schedule a meeting"}
            as={"a"}
            href={
              "https://myturbotax.intuit.com/?uroute=pro-matching&pseudo-id=" +
                id +
              requestOriginParams
            }
            className={"grow xs:grow-0"}
          >
            Schedule a meeting
          </Button>
        </div>
      )}
      {/*<Reviews />*/}
    </div>
  );
};

export default NameAndReviews;
