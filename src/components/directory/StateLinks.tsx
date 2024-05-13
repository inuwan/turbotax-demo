import { useState, useEffect } from "react";
import { DirectoryProfile } from "../../types/entities";
import DirectoryList from "./DirectoryList";

export type RegionEntitiesResponse = {
  count: number;
  docs: DirectoryProfile<never>[];
};

interface StateLinksProps {
  baseUrl: string;
};

const StateLinks = (props: StateLinksProps) => {
  const { baseUrl } = props;
  const title = "Find a TurboTax Verified Pro in All States";

  const [regionEntities, setRegionEntities] = useState<RegionEntitiesResponse>();  
  const streamsApiKey = YEXT_PUBLIC_STREAMS_API_KEY;
  useEffect(() => {
    fetch(
      `https://streams.yext.com/v2/accounts/me/api/directoryRegionEntities?v=20240222&api_key=${streamsApiKey}&limit=50`
    )
      .then((resp) => resp.json())
      .then((data) => setRegionEntities(data.response || {}))
      .catch((error) => console.log(error));
  }, [streamsApiKey]);

  return regionEntities ? (
    <div className="flex flex-col bg-pepper0">
      <div className="font-normal text-pepper110 text-[18px] leading-[24px] px-4 pb-[16px] s:px-0 s:pb-0">
        {title}
      </div>
      <div className="">
        <DirectoryList
          directoryChildren={regionEntities.docs}
          relativePrefixToRoot={baseUrl}
          isFooter={true}
        />
      </div>
    </div>
  ) : (
    <div className="Statelinks hidden" />
  );
};

export default StateLinks;
