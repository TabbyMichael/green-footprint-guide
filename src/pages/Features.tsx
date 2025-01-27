import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Calculator,
  TreePine,
  Users,
  BarChart3,
  BookOpen,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "Carbon Calculator",
      description:
        "Calculate your carbon footprint with our easy-to-use tool that considers all aspects of your lifestyle.",
      link: "/carbon-calculator",
    },
    {
      icon: TreePine,
      title: "Offset Programs",
      description:
        "Support verified carbon offset projects including reforestation, renewable energy, and more.",
      link: "/offset-programs",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Join a community of environmentally conscious individuals and share sustainable living tips.",
      link: "/community",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Monitor your carbon reduction progress over time with detailed analytics and insights.",
      link: "/dashboard",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description:
        "Access comprehensive guides and resources about sustainable living and climate action.",
      link: "/resources",
    },
    {
      icon: Globe,
      title: "Local Initiatives",
      description:
        "Discover and participate in local sustainability projects and initiatives.",
      link: "/local",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Features That Make a Difference
              </h1>
              <p className="text-xl text-gray-600">
                Explore our comprehensive suite of tools designed to help you
                understand and reduce your environmental impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = feature.link}
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;