import React from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Environmental Stewardship",
      description: "We're passionate about protecting the natural world and believe every traveler can make a positive impact."
    },
    {
      icon: Globe,
      title: "Sustainable Exploration",
      description: "We seek authentic experiences that support local communities and preserve cultural heritage."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We foster connections between conscious travelers and the communities they visit."
    },
    {
      icon: Award,
      title: "Responsible Tourism",
      description: "We promote travel practices that minimize environmental impact and maximize local benefits."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Two travelers in nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the Eco Wanderers
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Two passionate travelers on a mission to explore the world while protecting it for future generations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hi, we're Sarah and Alex, and we've been exploring the world together for over eight years. 
                  What started as weekend hiking trips quickly evolved into a passion for discovering the planet's 
                  most beautiful and fragile ecosystems.
                </p>
                <p>
                  Our journey toward sustainable travel began during a trip to Southeast Asia, where we witnessed 
                  firsthand the impact tourism can have on local environments and communities. We realized that 
                  the way we travel matters just as much as where we go.
                </p>
                <p>
                  Today, we're committed to proving that adventure and environmental responsibility can go hand in hand. 
                  Through Eco Wanderers, we share our experiences, mistakes, and discoveries to help fellow travelers 
                  make more conscious choices.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travelers in forest setting"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years Traveling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe travel should inspire, educate, and contribute positively to the world. 
              Here are the values that guide every adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <value.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Destination Guides</h3>
              <p className="text-gray-600">
                Comprehensive guides to eco-friendly destinations with practical tips for sustainable exploration.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Travel Tips</h3>
              <p className="text-gray-600">
                Actionable advice for reducing your travel footprint while enhancing your experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Stories</h3>
              <p className="text-gray-600">
                Personal experiences and lessons learned from our adventures around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with us on social media, subscribe to our newsletter, or reach out directly. 
            We'd love to hear about your eco-travel experiences!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/blog"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Read Our Adventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;