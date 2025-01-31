import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Happy Customers", value: 1000 },
  { label: "Products Sold", value: 1200 },
  { label: "Stores Worldwide", value: 50 }
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev < value ? prev + 1 : value));
    }, 1);
    return () => clearInterval(interval);
  }, [value]);

  return <span className="text-4xl font-bold">{count}+</span>;
};

const StatsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold">Our Achievements</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center"
          >
            <Counter value={stat.value} />
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
