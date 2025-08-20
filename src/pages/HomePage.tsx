import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Heart } from 'lucide-react';

const HomePage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "10 Ways to Travel Sustainably on a Budget",
      excerpt: "Discover how to explore the world responsibly without breaking the bank. From eco-friendly accommodations to low-impact transportation options.",
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sustainable Travel Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Exploring Costa Rica's Eco-Lodges: A Green Getaway",
      excerpt: "Experience the magic of Costa Rica's rainforests while staying at eco-lodges that prioritize conservation and community support.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Eco-Friendly Destinations",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Why Sustainable Tourism Matters for Our Planet",
      excerpt: "Understanding the impact of travel on our environment and how we can make a positive difference through conscious choices.",
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Nature Adventures",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Our Journey to Zero-Waste Travel",
      excerpt: "Follow our personal story of transitioning to zero-waste travel and the practical tips we learned along the way.",
      image: "https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Personal Stories",
      readTime: "7 min read"
    }
  ];

  const stats = [
    { icon: Users, number: "50K+", label: "Community Members" },
    { icon: Globe, number: "30+", label: "Countries Explored" },
    { icon: Heart, number: "100%", label: "Eco-Friendly" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Lush forest canopy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Eco Wanderers
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Exploring the World, Sustaining Nature
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            We're two eco-conscious travelers exploring the world sustainably. 
            Join us to discover eco-friendly destinations and tips that protect our planet!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center"
            >
              Read Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <stat.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe that travel should inspire and educate, not harm our planet. Through our adventures, 
            we share practical tips, authentic experiences, and sustainable practices that enable conscious 
            travelers to explore responsibly while supporting local communities and protecting natural environments.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Adventures & Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover sustainable travel insights, eco-friendly destinations, and personal stories 
              from our journey around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    <Link to="/blog">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      to="/blog"
                      className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Travel Sustainably?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join our community of eco-conscious travelers and start making a positive impact on your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/eco-tips"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get Eco-Travel Tips
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;