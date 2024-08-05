import React, { useState } from "react";
import ContentAdmin from "./ContentAdmin";

const Test = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contentList = [
    "Content 1",
    "Content 2",
    "Content 3",
    // Add more content as needed
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar with buttons */}
        {contentList.map((content, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => handleButtonClick(index)}
          >
            Button {index + 1}
          </button>
        ))}
      </div>

      <div className="w-3/4 p-4">
        {/* Main content area */}
        {contentList.map((content, index) => (
          <div key={index} className={activeIndex === index ? "" : "hidden"}>
            <ContentAdmin text={content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
