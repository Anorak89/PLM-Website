import React, { useState } from 'react';
import './FAQ.css';

/**
 * FAQ Data Configuration
 * ----------------------
 * To add or modify FAQ items, simply edit this array.
 * Each item needs a 'question' and 'answer' field.
 */
const faqData = [
  {
    question: "How do I sign up my athlete?",
    answer: "You can sign up your athlete by clicking the 'Athlete Sign Up' button on our homepage, which will take you to our online registration form. Alternatively, you can contact us at projectlovematch@gmail.com for assistance with registration."
  },
  {
    question: "Who can participate in the program?",
    answer: "Project Lovematch welcomes athletes age 13 and older with Intellectual and Developmental Disabilities, including Down Syndrome, Autism, and other developmental conditions."
  },
  {
    question: "Does the program cost any money for athletes?",
    answer: "Yes, the program does have a nominal fee per athlete to help cover the costs of court rental, equipment, and other expenses."
  },
  {
    question: "When does the program run?",
    answer: "The program runs for 10 Sundays from January through March, from 4:00 PM to 5:00 PM. Sessions are held at the Franklin Lakes Racquet Club."
  },
  {
    question: "What is the athlete-to-volunteer ratio?",
    answer: "We aspire to provide a 1:1 athlete-to-volunteer ratio as resources permit. This allows for personalized instruction, meaningful social interactions, and dedicated attention for each athlete."
  },
  {
    question: "How can I volunteer?",
    answer: "High school students and community members interested in volunteering can sign up through the 'Volunteer Sign Up' button on our homepage. Volunteers help provide tennis instruction and help keep athletes socially engaged."
  },
  {
    question: "How can I support the program?",
    answer: "You can support Project Lovematch by making a tax-deductible donation. We are a 501(c)(3) organization. Donations can be sent to: Project Lovematch, PO Box 64, Allendale, NJ 07401. Sponsorship opportunities are also available upon request."
  },
  {
    question: "Where is the program held?",
    answer: "The program is held at the Franklin Lakes Racquet Club in Franklin Lakes, New Jersey. The address is 803 Susquehanna Ave, Franklin Lakes, NJ 07417."
  }
];

/**
 * FAQ Item Component
 * Renders a single collapsible FAQ item
 */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button 
        className="faq-question"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

/**
 * FAQ Component
 * Renders the complete FAQ section with expandable items
 */
const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    setOpenIndices(prevIndices => 
      prevIndices.includes(index)
        ? prevIndices.filter(i => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndices.includes(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
