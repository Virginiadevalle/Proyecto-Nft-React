import React from 'react'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'
import LogInMain from '../components/login/LogInMain'

function LogIn() {
  return (
    <>
    <HeaderGeneral
        title="Login"
        before="Home"
        after="Explore"
        after2=""
      />
      <main>
        <LogInMain  />
      </main>
    <Footer />
    </>
  )
}

export default LogIn