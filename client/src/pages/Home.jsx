import React from 'react'
import HeaderSection from '../components/HeaderSection'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testmonial from '../components/Testmonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <HeaderSection />
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testmonial/>
        <Newsletter />
    </>
  )
}

export default Home