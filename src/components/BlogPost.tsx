import { motion } from "framer-motion";
import { Leaf, Share2, Clock, User, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  environmentalImpact: {
    carbonSaved: number;
    treesPlanted: number;
    energySaved: number;
  };
};

const mockBlogPost: BlogPost = {
  id: "1",
  title: "10 Simple Ways to Reduce Your Carbon Footprint Today",
  author: "Emma Green",
  date: "2024-01-25",
  readTime: "5 min read",
  tags: ["Sustainability", "Lifestyle", "Climate Action"],
  content: `
    Climate change is one of the most pressing challenges of our time, but the good news is that each of us can make a difference through simple daily actions. Here are ten effective ways to reduce your carbon footprint and contribute to a more sustainable future.

    1. Optimize Your Energy Usage
    Start by conducting a home energy audit. Replace traditional bulbs with LED lights, which use up to 75% less energy and last 25 times longer. Consider installing a smart thermostat to optimize your heating and cooling systems automatically.

    2. Embrace Plant-Based Meals
    Try incorporating more plant-based meals into your diet. The production of plant-based foods typically generates fewer greenhouse gas emissions compared to animal products. Start with "Meatless Mondays" and gradually expand from there.

    3. Reduce Single-Use Plastics
    Carry reusable bags, water bottles, and coffee cups. These simple switches can prevent hundreds of plastic items from entering our oceans and landfills each year. When shopping, look for products with minimal packaging.

    4. Smart Transportation Choices
    Whenever possible, choose walking, cycling, or public transportation. If you must drive, maintain your vehicle properly to ensure optimal fuel efficiency. Consider carpooling or switching to an electric or hybrid vehicle.

    5. Support Local and Seasonal
    Buy locally produced food and products to reduce transportation emissions. Shop at farmers' markets and choose seasonal produce, which typically requires less energy for production and storage.

    6. Mindful Water Usage
    Install water-efficient fixtures and fix leaks promptly. Collect rainwater for gardening and consider drought-resistant plants for landscaping. Take shorter showers and turn off the tap while brushing teeth.

    7. Proper Waste Management
    Implement a comprehensive recycling system at home. Start composting kitchen scraps and yard waste. Before disposing of items, consider if they can be repaired, repurposed, or donated.

    8. Energy-Efficient Appliances
    When replacing old appliances, choose energy-efficient models with high energy ratings. These may cost more initially but will save money and reduce emissions in the long run.

    9. Green Your Living Space
    Plant trees or start a small garden. Indoor plants improve air quality and create a connection with nature. Use natural cleaning products to reduce harmful chemicals in the environment.

    10. Spread Awareness
    Share your sustainable practices with friends and family. Join local environmental groups and participate in community initiatives. Small actions, when multiplied by millions, create significant positive change.

    Remember, reducing your carbon footprint doesn't require dramatic lifestyle changes. Start with these simple steps and gradually build more sustainable habits. Every action counts in our collective effort to protect our planet for future generations.
  `,
  environmentalImpact: {
    carbonSaved: 2.5,
    treesPlanted: 15,
    energySaved: 500
  }
};

export const BlogPost = () => {
  const post = mockBlogPost;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Environmental Impact Stats */}
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-primary-600" />
              Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">
                  {post.environmentalImpact.carbonSaved}
                </p>
                <p className="text-sm text-gray-600">Tons of CO2 Saved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">
                  {post.environmentalImpact.treesPlanted}
                </p>
                <p className="text-sm text-gray-600">Trees Planted</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">
                  {post.environmentalImpact.energySaved}
                </p>
                <p className="text-sm text-gray-600">kWh Energy Saved</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-green max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};