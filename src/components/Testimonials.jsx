import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Takes me back to my childhood! The build quality is amazing and the screen is so crisp. Best purchase I've made this year.",
    author: "Alex Chen",
    role: "Retro Gaming Enthusiast",
    rating: 5,
    color: 'pixel-coral'
  },
  {
    text: "Sleek, portable, and powerful. I can play all my favorite classics on my commute. The battery life is incredible!",
    author: "Sarah Martinez",
    role: "Daily Commuter",
    rating: 5,
    color: 'pixel-teal'
  },
  {
    text: "Best handheld gaming experience ever. The controls feel premium and responsive. Worth every penny!",
    author: "Mike Johnson",
    role: "Gaming Collector",
    rating: 5,
    color: 'pixel-coral'
  }
]

const Testimonials = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pixel-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pixel-teal/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-pixel-dark mb-4">
            WHAT GAMERS <span className="text-pixel-coral">SAY</span>
          </h2>
          <p className="text-pixel-dark/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've rediscovered the joy of retro gaming
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            return (
              <div
              key={index}
              className="group relative bg-pixel-bg rounded-2xl p-8 transition-all duration-300 card-3d shadow-3d shadow-3d-hover"
            >
              {/* Quote icon */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${
                testimonial.color === 'pixel-coral' 
                  ? 'from-pixel-coral to-pixel-salmon' 
                  : 'from-pixel-teal to-pixel-dark-teal'
              } rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                <Quote className="text-white" size={20} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={testimonial.color === 'pixel-coral' ? 'fill-pixel-coral text-pixel-coral' : 'fill-pixel-teal text-pixel-teal'}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-pixel-dark/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                  testimonial.color === 'pixel-coral' 
                    ? 'from-pixel-coral/20 to-pixel-salmon/20' 
                    : 'from-pixel-teal/20 to-pixel-dark-teal/20'
                } flex items-center justify-center font-bold text-pixel-dark`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-pixel-dark">{testimonial.author}</div>
                  <div className="text-sm text-pixel-dark/60">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 ${
                testimonial.color === 'pixel-coral' ? 'border-pixel-coral' : 'border-pixel-teal'
              } rounded opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-pixel-dark/10">
          <div className="text-center">
            <div className="font-pixel text-3xl text-pixel-coral mb-2">4.9</div>
            <div className="text-sm text-pixel-dark/60">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-3xl text-pixel-teal mb-2">50K+</div>
            <div className="text-sm text-pixel-dark/60">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-3xl text-pixel-coral mb-2">98%</div>
            <div className="text-sm text-pixel-dark/60">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-3xl text-pixel-teal mb-2">24/7</div>
            <div className="text-sm text-pixel-dark/60">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
