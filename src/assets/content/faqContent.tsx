import { FaqItemProps } from "../../components/indpro/FaqItem";
import BaseLink from "../../components/atoms/Link";
import useIsPreview from "../../hooks/useIsPreview";

const VerifiedPro = () => <span className={"font-semibold"}>Intuit TurboTax Verified Pro</span>;

const LinkDestinations = {
  auditSupportGuarantee:
    "https://ttlc.intuit.com/community/charges-and-fees/help/what-is-the-turbotax-audit-support-guarantee/00/26143",
  turboTaxAccount: "https://myturbotax.intuit.com/",
  turboTaxGuarantees: "https://turbotax.intuit.com/corp/guarantees/",
} as const;

const Link: React.FC<{ to: keyof typeof LinkDestinations }> = (props) => {
  const isPreview = useIsPreview()
  
  return <BaseLink
    action={"engaged"}
    object={"faq link"}
    objectDetail={props.to}
    href={LinkDestinations[props.to]}
    target={isPreview ? "_self": "_blank"}
    rel={"noreferrer noopener"}
    className={"font-medium text-blue02 hover:underline"}
  >
    {props.children}
  </BaseLink>
};

const content: FaqItemProps[] = [
  {
    title:
      "What’s the difference between Intuit TurboTax Verified Pro and other TurboTax services?",
    children: (
      <>
        <p>
          TurboTax offers a variety of products and services to suit your tax-prep needs. There are a few key differences between Intuit TurboTax Verified Pro and our other live tax-prep help.
        </p>
        <p>
          With TurboTax Verified Pro, you match with independent tax preparers, qualified to handle your tax returns, no matter how complex. It's important to know that tax preparers on TurboTax Verified Pro run their own tax practices, and are not TurboTax employees. That means you get to work directly with your tax pro to create the agreements of your working relationship.
        </p>
        <p>
        Just like other TurboTax tax prep services, your tax return is backed by <Link to={"turboTaxGuarantees"}>TurboTax guarantees</Link>, so you get peace of mind that your taxes are done right.
        </p>
      </>
    ),
  },

  {
    title: "What’s the process like?",
    children: (
      <p>
        First, tell us a bit about you and your taxes. Then, match with a Verified Pro who can
        handle your unique situation and understands your local or state tax laws. Next, schedule an
        intro call to get to know your tax pro and learn if it’s a good fit. After your intro call,
        securely share your tax documents with your Verified Pro online or in person, where
        available. Once they’ve completed your tax return, your tax pro reviews it with you and
        answers any questions you have. Finally, you can relax while your pro prepares, signs and
        files your return for you.
      </p>
    ),
  },

  {
    title: "What qualifications do the tax preparers on TurboTax Verified Pro have?",
    children: (
      <p>
        Every tax preparer found on TurboTax Verified Pro is authorized to file with the IRS. Each
        tax pro has a profile page that shows their credentials and specialized tax expertise. We
        can help you find the best tax professional for your situation and preferences, whether
        you’re looking for someone with CPA or Enrolled Agent credentials, or someone with
        experience in a tax specialties like crypto transactions, rental properties, or business
        tax.
      </p>
    ),
  },

  {
    title: "How does Intuit verify each independent tax professional?",
    children: (
      <p>
        Your security is built into everything we do. Intuit confirms each tax preparer’s identity,
        tax preparer authorization, as well as any state licenses and credentials before they’re
        listed on TurboTax Verified Pro. TurboTax also screens for criminal or illegal
        activity, so that you can trust every Verified Pro with your sensitive information.
      </p>
    ),
  },

  {
    title: "How are fees/prices determined?",
    children: (
      <p>
        Your Verified Pro sets the price to file your return, based on the complexity of your tax
        return and the amount of tax forms required to complete your return. Your location and the
        time of year may also influence the price to complete your tax return. Your tax pro will set
        the price for filing after they learn more about you and before they prepare your return.
      </p>
    ),
  },

  {
    title: "Will a Verified Pro understand the complexities of my personal tax situation?",
    children: (
      <p>
        We use information about your tax situation to match you with a professional who has
        experience with taxes like yours. During the process, your Verified Pro will learn more
        about your taxes, so they can make sure your return is 100% accurate. Be sure to share all
        information as accurately as possible with your tax pro.
      </p>
    ),
  },

  {
    title: "When is my independent tax pro available?",
    children: (
      <p>
        Every Verified Pro has a profile page that shows their business hours and availability for
        an intro call. We recommend discussing your tax pro’s ongoing availability during your intro
        call.
      </p>
    ),
  },

  {
    title: "Can I meet my Intuit TurboTax Verified Pro in person?",
    children: (
      <>
        <p>
          Yes, you can meet with your tax preparer in person, if they are available. When you start
          TurboTax Verified Pro, we'll ask if you'd like to meet in person. If you choose "I want to
          meet in person," we will match you with a Verified Pro who is available to meet in person.
        </p>
        <p>
          Keep in mind, a Verified Pro is an independent tax preparer who sets their own work
          preferences. Meeting in person might not be available in all cases.
        </p>
      </>
    ),
  },

  {
    title: "How do I communicate with my Verified Pro?",
    children: (
      <>
        <p>
          After you match with a Verified Pro, book an intro call to discuss your taxes and what
          you're looking for in a tax preparer.
        </p>
        <p>
          You can then chat with your tax pro through phone, one-way video, or in-person, where
          available. Stay connected at a rate that suits you. Get year-round tax advice, keep your
          tax pro up to date on changes in your life and tax situation.
        </p>
      </>
    ),
  },

  {
    title: "What do I need to do to prepare?",
    children: (
      <p>
        Not much. We’ll ask you some questions about your tax situation and match you with a
        Verified Pro. After you engage your tax pro, they’ll tell you what docs they need to prepare
        your return. Sign into TurboTax to securely share your tax documents.
      </p>
    ),
  },

  {
    title: "How will my documents be securely transferred to my tax professional?",
    children: (
      <p>
        Our software allows you to securely upload your tax documents to your{" "}
        <Link to={"turboTaxAccount"}>TurboTax account</Link>, so they’re available to your tax pro.
        You can also snap photos of your documents to upload to your account. You may be able to
        import your docs directly from your employer or financial institutions. We use industry
        standard encryption technology to make sure your information is protected.
      </p>
    ),
  },

  {
    title: "How long will the process take?",
    children: (
      <p>
        Your independent Verified Pro will work to complete your tax return as quickly as possible.
        The exact time can vary, depending on your unique tax situation and your work agreement with
        your tax pro. While we've seen some returns processed in as little as 4 days, other returns
        may take longer.
      </p>
    ),
  },

  {
    title: "How do I know my return is accurate?",
    children: (
      <p>
        Your Verified Pro processes your return with TurboTax software for experts. Rest assured
        we’ll automatically check your tax return for accuracy. Every tax return filed by a Verified
        Pro is backed by <Link to={"turboTaxGuarantees"}>TurboTax guarantees</Link>.
      </p>
    ),
  },

  {
    title: "Is there any type of guarantee if I get audited?",
    children: (
      <>
        <p>
          Yes. Intuit offers free one-on-one audit guidance year-round from our experienced and
          knowledgeable tax staff. And while you’ll need to decide whether to separately engage
          audit representation before the IRS or state, we’ll let you know what to expect and how to
          prepare in the unlikely event you receive an audit letter from the IRS.
        </p>
        <p>
          If you’ve already received a letter from the IRS for a return you filed on the TurboTax
          platform, please review our{" "}
          <Link to={"auditSupportGuarantee"}>Audit Support Guarantee</Link> for instructions on how
          to receive free step–by–step audit guidance and the option to connect with your Intuit
          Verified Tax Pro to discuss any audit.
        </p>
      </>
    ),
  },
];

export default content;
