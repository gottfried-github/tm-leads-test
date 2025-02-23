'use client'

import { useState } from 'react'
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import HeroSection from './components/HeroSection/HeroSection'
import CompleteDealsSection from './components/CompleteDealsSection/CompleteDealsSection'
import AboutSection from './components/AboutSection/AboutSection'
import FaqSection from './components/FaqSection/FaqSection'
import TarifsSection from './components/TarifsSection/TarifsSection'
import styles from './page.module.css'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuClick = () => {
    console.log('Home, handleMenuClick')
    setIsMobileMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <main>
        <HeroSection />
        <CompleteDealsSection />
        <AboutSection />
        <TarifsSection />
        <FaqSection />
      </main>
      {isMobileMenuOpen ? <MobileMenu onClose={handleMenuClose} /> : null}
    </>
  )
}
