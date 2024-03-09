import React from "react";
import Banner from "../../Components/Home/Banner";
import AppDownload from "../../Components/Home/AppDownload";
import NewsLatter from "../../Components/Home/NewsLatter";
import MensCategories from "../../Components/Home/MensCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <MensCategories />
      <AppDownload />
      <NewsLatter />
    </div>
  );
};

export default Home;
