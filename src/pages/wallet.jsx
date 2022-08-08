import React from 'react'
import Footer from '../components/Footer'
import HeaderGeneral from '../components/HeaderGeneral'
import WalletMain from '../components/wallet/WalletMain'

function Wallet() {
  return (
    <>
 <HeaderGeneral
        title="Wallet"
        before="Home"
        after="Pages"
        after2="Wallet"
      />
      <main>
        <WalletMain  />
      </main>
    <Footer />

    </>
  )
}

export default Wallet