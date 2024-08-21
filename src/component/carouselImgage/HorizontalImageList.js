import React, { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const HorizontalImageList = () => {
  const imageListRef = useRef(null);

  const scrollLeft = () => {
    imageListRef.current.scrollLeft -= imageListRef.current.offsetWidth;
  };

  const scrollRight = () => {
    // imageListRef.current.scrollLeft += imageListRef.current.offsetWidth;

    const { scrollLeft, scrollWidth, offsetWidth } = imageListRef.current;

    if (scrollLeft < scrollWidth - offsetWidth) {
      // Scroll to the next item
      imageListRef.current.scrollLeft += offsetWidth;
    } else {
      // Reached the end, scroll back to the beginning
      imageListRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollRight, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/456381264_1267899734197849_6694074132672824249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nLtbZcr7vekQ7kNvgFa2J_M&_nc_ht=scontent.fhan14-1.fna&oh=00_AYAVPt2dDmEYGyFX_sK0jraqQ05HDKbkI3Dosr7DrBNsXg&oe=66CB28EF",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/456236177_1267899720864517_3748844667383974186_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ux3bUPiGB8AQ7kNvgHcflYt&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAsFeGa3UpPUATfO7ohfllcNk6sNeEenQpbMS3wsmYD0g&oe=66CB25CB",
    "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/456383488_1267899727531183_5485500932312974638_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u0xYtQ1BdisQ7kNvgEREQ8J&_nc_ht=scontent.fhan14-4.fna&oh=00_AYDjQke9qMNS6lr0do_nGyn3HuZGv6VtwX-xV8tlBAGEHA&oe=66CB04BC",
    "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/456143623_1267899784197844_1959931373882570628_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FQWIQuSObtQQ7kNvgETORNU&_nc_ht=scontent.fhan14-1.fna&oh=00_AYCo1dJq_3daW0vorJTSei2sAYrucRxjQ46sf1O1gjfEFg&oe=66CB11D0",
    "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/456435870_1267899800864509_6779530018586408128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uzpVHkZ5hwEQ7kNvgFCZ5lL&_nc_ht=scontent.fhan14-2.fna&oh=00_AYB0BbbsFp_TbzHGKCcbQsM_DbwvHfHiNZAXDagW15lvtw&oe=66CAF7A2",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/456304865_1267899804197842_1983711319743210447_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FTdxF8CmrooQ7kNvgFbhunx&_nc_ht=scontent.fhan14-5.fna&oh=00_AYBtglTgiMbWD9Sk4ckIlpaHUel2VdPN8HVIujM4JmQKlw&oe=66CB2A4D",
    // Add more image URLs as needed
  ];

  return (
    <div className="mt-5 flex items-center justify-center w-full h-full">
      <button
        onClick={scrollLeft}
        className="left-0 p-3 mr-3 transform -translate-y-1/2 bg-gray-500 rounded-full top-1/2"
      >
        <FaArrowLeft className="text-white" />
      </button>
      <div
        ref={imageListRef}
        className="mt-[10px] flex justify-center w-4/5 items-center space-x-4 overflow-x-auto"
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="flex-shrink-0 md:w-1/3 w-1/1 h-[450px]">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-full bg-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="right-0 p-3 ml-3 transform -translate-y-1/2 bg-gray-500 rounded-full top-1/2"
      >
        <FaArrowRight className="text-white" />
      </button>
    </div>
  );
};

export default HorizontalImageList;
