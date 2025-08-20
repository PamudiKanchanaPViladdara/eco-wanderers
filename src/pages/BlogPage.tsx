import React, { useState } from 'react';
import { Search, Filter, Clock, ArrowRight, X } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const categories = [
    'All',
    'Sustainable Travel Tips',
    'Eco-Friendly Destinations',
    'Nature Adventures',
    'Personal Stories'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Travel Sustainably on a Budget",
      excerpt: "Discover how to explore the world responsibly without breaking the bank. From eco-friendly accommodations to low-impact transportation options, we share practical tips for the conscious traveler.",
      content: `
        <h2>Introduction</h2>
        <p>Sustainable travel doesn't have to break the bank. In fact, many eco-friendly practices can actually save you money while reducing your environmental impact. Here are our top 10 tips for traveling sustainably on a budget.</p>
        
        <h3>1. Choose Overland Transportation</h3>
        <p>Trains and buses often cost less than flights and produce significantly fewer emissions. Consider scenic train routes or comfortable bus services for shorter distances. You'll see more of the countryside and meet locals along the way.</p>
        
        <h3>2. Stay in Eco-Hostels and Guesthouses</h3>
        <p>Many budget accommodations are leading the way in sustainability. Look for hostels with solar power, water conservation programs, and recycling initiatives. They're often cheaper than hotels and more environmentally friendly.</p>
        
        <h3>3. Pack Light and Smart</h3>
        <p>Lighter luggage means lower fuel consumption for transportation. Pack versatile clothing, reusable items, and only what you need. This also saves on baggage fees!</p>
        
        <h3>4. Eat Local and Seasonal</h3>
        <p>Local markets and street food are not only budget-friendly but also reduce food miles. You'll experience authentic cuisine while supporting local farmers and reducing packaging waste.</p>
        
        <h3>5. Use Public Transportation</h3>
        <p>Public transit is usually the cheapest way to get around cities and has a much lower environmental impact than taxis or rental cars. Many cities offer tourist passes that include multiple forms of transport.</p>
        
        <h3>6. Choose Free Outdoor Activities</h3>
        <p>Hiking, swimming, and exploring parks are free activities that connect you with nature. They're often the most memorable parts of any trip and have zero environmental impact.</p>
        
        <h3>7. Travel During Off-Peak Seasons</h3>
        <p>Off-season travel is cheaper and reduces overtourism pressure on destinations. You'll find better deals on accommodations and experience places with fewer crowds.</p>
        
        <h3>8. Bring Reusable Items</h3>
        <p>Pack a reusable water bottle, shopping bags, and utensils. You'll save money on single-use items and reduce plastic waste. Many destinations offer free water refill stations.</p>
        
        <h3>9. Book Direct with Local Operators</h3>
        <p>Skip the middleman and book tours directly with local operators. You'll often get better prices and ensure more money goes to the local community.</p>
        
        <h3>10. Consider House-Sitting or Work Exchanges</h3>
        <p>Platforms like TrustedHousesitters or Workaway offer free accommodation in exchange for pet-sitting or light work. It's a great way to live like a local while saving money.</p>
        
        <h2>Conclusion</h2>
        <p>Sustainable travel on a budget is not only possible but often more rewarding than expensive alternatives. By making conscious choices, you'll save money, reduce your environmental impact, and have more authentic experiences. Start with one or two of these tips and gradually incorporate more into your travel style.</p>
      `,
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sustainable Travel Tips",
      readTime: "5 min read",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Exploring Costa Rica's Eco-Lodges: A Green Getaway",
      excerpt: "Experience the magic of Costa Rica's rainforests while staying at eco-lodges that prioritize conservation and community support. Our detailed guide to the best sustainable accommodations.",
      content: `
        <h2>Why Costa Rica?</h2>
        <p>Costa Rica has long been a pioneer in eco-tourism, with over 25% of its land protected in national parks and reserves. The country's commitment to sustainability makes it an ideal destination for conscious travelers seeking authentic nature experiences.</p>
        
        <h3>What Makes an Eco-Lodge Special?</h3>
        <p>True eco-lodges go beyond just being located in nature. They actively contribute to conservation efforts, support local communities, and minimize their environmental impact through renewable energy, water conservation, and waste reduction programs.</p>
        
        <h3>Our Top Eco-Lodge Recommendations</h3>
        
        <h4>1. Lapa Rios Ecolodge, Osa Peninsula</h4>
        <p>This award-winning lodge sits on a 1,000-acre private rainforest reserve. All bungalows are built from sustainable materials and offer stunning ocean views. The lodge employs local guides and supports community education programs.</p>
        
        <h4>2. Arenas del Mar, Manuel Antonio</h4>
        <p>A luxury eco-resort that proves sustainability and comfort can coexist. Features include solar heating, rainwater collection, and a comprehensive recycling program. The property protects 11 acres of primary rainforest.</p>
        
        <h4>3. Pacuare Eco Lodge, Pacuare River</h4>
        <p>Nestled in the rainforest canopy, this lodge offers adventure activities like zip-lining and white-water rafting. They operate their own hydroelectric plant and have reforested over 500 acres of degraded land.</p>
        
        <h3>What to Expect</h3>
        <p>Eco-lodges typically offer guided nature walks, bird watching, and educational programs about local ecosystems. Meals often feature organic, locally-sourced ingredients, and you'll learn about conservation efforts firsthand.</p>
        
        <h3>Planning Your Visit</h3>
        <p>The dry season (December to April) offers the best weather, but the green season (May to November) provides lush landscapes and fewer crowds. Book well in advance, as the best eco-lodges fill up quickly.</p>
        
        <h2>Making a Difference</h2>
        <p>By choosing eco-lodges, you're directly supporting conservation efforts and local communities. Many lodges reinvest profits into environmental protection and community development projects, making your vacation a force for positive change.</p>
      `,
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Eco-Friendly Destinations",
      readTime: "8 min read",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Why Sustainable Tourism Matters for Our Planet",
      excerpt: "Understanding the impact of travel on our environment and how we can make a positive difference through conscious choices. The science behind sustainable tourism practices.",
      content: `
        <h2>The Current State of Tourism</h2>
        <p>Tourism is one of the world's largest industries, accounting for 10% of global GDP and employing 1 in 10 people worldwide. However, this growth comes with significant environmental and social costs that we can no longer ignore.</p>
        
        <h3>Environmental Impact</h3>
        <p>Tourism contributes approximately 8% of global greenhouse gas emissions. This includes transportation (especially aviation), accommodations, food, and activities. Popular destinations often struggle with overtourism, leading to environmental degradation and strain on local resources.</p>
        
        <h3>The Overtourism Crisis</h3>
        <p>Cities like Venice, Barcelona, and Santorini have experienced overtourism, where visitor numbers exceed the destination's carrying capacity. This leads to:</p>
        <ul>
          <li>Environmental degradation</li>
          <li>Loss of local culture and authenticity</li>
          <li>Increased cost of living for residents</li>
          <li>Strain on infrastructure and services</li>
        </ul>
        
        <h3>What is Sustainable Tourism?</h3>
        <p>Sustainable tourism meets the needs of present tourists and host regions while protecting and enhancing opportunities for the future. It should:</p>
        <ul>
          <li>Make optimal use of environmental resources</li>
          <li>Respect the socio-cultural authenticity of host communities</li>
          <li>Ensure viable, long-term economic operations</li>
          <li>Provide socio-economic benefits to all stakeholders</li>
        </ul>
        
        <h3>The Benefits of Sustainable Tourism</h3>
        
        <h4>Environmental Benefits</h4>
        <p>Sustainable tourism can actually help protect natural areas by providing economic incentives for conservation. Many national parks and protected areas rely on tourism revenue for funding conservation efforts.</p>
        
        <h4>Economic Benefits</h4>
        <p>When done right, tourism can provide sustainable livelihoods for local communities, reduce poverty, and fund infrastructure development. Eco-tourism has been particularly successful in countries like Costa Rica and Rwanda.</p>
        
        <h4>Cultural Benefits</h4>
        <p>Sustainable tourism can help preserve local cultures and traditions by creating economic value for cultural heritage. This encourages communities to maintain their unique identities.</p>
        
        <h3>How You Can Make a Difference</h3>
        <p>Every traveler has the power to make tourism more sustainable:</p>
        <ul>
          <li>Choose destinations and operators committed to sustainability</li>
          <li>Travel during off-peak seasons to reduce overtourism</li>
          <li>Support local businesses and communities</li>
          <li>Minimize your environmental footprint</li>
          <li>Respect local cultures and customs</li>
          <li>Educate yourself about destinations before visiting</li>
        </ul>
        
        <h2>The Future of Travel</h2>
        <p>The COVID-19 pandemic has given us an opportunity to reset and rebuild tourism in a more sustainable way. As travelers, we have the responsibility to ensure that our adventures contribute positively to the places we visit and the planet we all share.</p>
      `,
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Nature Adventures",
      readTime: "6 min read",
      date: "March 5, 2024"
    },
    {
      id: 4,
      title: "Our Journey to Zero-Waste Travel",
      excerpt: "Follow our personal story of transitioning to zero-waste travel and the practical tips we learned along the way. From packing essentials to local waste management.",
      content: `
        <h2>The Wake-Up Call</h2>
        <p>Our journey to zero-waste travel began on a beach in Thailand. We were horrified to see the amount of plastic waste washing up on what should have been a pristine shoreline. That moment changed everything for us.</p>
        
        <h3>What is Zero-Waste Travel?</h3>
        <p>Zero-waste travel means minimizing the waste you produce while traveling, with the goal of sending nothing to landfills. It's about refusing, reducing, reusing, recycling, and composting - in that order of priority.</p>
        
        <h3>Our Essential Zero-Waste Travel Kit</h3>
        
        <h4>Reusable Items</h4>
        <ul>
          <li>Stainless steel water bottle with filter</li>
          <li>Collapsible silicone food containers</li>
          <li>Bamboo utensil set with carrying case</li>
          <li>Reusable shopping bags (various sizes)</li>
          <li>Cloth produce bags for markets</li>
          <li>Stainless steel straws</li>
        </ul>
        
        <h4>Toiletries and Personal Care</h4>
        <ul>
          <li>Solid shampoo and conditioner bars</li>
          <li>Bamboo toothbrush</li>
          <li>Toothpaste tablets</li>
          <li>Solid deodorant in compostable packaging</li>
          <li>Menstrual cup or reusable pads</li>
          <li>Safety razor with replaceable blades</li>
        </ul>
        
        <h3>Challenges We Faced</h3>
        
        <h4>Language Barriers</h4>
        <p>Explaining "no plastic bag" or "no straw" can be challenging in different languages. We learned key phrases and used translation apps to communicate our preferences.</p>
        
        <h4>Cultural Differences</h4>
        <p>In some cultures, refusing packaging can be seen as rude. We learned to be respectful while still maintaining our zero-waste goals, sometimes accepting items and properly disposing of them later.</p>
        
        <h4>Limited Infrastructure</h4>
        <p>Not all destinations have recycling facilities or bulk stores. We adapted by researching local waste management systems and planning accordingly.</p>
        
        <h3>Practical Tips for Zero-Waste Travel</h3>
        
        <h4>Before You Go</h4>
        <ul>
          <li>Research local recycling and composting facilities</li>
          <li>Find bulk stores and farmers markets at your destination</li>
          <li>Pack all reusable items in your carry-on</li>
          <li>Bring enough solid toiletries for your entire trip</li>
        </ul>
        
        <h4>While Traveling</h4>
        <ul>
          <li>Always carry your reusable items</li>
          <li>Shop at local markets for fresh, unpackaged food</li>
          <li>Choose restaurants that use real plates and utensils</li>
          <li>Refuse single-use items politely but firmly</li>
          <li>Compost food scraps when possible</li>
        </ul>
        
        <h3>The Results</h3>
        <p>After two years of zero-waste travel, we've reduced our travel waste by over 90%. More importantly, we've inspired other travelers and even some accommodations to adopt more sustainable practices.</p>
        
        <h3>It's Not About Perfection</h3>
        <p>Zero-waste travel isn't about being perfect - it's about being mindful and making better choices. Every small action counts, and even reducing your waste by 50% makes a significant difference.</p>
        
        <h2>Join the Movement</h2>
        <p>We encourage every traveler to start somewhere. Pick one or two items from our kit and begin your own zero-waste journey. Together, we can make travel more sustainable for everyone.</p>
      `,
      image: "https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Personal Stories",
      readTime: "7 min read",
      date: "February 28, 2024"
    },
    {
      id: 5,
      title: "Hiking the Sustainable Way: Leave No Trace Principles",
      excerpt: "Learn how to enjoy nature's beauty while preserving it for future generations. Essential guidelines for responsible hiking and outdoor adventures.",
      content: `
        <h2>Introduction to Leave No Trace</h2>
        <p>The Leave No Trace principles were developed to help outdoor enthusiasts minimize their impact on natural environments. These seven principles provide a framework for responsible outdoor recreation.</p>
        
        <h3>Principle 1: Plan Ahead and Prepare</h3>
        <p>Proper planning is the foundation of sustainable hiking:</p>
        <ul>
          <li>Research regulations and special concerns for your destination</li>
          <li>Check weather conditions and prepare accordingly</li>
          <li>Plan your route and inform others of your itinerary</li>
          <li>Pack appropriate gear for the conditions</li>
          <li>Bring maps and navigation tools</li>
        </ul>
        
        <h3>Principle 2: Travel and Camp on Durable Surfaces</h3>
        <p>Stick to established trails and campsites to minimize environmental damage:</p>
        <ul>
          <li>Walk single file in the middle of trails</li>
          <li>Don't cut switchbacks or create new trails</li>
          <li>Camp in designated areas when available</li>
          <li>Choose durable surfaces like rock, gravel, or sand for camping</li>
          <li>Avoid fragile areas like wetlands and alpine zones</li>
        </ul>
        
        <h3>Principle 3: Dispose of Waste Properly</h3>
        <p>Pack it in, pack it out - and then some:</p>
        <ul>
          <li>Carry out all trash, including food scraps and toilet paper</li>
          <li>Use established restrooms when available</li>
          <li>For human waste, dig catholes 6-8 inches deep and 200 feet from water</li>
          <li>Use biodegradable soap and scatter greywater 200 feet from water sources</li>
        </ul>
        
        <h3>Principle 4: Leave What You Find</h3>
        <p>Preserve the natural and cultural heritage of the outdoors:</p>
        <ul>
          <li>Don't take rocks, plants, or artifacts as souvenirs</li>
          <li>Leave natural objects and cultural artifacts for others to enjoy</li>
          <li>Don't build structures or furniture from natural materials</li>
          <li>Minimize site alterations - don't dig trenches or move rocks</li>
        </ul>
        
        <h3>Principle 5: Minimize Campfire Impacts</h3>
        <p>Use lightweight stoves instead of fires when possible:</p>
        <ul>
          <li>Check fire restrictions before your trip</li>
          <li>Use established fire rings when fires are permitted</li>
          <li>Keep fires small and use only dead wood from the ground</li>
          <li>Burn fires completely to ash and ensure they're cold before leaving</li>
          <li>Consider the environmental impact - fires can damage soil and vegetation</li>
        </ul>
        
        <h3>Principle 6: Respect Wildlife</h3>
        <p>Observe animals from a distance and never feed them:</p>
        <ul>
          <li>Store food securely to avoid attracting animals</li>
          <li>Never approach or feed wildlife</li>
          <li>Make noise in bear country to avoid surprising animals</li>
          <li>Give animals space - use binoculars or telephoto lenses</li>
          <li>Control pets at all times</li>
        </ul>
        
        <h3>Principle 7: Be Considerate of Other Visitors</h3>
        <p>Help preserve the quality of experience for all outdoor enthusiasts:</p>
        <ul>
          <li>Keep noise levels down - natural sounds are part of the experience</li>
          <li>Yield to other hikers appropriately on trails</li>
          <li>Take breaks away from trails and other visitors</li>
          <li>Camp away from trails and other visitors when possible</li>
          <li>Be courteous and respectful to all outdoor users</li>
        </ul>
        
        <h3>Beyond the Basics</h3>
        <p>Sustainable hiking goes beyond Leave No Trace principles:</p>
        <ul>
          <li>Choose local destinations to reduce travel emissions</li>
          <li>Support conservation organizations</li>
          <li>Volunteer for trail maintenance and cleanup projects</li>
          <li>Educate others about responsible outdoor practices</li>
          <li>Consider the cumulative impact of your outdoor activities</li>
        </ul>
        
        <h2>Making a Difference</h2>
        <p>By following these principles, we ensure that future generations can enjoy the same natural beauty we experience today. Every hiker has a responsibility to be a steward of the outdoors.</p>
      `,
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Nature Adventures",
      readTime: "6 min read",
      date: "February 20, 2024"
    },
    {
      id: 6,
      title: "Green Transportation: Eco-Friendly Ways to Get Around",
      excerpt: "Explore sustainable transportation options for your next adventure. From electric vehicles to public transit, discover how to reduce your travel carbon footprint.",
      content: `
        <h2>The Transportation Challenge</h2>
        <p>Transportation accounts for about 75% of tourism's carbon footprint, with aviation being the largest contributor. However, there are many ways to reduce your travel emissions while still exploring the world.</p>
        
        <h3>Sustainable Transportation Options</h3>
        
        <h4>1. Train Travel</h4>
        <p>Trains are one of the most eco-friendly ways to travel long distances:</p>
        <ul>
          <li>Emit 80% less CO2 than flying for similar distances</li>
          <li>Offer scenic routes and comfortable seating</li>
          <li>Allow you to see the countryside and local communities</li>
          <li>No security delays or baggage restrictions</li>
          <li>City center to city center convenience</li>
        </ul>
        
        <h4>2. Bus and Coach Travel</h4>
        <p>Modern buses are surprisingly comfortable and efficient:</p>
        <ul>
          <li>Lower emissions per passenger than cars or planes</li>
          <li>Affordable option for budget travelers</li>
          <li>Extensive networks covering remote destinations</li>
          <li>Opportunity to meet locals and other travelers</li>
          <li>Many companies now use biodiesel or electric buses</li>
        </ul>
        
        <h4>3. Electric and Hybrid Vehicles</h4>
        <p>When you need a car, choose the greenest option:</p>
        <ul>
          <li>Electric vehicles produce zero direct emissions</li>
          <li>Hybrid cars significantly reduce fuel consumption</li>
          <li>Growing charging infrastructure makes EVs more practical</li>
          <li>Many rental companies now offer electric options</li>
          <li>Consider car-sharing services in cities</li>
        </ul>
        
        <h4>4. Cycling and E-Bikes</h4>
        <p>Two wheels, zero emissions, maximum adventure:</p>
        <ul>
          <li>Perfect for exploring cities and countryside</li>
          <li>Great exercise and health benefits</li>
          <li>E-bikes make longer distances and hills manageable</li>
          <li>Many destinations offer bike rental and tour options</li>
          <li>Allows intimate connection with local environments</li>
        </ul>
        
        <h3>Making Flying More Sustainable</h3>
        <p>When flying is necessary, you can still minimize your impact:</p>
        
        <h4>Choose Direct Flights</h4>
        <p>Takeoffs and landings consume the most fuel, so direct flights are more efficient than connecting flights.</p>
        
        <h4>Fly Economy Class</h4>
        <p>Economy class has a smaller carbon footprint per passenger than business or first class due to higher passenger density.</p>
        
        <h4>Pack Light</h4>
        <p>Every kilogram of weight requires additional fuel. Pack only what you need and choose lightweight gear.</p>
        
        <h4>Carbon Offsetting</h4>
        <p>While not perfect, verified carbon offset programs can help neutralize your flight emissions. Choose programs that invest in renewable energy or reforestation projects.</p>
        
        <h3>Urban Transportation</h3>
        
        <h4>Public Transit</h4>
        <p>Use buses, trains, trams, and subways:</p>
        <ul>
          <li>Much lower emissions per passenger than taxis</li>
          <li>Often the fastest way to get around cities</li>
          <li>Provides authentic local experiences</li>
          <li>Very cost-effective for tourists</li>
          <li>Many cities offer tourist transit passes</li>
        </ul>
        
        <h4>Walking</h4>
        <p>The ultimate sustainable transportation:</p>
        <ul>
          <li>Zero emissions and great exercise</li>
          <li>Allows you to discover hidden gems</li>
          <li>Provides opportunities for spontaneous interactions</li>
          <li>Helps you truly experience a destination's character</li>
          <li>Free and always available</li>
        </ul>
        
        <h3>Planning Your Green Journey</h3>
        
        <h4>Research Transportation Options</h4>
        <p>Before booking, research all available transportation methods and choose the most sustainable option that fits your budget and schedule.</p>
        
        <h4>Consider Multi-Modal Trips</h4>
        <p>Combine different transportation methods - fly to a region, then use trains and buses for local exploration.</p>
        
        <h4>Stay Longer</h4>
        <p>If you must fly long distances, stay longer to justify the emissions. Slow travel is both more sustainable and more rewarding.</p>
        
        <h2>The Future of Green Transportation</h2>
        <p>The transportation industry is rapidly evolving with electric aircraft, hydrogen trains, and improved biofuels on the horizon. As travelers, we can support these innovations by choosing the greenest options available today.</p>
      `,
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sustainable Travel Tips",
      readTime: "5 min read",
      date: "February 15, 2024"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 pr-8">{selectedPost.title}</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-medium">
                  {selectedPost.category}
                </span>
                <span>{selectedPost.date}</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedPost.readTime}
                </span>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                style={{
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Travel Stories
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Sustainable travel tips, destination guides, and personal adventures 
            from around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                      <button 
                        onClick={() => setSelectedPost(post)}
                        className="text-left hover:text-emerald-600 transition-colors"
                      >
                        {post.title}
                      </button>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Adventures
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for weekly eco-travel tips and destination guides.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;