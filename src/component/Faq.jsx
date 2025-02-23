import { useState } from "react";
import SharedTitle from "./Sharedtitle";

const faqs = [
  { question: "How long does delivery take?", answer: "Delivery usually takes 3-5 business days." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy for unused products." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-20 px-6 bg-gray-200">
    <SharedTitle className="" heading={"Frequently Asked Questions"} subheading={""}></SharedTitle>

      <div className="mt-8 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="text-lg font-semibold w-full text-left">
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
