import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/home/Header'
import CreateSellNft from '../components/home/CreateSellNft'
import LiveAuctions from '../components/home/LiveAuctions'
import PopularCollections from '../components/home/PopularCollections'
import TopSellers from '../components/home/TopSellers'
import Explorer from '../components/home/Explorer'

function home() {
  return (
    <>
    <Header/>
    <main>
      <LiveAuctions/>
      <TopSellers/> 
      <Explorer />
      <PopularCollections />
      <CreateSellNft />
    </main>
    <Footer />
        
    </>
  )
}

export default home