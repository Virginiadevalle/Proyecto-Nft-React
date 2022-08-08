import React from 'react'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'
import ItemDetailsMian from '../components/Itemdetails/ItemDetailsMian'

function ItemDetails() {
  return (
    <>
<HeaderGeneral
        title="Item Details"
        before="Home"
        after="Explore"
        after2="Item Details"
      />
      <main>
        <ItemDetailsMian />
      </main>
    <Footer />

    </>
  )
}

export default ItemDetails