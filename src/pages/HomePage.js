import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";

const HomePage = () => {
  return (
    <div className="flex flex-col  box-border h-[1500px] gap-0">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
