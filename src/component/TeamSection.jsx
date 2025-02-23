import { motion } from "framer-motion";
import SharedTitle from "./Sharedtitle";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "https://i.pravatar.cc/100?img=4" },
  { name: "Sarah Lee", role: "CTO", image: "https://i.pravatar.cc/100?img=5" },
  { name: "David Kim", role: "Lead Developer", image: "https://i.pravatar.cc/100?img=6" }
];

const TeamSection = () => {
  return (
    <div className="py-20 px-6 bg-gray-200 text-center shadow-lg">
      <SharedTitle className="" heading={"Meet Our Team"} subheading={"Do Enjoy With Our Team"}></SharedTitle>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center"
          >
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto shadow-md" />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
