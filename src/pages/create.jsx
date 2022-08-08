import React from 'react'
import CreateMain from '../components/create/CreateMain'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'

function Create() {
  return (
    <>
 <HeaderGeneral
        title="Create"
        before="Home"
        after="Pages"
        after2="Create"
      />
      <main>
        <CreateMain  />
      </main>
    <Footer />

    </>
  )
}

export default Create