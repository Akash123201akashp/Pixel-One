import React from 'react'
import { Play, ShoppingCart } from 'lucide-react'

const Hero = ({ onShopNow }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pixel-grid-bg overflow-hidden pt-16">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pixel-bg/50 to-pixel-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight perspective-container">
                <span className="text-pixel-coral glow-text text-3d layer-front inline-block">COMPACT</span>
                <br />
                <span className="text-pixel-dark layer-mid inline-block">YET</span>
                <br />
                <span className="text-pixel-teal glow-text-blue text-3d layer-front inline-block">POWERFUL</span>
              </h1>
              <p className="text-lg sm:text-xl text-pixel-dark/80 font-body max-w-xl mx-auto lg:mx-0">
                Play your favorite retro games anywhere — nostalgia in your pocket.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onShopNow}
                className="group relative px-8 py-4 bg-pixel-coral text-white font-semibold rounded-lg overflow-hidden lift-3d depth-shadow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Order Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pixel-coral to-pixel-salmon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <a
                href="#showcase"
                className="group relative px-8 py-4 bg-transparent border-2 border-pixel-teal text-pixel-teal font-semibold rounded-lg overflow-hidden lift-3d hover:text-white glass-3d"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play size={20} />
                  View Products
                </span>
                <div className="absolute inset-0 bg-pixel-teal opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="font-pixel text-2xl text-pixel-coral">6H</div>
                <div className="text-sm text-pixel-dark/60 mt-1">Battery</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-2xl text-pixel-teal">HD+</div>
                <div className="text-sm text-pixel-dark/60 mt-1">Display</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-2xl text-pixel-coral">10K+</div>
                <div className="text-sm text-pixel-dark/60 mt-1">Games</div>
              </div>
            </div>
          </div>

          {/* Right Content - Console Image */}
          <div className="relative perspective-container">
            <div className="relative float-3d">
              {/* Placeholder for console image - using a stylized box */}
              <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-pixel-dark to-gray-800 rounded-3xl shadow-2xl p-8 border-4 border-pixel-coral/20 tilt-3d shadow-3d-hover">
                {/* Screen */}
                <div className="w-full h-3/5 bg-gradient-to-br from-pixel-teal/20 to-pixel-coral/20 rounded-2xl mb-4 flex items-center justify-center border-2 border-pixel-teal/30">
                  <div className="font-pixel text-pixel-teal text-xs sm:text-sm animate-pixel-pulse">
                    PIXEL<span className="text-pixel-coral">ONE</span>
                  </div>
                </div>
                
                {/* D-Pad */}
                <div className="absolute bottom-12 left-12 w-20 h-20">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-20 bg-pixel-dark rounded"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 bg-pixel-dark rounded"></div>
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="absolute bottom-12 right-12 grid grid-cols-2 gap-2">
                  <div className="w-8 h-8 rounded-full bg-pixel-coral shadow-lg"></div>
                  <div className="w-8 h-8 rounded-full bg-pixel-teal shadow-lg"></div>
                  <div className="w-8 h-8 rounded-full bg-pixel-teal shadow-lg"></div>
                  <div className="w-8 h-8 rounded-full bg-pixel-coral shadow-lg"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pixel-coral/20 to-pixel-teal/20 blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-pixel-coral text-white px-4 py-2 rounded-full font-pixel text-xs shadow-lg animate-pulse">
              NEW
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pixel-teal text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Latest Arrival
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixel-dark/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-pixel-coral rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
