import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Buy from './components/Buy'
import Footer from './components/Footer'
import PixelParticles from './components/PixelParticles'
import ShopNow from './components/ShopNow'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showShopPage = () => {
    setCurrentPage('shop')
    window.scrollTo(0, 0)
  }

  const showHomePage = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  if (currentPage === 'shop') {
    return (
      <div className="relative min-h-screen">
        <PixelParticles />
        
        {/* Minimal Header with Back Button */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-pixel-dark/95 backdrop-blur-sm shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={showHomePage}
                className="flex items-center gap-2 text-white hover:text-pixel-coral transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-semibold">Back</span>
              </button>
              <span className="font-pixel text-pixel-coral text-xs sm:text-sm">PIXEL<span className="text-pixel-teal">ONE</span></span>
            </div>
          </div>
        </div>
        
        <ShopNow onBack={showHomePage} />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <PixelParticles />
      
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pixel-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-pixel text-pixel-coral text-xs sm:text-sm">PIXEL<span className="text-pixel-teal">ONE</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-white hover:text-pixel-coral transition-colors text-sm">Home</a>
              <a href="#features" className="text-white hover:text-pixel-coral transition-colors text-sm">Features</a>
              <a href="#showcase" className="text-white hover:text-pixel-teal transition-colors text-sm">Products</a>
              <a href="#about" className="text-white hover:text-pixel-teal transition-colors text-sm">About</a>
              <button onClick={showShopPage} className="text-white hover:text-pixel-coral transition-colors text-sm">Order Now</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero onShopNow={showShopPage} />
        <Features />
        <ProductShowcase />
        <About />
        <Testimonials />
        <Buy onOrderNow={showShopPage} />
      </main>

      <Footer />
    </div>
  )
}

export default App
