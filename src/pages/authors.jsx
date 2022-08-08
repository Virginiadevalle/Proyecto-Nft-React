import React from 'react'
import AuthorsMain from '../components/authors/AuthorsMain'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'
import TopSellers from '../components/home/TopSellers'

function Authors() {
  return (
    <div>
      <HeaderGeneral
        title="Authors"
        before="Home"
        after="Pages"
        after2="Authors"
      />
      <main>
        <AuthorsMain/>
        <TopSellers/>
      </main>
      <Footer />
    </div>
  )
}

export default Authors