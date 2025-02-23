import { motion } from "framer-motion";
import SharedTitle from "./Sharedtitle";

const products = [
  { id: 1, name: "Smartphone", price: "$900", image: "https://i.ibb.co.com/DfRrSQp/p1.jpg" },
  { id: 2, name: "Laptop", price: "$1200", image: "https://i.ibb.co.com/F8W2pSc/th.jpg" },
  { id: 3, name: "Smartwatch", price: "$250", image: "https://i.ibb.co.com/7GZgVsf/w1.jpg" }
];

const ProductShowcase = () => {
  return (
    <div className="py-20 px-6 bg-gray-200">
    <SharedTitle className="" heading={"Featured Products"} subheading={"Explore our hand-picked selection of the best products"}></SharedTitle>

      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

      {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                
                <p className="text-sm text-yellow-600 font-bold"> {product.price}</p>
                
              </div>
            </motion.div>
             
          ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
