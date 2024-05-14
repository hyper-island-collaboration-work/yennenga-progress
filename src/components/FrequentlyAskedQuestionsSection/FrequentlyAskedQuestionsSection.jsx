import React from "react";
import DynamicListSection from "../DynamicListSection.jsx";
import questionAnswerList from "./QuestionsAndAnswers.js";

const getThreeQuestionsAndAnswers = (questionAnswerList) => {
  return questionAnswerList.slice(0, 3);
};

const threeQuestionsAndAnswers =
  getThreeQuestionsAndAnswers(questionAnswerList);

// define constants
const title = "Frequently Asked Questions";
const link_path = "/not-found";
const link_text = "All Questions";

const QuestionsAndAnswersSection = () => {
  return (
    <DynamicListSection
      title={title}
      content={threeQuestionsAndAnswers}
      renderItem={(faq) => (
        <li key={faq.id}>
          <h3 className="text-md mt-3 font-semibold text-umber">
            {faq.question}
          </h3>
          <p className="mb-7 mt-3 text-sm">{faq.answer}</p>
        </li>
      )}
      linkPath={link_path}
      linkText={link_text}
    />
  );
};

export default QuestionsAndAnswersSection;
