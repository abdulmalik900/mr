"use client";
import React, { useState } from 'react';

const Faq = () => {
  const [answers, setAnswers] = useState([false, false, false, false]);

  const toggleAnswer = (index) => {
    const newAnswers = answers.map((answer, i) => (i === index ? !answer : false));
    setAnswers(newAnswers);
  };

  return (
    <section className="py-2 rounded-xl bg-gray-200 mt-6 sm:py-16 lg:py-7">
      <div className="px-4 pb-20 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className='flex  flex-col pt-3 text-center font-kamerik font-bold text-3xl text-black capitalize items-center w-721 h-104'>
        <div className='flex gap-2'>
            <span > Frequently Asked</span>
            <span className='text-[#0073CE]'>Questions</span>
            </div>
            </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-10">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-100 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index - 1)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {`Question ${index}`}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform ${answers[index - 1] ? 'rotate-0' : 'rotate-180'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                style={{ display: answers[index - 1] ? 'block' : 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{`Answer ${index}`}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Faq;
