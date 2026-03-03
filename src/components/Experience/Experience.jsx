import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ExternalLink, Award, Briefcase, Calendar, MapPin, Globe } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative ml-8 mb-12 group"
    >
      {/* Connection line to main timeline with pulse effect */}
      <div className="absolute -left-8 top-8 w-8 h-0.5 bg-blue-400">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>
      
      {/* Experience Box */}
      <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 
                    shadow-[0_10px_20px_rgba(8,_112,_184,_0.2)] 
                    hover:shadow-[0_20px_30px_rgba(8,_112,_184,_0.3)]
                    transition-all duration-300 transform hover:-translate-y-1">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">{experience.role}</h3>
            </div>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-200"
            >
              {experience.employmentType}
            </motion.span>
          </div>
          
          <div className="space-y-3">
            <p className="text-lg font-semibold text-blue-600 flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>{experience.company}</span>
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>{experience.locationType}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">{experience.description}</p>
          
          {experience.certificateLink && (
            <motion.a
              href={experience.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                        hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Certificates</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Train = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ y: smoothY }}
      className="absolute left-0 -translate-x-1/2 w-8 h-8 z-10"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: 1, ease: "linear" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600 filter drop-shadow-lg">
          <path
            fill="currentColor"
            d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zM6 7h5v3H6V7zm12 0v3h-5V7h5zm-6 5h2v2h-2v-2zm-4 0h2v2H8v-2zm8 0h2v2h-2v-2z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const experiences = [
    {
      role: "Android & AI/ML Developer Intern",
      company: "Zenithindia",
      employmentType: "Internship",
      location: "Jaipur, Rajasthan, India",
      locationType: "Remote",
      duration: "Dec 2025 - Present",
      description: "During my internship, I actively work on developing and maintaining the company’s Android application, where I handle both frontend and backend-related integrations. I am responsible for managing the live application, regularly pushing updates, fixing bugs, and improving overall performance. Along with this, I continuously add new features based on project requirements and user needs to enhance the user experience. I also work on training and optimizing models to improve application intelligence and system efficiency. This role allows me to collaborate closely with the team, ensuring smooth deployments, stable releases, and consistent improvement of the product.",
      certificateLink: "https://drive.google.com/file/d/1s0LF6IlqSZdxHR9RmPc6_o_xsHoPdWOW/view?usp=drivesdk"
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      employmentType: "Self-employed",
      location: "India",
      locationType: "Remote",
      duration: "Aug 2025 - Nov 2025",
      description: "I contribute to open-source projects by working directly on production-level code, where I develop features, resolve issues, refactor existing implementations, and improve overall application stability. Through my participation in GirlScript Summer of Code (GSSoC), I collaborated with mentors and contributors, followed structured workflows, reviewed pull requests, and ensured my contributions aligned with real-world development standards.",
      certificateLink: "https://github.com/HimanshuSingh1531/"
    },
    {
      role: "Full Stack Developer Intern",
      company: "ApexPlanet Software Pvt. Ltd.",
      employmentType: "Internship",
      location: "India",
      locationType: "Remote",
      duration: "August 2025 - Sept 2025",
      description: "During my time at ApexPlanet Software Pvt. Ltd, working on Android and Flutter-based apps used in real-world environments. My contributions include developing and refining features, resolving issues, optimizing performance, and improving overall code quality to ensure stable and smooth user experiences. Through hands-on collaboration and iterative improvements, I help maintain scalable and production-ready mobile applications.",
      certificateLink: "https://drive.google.com/file/d/15uzKEwl-zUdeJzHti9r36GQDP0z0zqjD/view?usp=drivesdk&usp=embed_facebook&usp=embed_facebook"
    },
    {
      role: "Open Source Contributor",
      company: "Hacktoberfest",
      employmentType: "Self-employed",
      location: "India",
      locationType: "Remote",
      duration: "Oct 2024 - Oct 2024",
      description: "During my time at Hacktoberfest, contributed to open-source projects, where I worked on identifying and fixing bugs, improving existing implementations, and contributing to AI/ML-related codebases. My contributions were recognized through earned badges, reflecting consistent participation and meaningful involvement in real-world open-source development.",
      certificateLink: "https://github.com/HimanshuSingh1531/Holopin-Board"
    },
  ];

  return (
    <div className="min-h-screen  py-10 relative overflow-hidden">
      <ParticleBackground />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-6">
            My Experiences
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every project I undertake reflects a journey of growth, innovation and excellence. I'm always on the lookout for new job and freelancing opportunities to apply my skills, grow as a professional, and collaborate to achieve extraordinary results.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
          
          {/* Animated train */}
          <Train scrollYProgress={scrollYProgress} />
          
          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperiencePage;