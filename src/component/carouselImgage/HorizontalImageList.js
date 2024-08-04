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
    "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/453791262_1256634295324393_3884361889541347712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF2YUoNurrdh1wr6QFmNtINumzkGczgj5m6bOQZzOCPmQHTWMCXoMBlSSI5a0Rj0mzIPBYbAYxC5rghDHh4gER5&_nc_ohc=ySZt75JqMFEQ7kNvgGUQd2Q&_nc_ht=scontent.fhan14-4.fna&oh=00_AYBxGm9qnJwbv_R3t3R8F6_m29gm0eKqaBVdCSYrXe7XFw&oe=66B4ADD0",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/453970297_1256634285324394_7778868564681261038_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTAKtdgPvoq6n3QKyyfDwrq5knWwc_cB6rmSdbBz9wHtf4gX16MeR-SM6wf6YWWjmaXqGAhJcs9S13sjpShCUf&_nc_ohc=I7j1FTjzakkQ7kNvgElWlUf&_nc_ht=scontent.fhan14-5.fna&oh=00_AYCRWQMR8AAdaqRqpNIxPa8bTxZ-cOeLVWiJEK6xeG87bw&oe=66B4CB40",
    "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/453993352_1256634281991061_1669320815747124040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFOmYaiQ7p6nR2Wd5EzguBJSK7cD_taBNBIrtwP-1oE0A1c64wCwRy8hV3by5Q1xaS7qYgckTbMDcx81Yq5nsTh&_nc_ohc=5CS_k5k6Qe8Q7kNvgHfJJ-u&_nc_ht=scontent.fhan14-1.fna&oh=00_AYBMNzOyf-0hxMhhCFHYEbFwTHqNB2mdulaE7YJkEId7vA&oe=66B4DB65",
    "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/454235655_1256634348657721_8261532416730601729_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIf48wXQJUdQRVKUlY1mqiafKLO9NncqNp8os702dyo-kIn1ZZon66BFxojoJ45c4GuoCOPm-h4MCZ3_mtI9ph&_nc_ohc=j4E2JBaLdD8Q7kNvgFhYoJ5&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBQNZsVH5IYLcUV7HI8wTjA8OgTkTie6MrmGRXvDH8ZNg&oe=66B4B2B3",
    "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/453903731_1256634358657720_4456498690917393877_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhfvvjKzfEdxZggxkshYInxIZauJhxMGLEhlq4mHEwYolfGzJzReAyR1B_bX65BrVjMBQNPk73yYjiZyhDVDJ5&_nc_ohc=4wVD3H81KtAQ7kNvgEAvlku&_nc_ht=scontent.fhan14-4.fna&oh=00_AYD8aNj6xddNK4UGo3P2P81ymA1TGc12koTJ3aD5JCxfpg&oe=66B4B03D",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/454000607_1256634365324386_7629056955328455232_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFq3q_QeKSf_dt2586neBe5MXpsSyj4FVYxemxLKPgVViDLhm8WI_zpxHTSQ8Azazc8D-HuYdF6bLcTPnWOdpOw&_nc_ohc=N7nA3pSUhTEQ7kNvgF2EDs2&_nc_ht=scontent.fhan14-5.fna&oh=00_AYD0MKhLzlUJX1OqIeTvuUr8Xw64hxWl59dXKPZ2PGtCkw&oe=66B4A83A",

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
