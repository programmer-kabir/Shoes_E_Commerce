import React from "react";
import Banner from "../../Components/Home/Banner";
import AppDownload from "../../Components/Home/AppDownload";
import NewsLatter from "../../Components/Home/NewsLatter";
import MensCategories from "../../Components/Home/MensCategories";
import WomenCategories from "../../Components/Home/WomenCategories";
import OfferShoes from "../../Components/Home/OfferShoes";
import DiscountShoes from "../../Components/Home/DiscountShoes";
import KidsCollection from "../../Components/Home/KidsCollection";

const Home = () => {
  return (
    <div>
      <Banner />
      <MensCategories />
      <WomenCategories />
      <DiscountShoes />
      <OfferShoes />
      <KidsCollection />
      <AppDownload />
      <NewsLatter />
    </div>
  );
};

export default Home;
