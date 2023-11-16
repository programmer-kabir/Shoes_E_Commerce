import React from 'react'
import NewsLatter from '../../Components/Home/NewsLatter'
import MensCategories from '../../Components/Home/MensCategories'
import WomenCategories from '../../Components/Home/WomenCategories'
import DiscountShoes from '../../Components/Home/DiscountShoes'
import KidsCollection from '../../Components/Home/KidsCollection'
import AppDownload from '../../Components/Home/AppDownload'
import OfferShoes from '../../Components/Home/OfferShoes'
import Banner from '../../Components/Home/Banner/Banner'

const Home = () => {
  return (
    <div className=''>
        <Banner />
        <MensCategories />
        <WomenCategories />
        <DiscountShoes />
        <OfferShoes />
        <KidsCollection />
        <AppDownload />
        <NewsLatter />
    </div>
  )
}

export default Home