import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const EducationPage = () => {
  const educationData = [
    {
      logo: "/mlvtec.png",
      institution: "M.L.V Textile & Engineering College",
      degree: "Bachelor of Technology - BTech",
      specialization: "Information Technology",
      duration: "Sep 2023 - Sep 2027",
      grade: "8.4 CGPA",
      description: "I am an active participant in technical competitions, having won a competition organized under the Bureau of Indian Standards (BIS) and multiple inter-college hackathon trophies. These achievements not only strengthened my problem-solving and teamwork skills but also helped bring recognition and pride to my college through successful participation across institutions.",
      certificatesLink: "https://drive.google.com/drive/folders/your-folder-id"
    },
    // Add more education entries
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen ">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4 mt-8">Education Journey</h1>
          <p className="text-xl text-gray-600">My academic achievements and learning experiences</p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-12"
        >
          {/* Connecting Line */}
          <div className="absolute left-[105px] top-[80px] bottom-20 w-1 bg-gradient-to-b from-blue-600/50 to-transparent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
             

              <div className="bg-white rounded-xl shadow-[0_10px_50px_rgba(8,_112,_184,_0.2)] overflow-hidden hover:shadow-[0_20px_70px_rgba(8,_112,_184,_0.3)] transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 perspective-1000 relative">
                <div className="flex flex-col md:flex-row gap-8 p-8">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 w-48">
                    <div className="w-44 h-44 rounded-xl border-4 border-blue-600/20 p-2  transition-transform duration-300">
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        {edu.institution}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-lg">
                        <span className="font-semibold text-gray-700">{edu.degree}</span>
                        <span className="text-blue-600">|</span>
                        <span className="text-blue-600 font-medium">{edu.specialization}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="bg-blue-50 px-3 py-1 rounded-full">{edu.duration}</span>
                      <span className="bg-blue-50 px-3 py-1 rounded-full font-medium text-blue-600">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>

                    <motion.a
                      href={edu.certificatesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold group"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(8, 112, 184, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificates
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;