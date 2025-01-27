import { motion } from "framer-motion";
import {
  BarChart3,
  Lightbulb,
  TreePine,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Track Your Impact",
    description:
      "Calculate your carbon footprint with our easy-to-use calculator and track your progress over time.",
  },
  {
    icon: Lightbulb,
    title: "Get Recommendations",
    description:
      "Receive personalized suggestions to reduce your environmental impact based on your lifestyle.",
  },
  {
    icon: TreePine,
    title: "Offset Emissions",
    description:
      "Support verified carbon offset projects to neutralize your unavoidable emissions.",
  },
  {
    icon: Users,
    title: "Join the Community",
    description:
      "Connect with like-minded individuals and share sustainable living tips and experiences.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Journey to Sustainability
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take control of your environmental impact with our comprehensive tools
            and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary-200 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};