import React, { useState } from 'react'
import { ShoppingCart, Check, Package, Shield, Truck } from 'lucide-react'

const Buy = ({ onOrderNow }) => {
  const [selectedColor, setSelectedColor] = useState('red')

  const colors = [
    { id: 'red', name: 'Neon Red', color: '#FF0055' },
    { id: 'blue', name: 'Electric Blue', color: '#00D4FF' },
    { id: 'black', name: 'Midnight Black', color: '#1F2937' },
    { id: 'white', name: 'Pearl White', color: '#F5F5F5' }
  ]

  const specs = [
    'Full HD+ 5.5" Display',
    '6-Hour Battery Life',
    'HD Stereo Speakers',
    'High-Tactile Controls',
    '10,000+ Pre-loaded Games',
    'USB-C Fast Charging',
    'Awesome Quality ⭐',
    'Trending Model 🌀'
  ]

  return (
    <section id="buy" className="relative py-20 lg:py-32 bg-gradient-to-b from-pixel-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-pixel-dark mb-4">
            GET YOUR <span className="text-neon-red">PIXEL</span><span className="text-neon-blue">ONE</span>
          </h2>
          <p className="text-pixel-dark/70 max-w-2xl mx-auto">
            Own stock available. Latest arrivals - trending model with awesome quality!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Product Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-pixel-dark/5">
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-pixel-dark">₹3,756</span>
                <span className="text-2xl text-pixel-dark/40 line-through">₹5,999</span>
              </div>
              <div className="inline-block bg-neon-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                BEST RESELLER PRICE - FREE SHIPPING
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-pixel-dark mb-3">
                Choose Your Color
              </label>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedColor === color.id
                        ? 'border-neon-red scale-105 shadow-lg'
                        : 'border-pixel-dark/10 hover:border-pixel-dark/30'
                    }`}
                  >
                    <div
                      className="w-full aspect-square rounded-lg mb-2"
                      style={{ 
                        backgroundColor: color.color,
                        border: color.id === 'white' ? '1px solid #e5e7eb' : 'none'
                      }}
                    ></div>
                    <div className="text-xs text-center text-pixel-dark/70 font-medium">
                      {color.name.split(' ')[0]}
                    </div>
                    {selectedColor === color.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-red rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-pixel-dark mb-3">What's Included</h3>
              <div className="grid grid-cols-2 gap-2">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-pixel-dark/70">
                    <Check size={16} className="text-neon-blue flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-pixel-bg rounded-xl">
              <div className="text-center">
                <Package className="mx-auto mb-2 text-neon-red" size={24} />
                <div className="text-xs text-pixel-dark/70">Free Shipping India</div>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-neon-blue" size={24} />
                <div className="text-xs text-pixel-dark/70">Awesome Quality</div>
              </div>
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-neon-red" size={24} />
                <div className="text-xs text-pixel-dark/70">2-7 Days Delivery</div>
              </div>
            </div>

            {/* Order Button */}
            <button 
              onClick={onOrderNow}
              className="w-full py-4 bg-gradient-to-r from-pixel-coral to-pixel-salmon text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
            >
              <ShoppingCart size={20} className="group-hover:animate-bounce" />
              Order Now - ₹3,756
            </button>

            <p className="text-xs text-center text-pixel-dark/50 mt-4">
              Free shipping India wide • Own stock • 2-7 days delivery
            </p>
          </div>

          {/* Right - Payment QR Code */}
          <div className="bg-gradient-to-br from-pixel-dark to-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <h3 className="font-pixel text-xl mb-6 text-center">
              SCAN TO <span className="text-neon-red">PAY</span>
            </h3>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="text-center">
                <img 
                  src="/images/payment-qr.jpg" 
                  alt="Payment QR Code - 9880700926@fam" 
                  className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
                />
                <p className="text-pixel-dark/80 text-sm font-semibold mt-4">
                  9880700926@fam
                </p>
                <p className="text-pixel-dark/60 text-xs mt-1">
                  Scan with any UPI app
                </p>
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-neon-red rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Scan QR Code</h4>
                  <p className="text-sm text-white/70">Use your payment app to scan the code above</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Complete Payment</h4>
                  <p className="text-sm text-white/70">Enter amount (₹3,756) and confirm transaction</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-neon-red rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Get Confirmation</h4>
                  <p className="text-sm text-white/70">Receive order confirmation via email instantly</p>
                </div>
              </div>
            </div>

            {/* Accepted Payment Methods */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 text-center mb-3">Accepted Payment Methods</p>
              <div className="flex justify-center gap-4">
                <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-semibold">UPI</div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-semibold">Cards</div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-semibold">Wallets</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-pixel-dark/50 mb-4">Trusted by 50,000+ gamers across India</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="font-bold text-pixel-dark">Awesome Quality ⭐</div>
            <div className="w-1 h-1 bg-pixel-dark rounded-full"></div>
            <div className="font-bold text-pixel-dark">Free Shipping India</div>
            <div className="w-1 h-1 bg-pixel-dark rounded-full"></div>
            <div className="font-bold text-pixel-dark">Own Stock</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Buy
