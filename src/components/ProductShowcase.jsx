import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Neon Red Edition',
    tagline: 'Play Bold.',
    color: '#FF0055',
    gradient: 'from-red-500 to-pink-600',
    image: 'red'
  },
  {
    name: 'Electric Blue Edition',
    tagline: 'Play Classic.',
    color: '#00D4FF',
    gradient: 'from-blue-500 to-cyan-400',
    image: 'blue'
  },
  {
    name: 'Midnight Black Edition',
    tagline: 'Play Anywhere.',
    color: '#1F2937',
    gradient: 'from-gray-800 to-gray-900',
    image: 'black'
  },
  {
    name: 'Pearl White Edition',
    tagline: 'Play Pure.',
    color: '#F5F5F5',
    gradient: 'from-gray-100 to-white',
    image: 'white'
  }
]

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="showcase" className="relative py-20 lg:py-32 bg-pixel-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            CHOOSE YOUR <span className="text-pixel-coral">STYLE</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Four stunning color variants to match your personality
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Display */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
                    {/* Product Image */}
                    <div className="relative perspective-container">
                      <div className={`relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl p-8 border-4 border-white/10 rotate-3d shadow-3d-hover`}>
                        {/* Screen */}
                        <div className="w-full h-3/5 bg-gradient-to-br from-pixel-dark/80 to-pixel-dark/60 rounded-2xl mb-4 flex items-center justify-center border-2 border-white/20">
                          <div className="font-pixel text-white text-xs sm:text-sm">
                            PIXEL<span style={{ color: product.color === '#F5F5F5' ? '#FF0055' : product.color }}>ONE</span>
                          </div>
                        </div>
                        
                        {/* D-Pad */}
                        <div className="absolute bottom-12 left-12 w-16 h-16">
                          <div className="relative w-full h-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-16 bg-white/20 rounded"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-5 bg-white/20 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="absolute bottom-12 right-12 grid grid-cols-2 gap-2">
                          <div className="w-6 h-6 rounded-full bg-white/30 shadow-lg"></div>
                          <div className="w-6 h-6 rounded-full bg-white/30 shadow-lg"></div>
                          <div className="w-6 h-6 rounded-full bg-white/30 shadow-lg"></div>
                          <div className="w-6 h-6 rounded-full bg-white/30 shadow-lg"></div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-3xl blur-3xl -z-10" style={{
                          background: `radial-gradient(circle, ${product.color}40 0%, transparent 70%)`
                        }}></div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center lg:text-left text-white space-y-6">
                      <div>
                        <h3 className="font-pixel text-2xl lg:text-3xl mb-2" style={{ color: product.color === '#F5F5F5' ? '#1F2937' : product.color }}>
                          {product.name}
                        </h3>
                        <p className="text-3xl lg:text-4xl font-bold text-white/90">
                          {product.tagline}
                        </p>
                      </div>
                      
                      <div className="space-y-3 text-white/70">
                        <p className="flex items-center justify-center lg:justify-start gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></span>
                          Premium matte finish
                        </p>
                        <p className="flex items-center justify-center lg:justify-start gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></span>
                          Ergonomic grip design
                        </p>
                        <p className="flex items-center justify-center lg:justify-start gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></span>
                          Limited edition colorway
                        </p>
                      </div>

                      <button className="px-8 py-4 bg-white text-pixel-dark font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:bg-pixel-coral hover:text-white">
                        Select This Color
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-neon-red rounded-full'
                    : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
