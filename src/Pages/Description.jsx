
import { motion } from "framer-motion";

const Description = () => {
  return (
    <div className=" py-12 bg-gray-50">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 lg:px-16"
    >
      <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <motion.img
          src="/src/assets/images (2).jpg"  // Replace this with the actual path to your image
          alt="About Us"
         className="w-full lg:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Over more than 8 years now, <span className="text-yellow-500 font-semibold">BookNestor</span> has continued to fulfill people's need for academic, professional, and personal books. Our collection ranges from textbooks, guidebooks, question banks, exam preparation guides to fiction, non-fiction, and religious books; from nursery to PhD level. When book lovers need rare books, they request us through the Find My Books page, and we happily assist. We also sell many useful learning tools and accessories. Our medical tools and aprons continue to make thousands happy throughout the year. Convenient electronic payments, cash on delivery, easy, just, and generous returns & refunds have all earned the love of our buyers. We handle complaints with tenderness and sincere hearts. We commit to the best price and quality.
          
        </p>
      </div>
    </motion.div>
  </div>
  );
};

export default Description;

  