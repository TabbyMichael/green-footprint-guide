import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type EmissionData = {
  transportation: {
    carMiles: number;
    publicTransit: number;
    flights: number;
  };
  home: {
    electricity: number;
    gas: number;
    waste: number;
  };
};

const CarbonCalculator = () => {
  const [step, setStep] = useState(1);
  const [emissions, setEmissions] = useState<EmissionData>({
    transportation: {
      carMiles: 0,
      publicTransit: 0,
      flights: 0,
    },
    home: {
      electricity: 0,
      gas: 0,
      waste: 0,
    },
  });

  const handleInputChange = (category: keyof EmissionData, field: string, value: string) => {
    setEmissions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: parseFloat(value) || 0,
      },
    }));
  };

  const calculateTotalEmissions = () => {
    const transportationEmissions =
      emissions.transportation.carMiles * 0.404 +
      emissions.transportation.publicTransit * 0.14 +
      emissions.transportation.flights * 0.9;

    const homeEmissions =
      emissions.home.electricity * 0.92 +
      emissions.home.gas * 0.18 +
      emissions.home.waste * 0.1;

    return (transportationEmissions + homeEmissions).toFixed(2);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Carbon Footprint Calculator</h1>
          <p className="text-lg text-gray-600 mb-8">
            Calculate your carbon footprint and discover ways to reduce your environmental impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Transportation</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="carMiles">Car Miles per Year</Label>
                  <Input
                    id="carMiles"
                    type="number"
                    placeholder="Enter miles driven"
                    value={emissions.transportation.carMiles || ""}
                    onChange={(e) =>
                      handleInputChange("transportation", "carMiles", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="publicTransit">Public Transit Miles per Year</Label>
                  <Input
                    id="publicTransit"
                    type="number"
                    placeholder="Enter miles traveled"
                    value={emissions.transportation.publicTransit || ""}
                    onChange={(e) =>
                      handleInputChange("transportation", "publicTransit", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="flights">Flight Hours per Year</Label>
                  <Input
                    id="flights"
                    type="number"
                    placeholder="Enter flight hours"
                    value={emissions.transportation.flights || ""}
                    onChange={(e) =>
                      handleInputChange("transportation", "flights", e.target.value)
                    }
                  />
                </div>
              </div>
              <Button
                className="w-full mt-6"
                onClick={() => setStep(2)}
              >
                Next: Home Energy
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Home Energy & Waste</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="electricity">Electricity (kWh per Month)</Label>
                  <Input
                    id="electricity"
                    type="number"
                    placeholder="Enter monthly usage"
                    value={emissions.home.electricity || ""}
                    onChange={(e) => handleInputChange("home", "electricity", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gas">Natural Gas (therms per Month)</Label>
                  <Input
                    id="gas"
                    type="number"
                    placeholder="Enter monthly usage"
                    value={emissions.home.gas || ""}
                    onChange={(e) => handleInputChange("home", "gas", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="waste">Waste (pounds per Week)</Label>
                  <Input
                    id="waste"
                    type="number"
                    placeholder="Enter weekly waste"
                    value={emissions.home.waste || ""}
                    onChange={(e) => handleInputChange("home", "waste", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="w-1/2"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  className="w-1/2"
                  onClick={() => setStep(3)}
                >
                  Calculate Results
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your Carbon Footprint</h2>
              <div className="p-8 bg-primary-50 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">
                  {calculateTotalEmissions()}
                </p>
                <p className="text-gray-600">Metric Tons CO2e per Year</p>
              </div>
              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold">Recommendations</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Consider using public transportation or carpooling to reduce emissions</li>
                  <li>• Switch to energy-efficient appliances and LED lighting</li>
                  <li>• Reduce waste through recycling and composting</li>
                  <li>• Consider installing solar panels or switching to renewable energy</li>
                </ul>
              </div>
              <div className="flex space-x-4 mt-6">
                <Button
                  variant="outline"
                  className="w-1/2"
                  onClick={() => setStep(1)}
                >
                  Start Over
                </Button>
                <Button
                  className="w-1/2"
                  onClick={() => window.location.href = "/offset-programs"}
                >
                  Explore Offset Programs
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};


export default CarbonCalculator;