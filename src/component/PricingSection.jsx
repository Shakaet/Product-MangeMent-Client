import { motion } from "framer-motion";
import SharedTitle from "./Sharedtitle";
import { useState } from "react";

const pricingPlans = [
  { title: "Basic Plan", price: "$19.99", features: ["Basic support", "1GB storage", "Email support"] },
  { title: "Premium Plan", price: "$49.99", features: ["Priority support", "10GB storage", "24/7 support"] },
  { title: "Ultimate Plan", price: "$99.99", features: ["Dedicated support", "Unlimited storage", "Premium support"] }
];

const PricingSection = () => {
    const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  return (
    <div className="py-20 px-6 bg-gray-200">
    <SharedTitle className="" heading={"Choose Your Plan"} subheading={" Select a plan that fits your needs. We have flexible pricing for everyone"}></SharedTitle>

      
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
            onClick={() => setSelectedPlan(plan.title)} // Set selected plan on click
            className={`bg-white p-8 rounded-lg shadow-lg cursor-pointer ${
              selectedPlan === plan.title ? "border-4 border-yellow-400" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-xl font-bold mt-4">{plan.price}</p>
            <ul className="mt-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-2">- {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
