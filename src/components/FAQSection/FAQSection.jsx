import React from "react";
import DynamicListSection from "../DynamicListSection";
import FAQs from "./FAQs.js";

const GetThreeFAQs = (faqs) => {
  return faqs.slice(0, 3);
};

const showThreeFAQs = GetThreeFAQs(FAQs);

const FAQSection = () => {
  return (
    <DynamicListSection
      title="FAQ"
      content={showThreeFAQs}
      renderItem={(faq) => (
        <li key={faq.id}>
          <h3 className="text-md mt-3 font-semibold text-umber">
            {faq.question}
          </h3>
          <p className="mb-7 mt-3 text-sm">{faq.answer}</p>
        </li>
      )}
      linkPath="/not-found"
      linkText="All FAQs"
    />
  );
};

export default FAQSection;
