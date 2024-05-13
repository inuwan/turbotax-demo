import type {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import { AnalyticsScreen } from "../context/analytics";
import { ConfigContext, createConfig } from "../hooks/useConfig";
import Header from "../components/indpro/Header";
import Footer from "../components/indpro/Footer";
import { H1, H3 } from "../components/atoms/Typography";
import { createAnalyticsScripts } from "../utils/analytics";
import "../index.css";
import FaqList from "../components/indpro/FaqList";
import { useMemo } from "react";
import { createFaqStructuredData } from "../utils/faqStructuredData";
import faqContent from "../assets/content/faqContent";
import faqHeader from "../assets/content/faqHeader";
import useIsPreview from "../hooks/useIsPreview";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "FAQ",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "faq";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  const config = createConfig("faq");
  let scripts = createAnalyticsScripts({
    scopeArea: "faq",
    screen: "faq",
    config,
  });

  scripts += `<script type="application/ld+json">${JSON.stringify(
    createFaqStructuredData(faqContent)
  )}</script>`;

  return {
    title: "TurboTax® Verified Pro FAQ",
    other: scripts,
    tags: faqHeader(),
  };
};

const FAQ: Template<TemplateRenderProps> = () => {
  const config = useMemo(() => createConfig("faq"), []);
  const isPreview = useIsPreview()

  return (
    <ConfigContext.Provider value={config}>
      <AnalyticsScreen scopeArea={"faq"} screen={"faq"}>
        <div className={"text-pepper120"}>
          {!isPreview && config.showHeader && <Header />}
          <main className={"px-5 pt-5 pb-12 max-w-screen-m mx-auto"}>
            {!isPreview && <H1 as={"h1"}>Intuit TurboTax Verified Pro</H1>}
            <H3 as={"h2"} className={"mb-6"}>
              Frequently Asked Questions
            </H3>
            <FaqList />
          </main>
          {!isPreview && config.showFooter && <Footer />}
        </div>
      </AnalyticsScreen>
    </ConfigContext.Provider>
  );
};

export default FAQ;
