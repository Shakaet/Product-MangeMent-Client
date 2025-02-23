import { motion } from "framer-motion";
import SharedTitle from "./Sharedtitle";

const AboutUs = () => {
  return (
    <div className="py-20 px-6 bg-gray-300 text-center shadow-lg">
      <SharedTitle className="" heading={"About Us"} subheading={""}></SharedTitle>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We are committed to providing high-quality products with fast delivery and secure payments.
      </p>
    </div>
  );
};

export default AboutUs;
