import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the admission process for CSE programs abroad?",
    answer:
      "The admission process typically includes standardized tests (SAT, GRE), English proficiency exams (IELTS, TOEFL), transcripts, SOPs, and recommendation letters.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes, many universities offer merit-based and need-based scholarships for international students in CSE programs.",
  },
  {
    question:
      "What are the career prospects after completing a CSE degree abroad?",
    answer:
      "Graduates can work in various roles, including Software Engineer, Data Scientist, AI Specialist, and Cybersecurity Analyst, with high-paying job opportunities worldwide.",
  },
  {
    question: "Is prior coding experience necessary for admission?",
    answer:
      "While prior experience helps, many universities accept students from diverse backgrounds and provide foundational programming courses.",
  },
  {
    question: "What are the best countries for studying CSE?",
    answer:
      "Top countries include the USA, Canada, Germany, the UK, and Australia, known for their excellent education and job opportunities in tech fields.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black relative">
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 z-10 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>

      {/* FAQ Section */}
      <div className="max-w-3xl w-full space-y-4 z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-all duration-300 bg-purple-900/50 backdrop-blur-md shadow-lg border border-white/10"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-white bg-purple-800/50 hover:bg-purple-700/50 transition"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-pink-400 transition-transform transform rotate-180" />
              ) : (
                <ChevronDown className="w-5 h-5 text-pink-400 transition-transform" />
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 py-3 px-6"
                  : "grid-rows-[0fr] opacity-0 px-6"
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
