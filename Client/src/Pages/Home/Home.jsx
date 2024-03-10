import React from "react";
import Banner from "../../Components/Home/Banner";
import AppDownload from "../../Components/Home/AppDownload";
import NewsLatter from "../../Components/Home/NewsLatter";
import MensCategories from "../../Components/Home/MensCategories";
import WomenCategories from "../../Components/Home/WomenCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <MensCategories />
      <WomenCategories />
      <AppDownload />
      <NewsLatter />
    </div>
  );
};

export default Home;
