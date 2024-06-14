import React from "react";

const TermsCondition = () => {
  const data = [
    {
      title: "Instapix™ - Terms of Service",
      content:
        "Before using our application or website, please carefully read our terms of service (also known as the ToS). To ensure the utmost happiness for our devoted users, our ToS may occasionally alter to reflect changes to our application and website. To guarantee you have read the current version with changes, please routinely check the update time at the top of the ToS.",
    },
    {
      title: "Use of our Services (User)",
      content:
        "The Instapix website (Instapix Web), which includes Instapix.app, is governed by our terms of service (ToS). Users of the Instapix App and Web (Users) are those who access the Instapix App and Web and/or use the products and services offered there (Instapix Products and Services). Our Terms of Service (ToS) set forth the terms and conditions under which you, as either an individual or an entity (You or User) or a group of individuals or entities (You or Users) may use Instapix products and services. You certify that you have carefully read, comprehended, and accepted our ToS by accessing or using Instapix Products and Services, and as a User (Users), you agree to abide by the ToS. Subject to the terms and conditions outlined in this document, Instapix develops and makes available all other elements and products and services offered through the Instapix App and Web (Content or Materials) for your use for free and personal use. As a User (Users) of our Content and Materials, you agree to abide by the ToS by accessing and using the Instapix App and Web and by agreeing to be bound by and accept our ToS and all terms and conditions contained and/or referenced above.",
    },
    {
      title: "User's Obligations",
      content:
        "You acknowledge and agree that you may only use the Instapix App, Web, Products, and Services in accordance with our Terms of Service and any and all applicable laws, rules, and generally accepted standards or guidelines in the relevant areas. You can download films and photographs that you have uploaded to your own account using our facilities. If you use our tools to violate the privacy or material of others, we have the right to refuse to provide our service. You specifically agree and guarantee that by using the Instapix app and website, as well as the company's products and services, you won't be breaking any laws, rules, or ordinances in either your home country, state, or locality, or in the nation, state, or locality where Instapix is based or conducts business.",
    },
    {
      title:
        "Instapix is not liable.If you or a third party acting on your behalf violate any laws, rules, or regulations,",
      content: "",
    },
    {
      title: "Trademark Issue",
      content:
        "Instapix abides with trademark laws and regulations and respects users' rights to their trademarks. The Instapix™ trademark should only be used in connection with our services, the Instapix app, and the web. It should be understood as a single, cohesive sentence that only refers to Instapix. Please keep in mind to abide by our policy when using, referencing, or referring to our Services, Instapix App and Web, Instapix Content and Materials: Use Instapix™ in its exact word form, without any spaces, divisions, or other variations that might separate it into its component parts. Never mistake our Instapix TM trademark for that of any other person(s), entity(ies), application(s), website(s), goods, or services of any other person(s), entity(ies), or application(s) that do not belong to Instapix. We reserve our rights to our trademark Instapix™ and all rights thereto against any unauthorised use, false representation, or infringement of any kind. We appreciate you informing us of any suspected abuse, misrepresentation, infringement, or non-compliance so that we can handle it appropriately.",
    },
    {
      title: "License Use ",
      content:
        "Users are accountable for the content they use on the Instapix app and website (including any links they paste). Instapix supports Users in downloading data/content they paste on the Instapix app and website for their own authorised purposes. We only show content that users have uploaded 'as is' on service or social network providers' websites, pages, or networks. Users are in charge of confirming their legal eligibility under applicable laws and the protection of their own intellectual property rights in regard to posted content. Users may only utilise footage that has been obtained from the Instapix app or website for free, non-commercial reasons. Instapix cannot and is not required to determine whether each piece of content or information is lawful, but it will prohibit users from using the Instapix app, website, and other products and services if it finds any violations. Users' content is not backed up or archived by Instapix for any reason. We appreciate you informing us of any suspected abuse, misrepresentation, unauthorised use, infringement, or non-compliance so that we can handle it appropriately. ",
    },
    {
      title: "Privacy",
      content:
        "We operate the Instapix app and website in accordance with our established standards to guarantee that the privacy of personal data, including that of our users, is safeguarded and preserved without disclosure to any third parties for any reason.",
    },
    {
      title: "Disclaimer",
      content:
        "The materials and content on the Instapix app and website are offered 'as is'. With regard to implicit warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other rights, for example, Instapix offers no warranties, either explicit or implied, and hereby disclaims and cancels any other warranties. In addition, Instapix disclaims all warranties and representations regarding the accuracy, reliability, or expected outcomes of the use of the content on its website or any other website that may be connected to it. There may be technical, typographical, or photographic errors in the content and materials that appear on the Instapix app and website. The accuracy, completeness, and timeliness of the Content and Materials are not guaranteed by Instapix. The materials and content on Instapix's website are subject to change at any time without prior notice. Any websites that are connected to Instapix's website and the content they contain are not under the control of the company. Any link does not imply sponsorship by Instapix of the site just because it is included. Users do so at their own risk while visiting any such linked website.",
    },
    {
      title: "Site Terms of Use Changes",
      content:
        "Instapix reserves the right to modify these Terms of Service at any time, with or without prior notice, by posting the updated terms on the website's home page, notifying you when or after you log in to your User Account (as defined below), or sending an email to the address you provided when creating your User Account. On top of the terms, we always include information on the most recent revision of the TOS. Therefore, you are in charge of reviewing the most recent terms each time you visit or use our website or service and making sure you are completely aware of them before doing so.Your obligation to abide by these Terms of Service as revised from time to time will not be absolved if you fail to supply or keep up-to-date contact information in your User Account. Using someone else's identify or contact information is prohibited and is regarded as fraud. Anytime we discover your fraud, we will terminate your account.",
    },
  ];
  return (
    <div className="termsConditions page-section">
      <span className="page-title">Terms & Conditions</span>
      <div className="page-content">
        {data.map((item, key) => {
          return (
            <div className="theContent" key={key}>
              <h3>{item.title}</h3>
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsCondition;
