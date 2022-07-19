import React from 'react'
import ActivityMain from '../components/activity/ActivityMain'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'

function Activity() {
  return (
    <div>
        <HeaderGeneral title='Activity' before='Home' after='Pages' after2='Activity' />
        <main>
            <ActivityMain />
        </main>
        <Footer />
    </div>
  )
}

export default Activity