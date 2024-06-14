import React from "react";
import "./pages.css";

const Policy = () => {
  const data = [
    {
      title: "Information identifying a person",
      content:
        "In addition to when users visit our website and complete out forms, we may also ask them for personal identification information when they use certain other features, services, or resources we make available on our site. Visitors can browse our website anonymously. Only if users willingly provide us with personal identifiable information, will we be able to gather it from them. Users always have the option to withhold personally identifiable information, but doing so can restrict them from taking part in some site-related activities.",
    },
    {
      title: "User Information identifying Non Personal",
      content:
        "Every time a User interacts with our site, we may gather non-personal identification data about them. Non-personal identifying information may include the name of the user's browser, the kind of computer they are using, and technical information about their means of access to our Site, including the browser type, operating system, and the Internet service providers used. Every time a User interacts with our site, we may gather non-personal identification data about them. Non-personal identifying information may include the name of the user's browser, the kind of computer they are using, and technical information about their means of access to our Site, including the browser type, operating system, and the Internet service providers used.",
    },
    {
      title: "Browsers Cookies",
      content:
        "Every time a User interacts with our site, we may gather non-personal identification data about them. Non-personal identifying information may include the name of the user's browser, the kind of computer they are using, and technical information about their means of access to our Site, including the browser type, operating system, and the Internet service providers used. Every time a User interacts with our site, we may gather non-personal identification data about them. Non-personal identifying information may include the name of the user's browser, the kind of computer they are using, and technical information about their means of access to our Site, including the browser type, operating system, and the Internet service providers used.",
    },
    {
      title:
        "Instapix.App does not collect or store your personal data & information, timely",
      content: "",
    },
    {
      title: "Advertising & Promotion",
      content:
        "Advertising partners who work with us to deliver ads to users may also use cookies to do so. Each time an online advertising is sent to you, these cookies enable the ad server to identify your computer and gather anonymous usage data about you and other users of your computer. Ad networks can use this information, among other things, to offer tailored adverts that they think you'll find most interesting. The use of cookies by any advertising is not covered by this privacy statement.",
    },
    {
      title: "Amendments to this privacy statement",
      content:
        "This privacy statement may be updated whenever Instapix.App sees fit. When we do, we'll update the updated date at the bottom of this page and put a notice on the home page of our website. To keep up with changes to this policy, we encourage Users to check this page frequently. By doing so, they can learn how we're assisting in the protection of their personal data. You understand and agree that it is your duty to frequently examine this privacy statement and be aware of updates.",
    },
    {
      title: "Your consent to these clauses",
      content:
        "You acknowledge that you agree to this policy by using this website. Please refrain from using our Site if you do not agree to this policy. Your continued use of the Site after any modifications to this policy have been posted shall constitute your acceptance of such modifications.",
    },
  ];
  return (
    <div className="policy page-section">
      <span className="page-title">Privacy Policy</span>
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

export default Policy;
