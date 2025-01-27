import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trees, Wind, Sun, Recycle, Globe, Leaf } from "lucide-react";

const programs = [
  {
    icon: Trees,
    title: "Reforestation Projects",
    description: "Support tree planting initiatives that restore ecosystems and absorb CO2.",
    impact: "1 tree absorbs ~48 lbs of CO2 per year",
    price: "$10 per tree"
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description: "Invest in wind farm projects that generate clean, renewable energy.",
    impact: "Prevents 4 tons of CO2 emissions per year",
    price: "$15 per MWh"
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "Fund solar installations in communities transitioning to renewable energy.",
    impact: "Offsets 3.5 tons of CO2 per year",
    price: "$20 per panel"
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Support projects that convert waste into renewable energy and resources.",
    impact: "Reduces 2.5 tons of CO2 per year",
    price: "$25 per month"
  },
  {
    icon: Globe,
    title: "Ocean Conservation",
    description: "Protect marine ecosystems that play a crucial role in carbon absorption.",
    impact: "Preserves natural carbon sinks",
    price: "$30 per acre"
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description: "Support farmers implementing carbon-reducing agricultural practices.",
    impact: "Reduces 1.5 tons of CO2 per year",
    price: "$40 per acre"
  }
];

const OffsetPrograms = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Carbon Offset Programs</h1>
          <p className="text-lg text-gray-600 mb-12">
            Make a positive impact on the environment by supporting our verified carbon offset projects.
            Each program is carefully selected and monitored to ensure maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <program.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Impact:</span>
                  <span className="ml-2">{program.impact}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Starting at:</span>
                  <span className="ml-2">{program.price}</span>
                </div>
              </div>
              <Button className="w-full">Support This Project</Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Offset Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Verified Impact</h3>
              <p className="text-gray-600">All our projects are independently verified and monitored for maximum environmental impact.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Transparent Reporting</h3>
              <p className="text-gray-600">Regular updates and detailed reports on your contribution's environmental impact.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Local & Global Projects</h3>
              <p className="text-gray-600">Choose from a variety of projects that make a difference both locally and globally.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default OffsetPrograms;