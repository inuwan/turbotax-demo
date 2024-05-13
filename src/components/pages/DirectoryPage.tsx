import type { DirectoryProfile } from '../../types/entities'
import type { TaxProsMain } from "../../types/autogen";
import type { TemplateRenderProps } from "@yext/pages";
import { Config, ConfigContext } from "../../hooks/useConfig";
import { DirectoryContext } from "../../hooks/useDirectory";
import Breadcrumbs from "../directory/Breadcrumbs";
import DirectoryList from "../directory/DirectoryList";
import DirectoryHero from "../directory/DirectoryHero";
import DirectoryGrid from '../directory/DirectoryGrid';
import Onramp from '../directory/Onramp';
import Footer from "../indpro/Footer";
import Header from "../indpro/Header";
import { AnalyticsScreen } from "../../context/analytics";

interface DirectoryProps {
  config: Config;
  data: TemplateRenderProps<DirectoryProfile<DirectoryProfile<never>>> | TemplateRenderProps<DirectoryProfile<TaxProsMain>>;
  useDirectoryGrid?: boolean;
}

const DirectoryPage = (props: DirectoryProps) => {
  const { data, config, useDirectoryGrid } = props;
  const { dm_directoryChildren, dm_directoryParents_directory } = props.data.document;

  return (
    <ConfigContext.Provider value={config}>
      <AnalyticsScreen
        scopeArea={"directory"}
        screen={"directory"}
      >
        <DirectoryContext.Provider value={data.document}>
          <div className={""}>
            {config.showHeader && <Header />}
            <main className="flex flex-col">
              <DirectoryHero
                name={data.document.name}
                title={data.document.c_heroTitle}
                description={data.document.c_heroDescription}
                FindProCTA={data.document.c_findAVerifiedPro}
                FindProText={data.document.c_findAVerifiedProHeroText}
                imageUrl={data.document.c_directoryHeroImage?.url}
                imageAlt={data.document.c_directoryHeroImage?.alternateText}
              />
              <Breadcrumbs
                className="hidden s:flex s:justify-center"
                breadcrumbs={dm_directoryParents_directory || []}
                relativePrefixToRoot={data.relativePrefixToRoot}
              />
              {useDirectoryGrid ? (
                <DirectoryGrid
                  directoryChildren={dm_directoryChildren as TaxProsMain[] || []}
                  relativePrefixToRoot={data.relativePrefixToRoot}
                />
              ) : (
                <DirectoryList
                  directoryChildren={dm_directoryChildren as DirectoryProfile<never>[] || []}
                  relativePrefixToRoot={data.relativePrefixToRoot}
                />
              )}
              <Onramp ctaUrl={data.document.c_onrampCTAURL} />
              <Breadcrumbs
                className="flex justify-start px-[16px] border border-tofu110 s:hidden"
                breadcrumbs={dm_directoryParents_directory || []}
                relativePrefixToRoot={data.relativePrefixToRoot}
              />
            </main>
            {config.showFooter && <Footer baseUrl={data.relativePrefixToRoot} />}
          </div>
        </DirectoryContext.Provider>
      </AnalyticsScreen>
    </ConfigContext.Provider>
  );
};

export default DirectoryPage;
