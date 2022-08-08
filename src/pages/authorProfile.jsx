import React from 'react'
import AuthorProfileMain from '../components/authorProfile/AuthorProfileMain'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'

function AuthorProfile() {
  return (
    <>
<HeaderGeneral
        title="Author Profile"
        before="Home"
        after="Pages"
        after2="Author"
      />
      <main>
        <AuthorProfileMain/>
      </main>
    <Footer />

    </>
  )
}

export default AuthorProfile