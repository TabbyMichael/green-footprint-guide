import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-100 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-primary-300 bg-primary-100 text-primary-700">
            <Leaf className="w-4 h-4 mr-2" />
            Join the sustainability movement
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto">
            Calculate & Reduce Your{" "}
            <span className="text-primary-600">Carbon Footprint</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Make a positive impact on the environment. Track your carbon emissions,
            get personalized recommendations, and join a community of
            change-makers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8"
            >
              Start Calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary-200 text-primary-700 hover:bg-primary-50"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};