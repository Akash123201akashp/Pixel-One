import React from 'react'
import { Heart, Zap, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-pixel-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1 perspective-container">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-3d layered-card">
              {/* Placeholder image - person holding console */}
              <div className="aspect-[4/5] bg-gradient-to-br from-pixel-dark via-gray-700 to-pixel-dark flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pixel-coral to-pixel-teal rounded-2xl flex items-center justify-center isometric-3d">
                    <div className="font-pixel text-white text-sm">
                      PIXEL<br/>ONE
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Gaming on the go
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-4 border-pixel-coral rounded-lg animate-pulse layer-front"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-pixel-teal rounded-lg animate-pulse layer-mid" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-pixel-coral/20 lift-3d depth-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pixel-coral to-pixel-salmon rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-2xl text-pixel-dark">50K+</div>
                  <div className="text-sm text-pixel-dark/60">Happy Gamers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-pixel-dark mb-4">
                THE STORY OF <span className="text-pixel-coral">PIXEL</span><span className="text-pixel-teal">ONE</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-red to-neon-blue rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-pixel-dark/80 leading-relaxed">
              Born from the love of classic 8-bit games, PixelOne merges retro design with modern technology. 
              We believe that the best gaming experiences are timeless, and nostalgia should never be compromised by poor hardware.
            </p>

            <p className="text-lg text-pixel-dark/80 leading-relaxed">
              Our mission is simple: bring the joy of retro gaming to everyone, everywhere. With PixelOne, 
              you're not just buying a console — you're joining a community of passionate gamers who appreciate 
              the golden age of gaming.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pixel-coral/10 rounded-xl flex items-center justify-center lift-3d">
                  <Zap className="text-pixel-coral" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-pixel-dark mb-1">Innovation</h4>
                  <p className="text-sm text-pixel-dark/70">Cutting-edge tech meets classic design</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pixel-teal/10 rounded-xl flex items-center justify-center lift-3d">
                  <Users className="text-pixel-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-pixel-dark mb-1">Community</h4>
                  <p className="text-sm text-pixel-dark/70">Join thousands of retro gaming enthusiasts</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#buy"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pixel-coral to-pixel-salmon text-white font-semibold rounded-lg lift-3d depth-shadow"
              >
                Get Your PixelOne Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
