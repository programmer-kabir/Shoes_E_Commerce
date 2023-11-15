import React from 'react'
import Banner from '../../Components/Home/Banner'
import NewsLatter from '../../Components/Home/NewsLatter'
import MensCategories from '../../Components/Home/MensCategories'
import WomenCategories from '../../Components/Home/WomenCategories'
import DiscountShoes from '../../Components/Home/DiscountShoes'
import KidsCollection from '../../Components/Home/KidsCollection'
import AppDownload from '../../Components/Home/AppDownload'

const Home = () => {
  return (
    <div className=''>
        <Banner />
        <MensCategories />
        <WomenCategories />
        <DiscountShoes />
        <KidsCollection />
        <AppDownload />
        <NewsLatter />
    </div>
  )
}

export default Home