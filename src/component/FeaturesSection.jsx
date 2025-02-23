import { motion } from "framer-motion";
import SharedTitle from "./Sharedtitle";

const features = [
  { title: "Fast Delivery", description: "Get your order within 24 hours!", icon: "🚀" },
  { title: "Secure Payments", description: "100% safe & encrypted transactions.", icon: "🔒" },
  { title: "Best Quality", description: "Handpicked high-quality products.", icon: "🌟" }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
          <SharedTitle className="" heading={"Why Choose Us"} subheading={"Please Order to Available Product"}></SharedTitle>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
          
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
