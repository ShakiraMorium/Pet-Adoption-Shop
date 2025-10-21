import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the pet adoption process work?",
    answer:
      "After finding a pet you love, click on the “Adopt Now” button and fill out the adoption form. Once you submit it, our team will contact you for verification and arrange a meet-and-greet.",
  },
  {
    question: "Is there any adoption fee?",
    answer:
      "Yes, a small adoption fee helps us cover vaccinations, food, and medical care for our rescued pets.",
  },
  {
    question: "Are all pets vaccinated?",
    answer:
      "Yes. Every pet listed is fully vaccinated and checked by licensed vets before being made available for adoption.",
  },
  {
    question: "Can I meet the pet before adoption?",
    answer:
      "Of course! You can schedule a meeting through our website and visit the shelter to meet your future friend.",
  },
  {
    question: "Can I adopt more than one pet?",
    answer:
      "Yes! As long as you can provide love and care for each, multiple adoptions are welcome.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🐾 Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left"
            >
              <span className="text-lg font-semibold text-gray-700">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
