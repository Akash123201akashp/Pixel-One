import React from 'react'
import { Monitor, Volume2, Gamepad2, Battery } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Full HD+ Display',
    description: 'Crystal clear 5.5" screen with vibrant colors and sharp pixels',
    color: 'pixel-coral'
  },
  {
    icon: Volume2,
    title: 'HD Sound Output',
    description: 'Immersive stereo speakers with deep bass and crisp highs',
    color: 'pixel-teal'
  },
  {
    icon: Gamepad2,
    title: 'High-Tactile Joysticks',
    description: 'Precision controls with satisfying click feedback',
    color: 'pixel-teal'
  },
  {
    icon: Battery,
    title: '6-Hour Battery Life',
    description: 'All-day gaming on a single charge with fast charging',
    color: 'pixel-coral'
  }
]

const Features = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-pixel-dark mb-4">
            POWER<span className="text-pixel-coral">FUL</span> FEATURES
          </h2>
          <p className="text-pixel-dark/70 max-w-2xl mx-auto">
            Engineered for the ultimate retro gaming experience with modern technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-pixel-bg rounded-2xl p-6 transition-all duration-300 cursor-pointer card-3d shadow-3d shadow-3d-hover"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color}/0 to-${feature.color}/0 group-hover:from-${feature.color}/10 group-hover:to-${feature.color}/5 transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${
                      feature.color === 'pixel-coral' 
                        ? 'from-pixel-coral/20 to-pixel-coral/5' 
                        : 'from-pixel-teal/20 to-pixel-teal/5'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon 
                      size={32} 
                      className={feature.color === 'pixel-coral' ? 'text-pixel-coral' : 'text-pixel-teal'}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg mb-2 text-pixel-dark group-hover:text-pixel-coral transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-pixel-dark/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Pixel corner decoration */}
                <div className={`absolute top-2 right-2 w-3 h-3 ${
                  feature.color === 'pixel-coral' ? 'bg-pixel-coral' : 'bg-pixel-teal'
                } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`absolute bottom-2 left-2 w-3 h-3 ${
                  feature.color === 'pixel-coral' ? 'bg-pixel-coral' : 'bg-pixel-teal'
                } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pixel-coral/10 via-pixel-teal/10 to-pixel-coral/10 rounded-full px-8 py-4">
            <p className="text-pixel-dark font-semibold">
              + 10,000 Pre-loaded Classic Games | USB-C Fast Charging | MicroSD Expandable Storage
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
