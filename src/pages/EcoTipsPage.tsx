import React from 'react';
import { 
  Leaf, 
  Plane, 
  Home, 
  ShoppingBag, 
  Car, 
  Camera, 
  Mountain, 
  Heart,
  CheckCircle
} from 'lucide-react';

const EcoTipsPage = () => {
  const tipCategories = [
    {
      icon: Plane,
      title: "Sustainable Transportation",
      tips: [
        "Choose direct flights to reduce fuel consumption",
        "Offset your carbon emissions through verified programs",
        "Use public transportation at your destination",
        "Consider overland travel for shorter distances",
        "Pack light to reduce aircraft fuel consumption"
      ]
    },
    {
      icon: Home,
      title: "Eco-Friendly Accommodations",
      tips: [
        "Stay at certified green hotels and eco-lodges",
        "Choose accommodations with renewable energy",
        "Support locally-owned guesthouses and B&Bs",
        "Look for water conservation programs",
        "Select places with waste reduction initiatives"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Conscious Consumption",
      tips: [
        "Bring reusable water bottles and shopping bags",
        "Support local artisans and businesses",
        "Avoid single-use plastics and disposables",
        "Choose locally-sourced food and products",
        "Buy quality souvenirs that last"
      ]
    },
    {
      icon: Mountain,
      title: "Responsible Outdoor Activities",
      tips: [
        "Follow Leave No Trace principles",
        "Stay on designated trails and paths",
        "Respect wildlife and maintain safe distances",
        "Use reef-safe sunscreen for water activities",
        "Choose tour operators with sustainability certifications"
      ]
    }
  ];

  const quickTips = [
    "Research destinations' environmental challenges before visiting",
    "Learn basic phrases in the local language",
    "Respect local customs and traditions",
    "Minimize water usage, especially in water-scarce areas",
    "Turn off lights and air conditioning when leaving your room",
    "Use biodegradable toiletries and cleaning products",
    "Document your travels digitally to reduce paper waste",
    "Share your sustainable travel experiences to inspire others"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainable Travel Tips
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Practical advice for reducing your environmental impact while exploring the world.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Travel with Purpose
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every journey is an opportunity to make a positive impact. These practical tips will help you 
            explore responsibly, support local communities, and protect the beautiful places you visit 
            for future generations.
          </p>
        </div>
      </section>

      {/* Main Tips Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {tipCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <category.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Eco-Travel Tips
            </h2>
            <p className="text-xl text-gray-600">
              Simple actions that make a big difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Eco-Travel Packing List
            </h2>
            <p className="text-xl text-gray-600">
              Items every sustainable traveler should pack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ShoppingBag className="h-6 w-6 text-emerald-600 mr-2" />
                Must-Have Items
              </h3>
              <ul className="space-y-3">
                {[
                  "Reusable water bottle with filtration",
                  "Bamboo or metal utensil set",
                  "Reusable shopping bags (various sizes)",
                  "Reef-safe, biodegradable sunscreen",
                  "Solid toiletries and shampoo bars",
                  "Quick-dry towel made from recycled materials"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="h-6 w-6 text-emerald-600 mr-2" />
                Tech & Convenience
              </h3>
              <ul className="space-y-3">
                {[
                  "Solar power bank for device charging",
                  "Universal travel adapter",
                  "Offline maps and translation apps",
                  "E-books instead of physical books",
                  "Reusable food containers",
                  "Laundry soap sheets for washing clothes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-6 text-emerald-400" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Travel Sustainably?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start implementing these tips on your next adventure and join the movement 
            of conscious travelers making a positive impact worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Read Our Travel Stories
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Share Your Tips
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoTipsPage;