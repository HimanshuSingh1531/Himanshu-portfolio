import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Facebook, Link, BookOpen, MessageCircle, Users } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import emailjs from "emailjs-com";

const ThreadsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    fill="currentColor"
    className={className}
  >
    <path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z"/>
  </svg>
);

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yd10psv",
        "template_ban9qtx",
        e.target,
        "ieCKaxurU8i6Mlz2h"
      )
      .then(
        () => {
          alert("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/HimanshuSingh1531", label: "GitHub", bgColor: "bg-gray-800" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/himanshusingh3115/", label: "LinkedIn", bgColor: "bg-blue-600" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:himanshusingh20082@gmail.com", label: "Email", bgColor: "bg-red-500" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Himanshu__75", label: "X", bgColor: "bg-sky-500" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/himanshu.singh015/", label: "Instagram", bgColor: "bg-pink-600" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://stackoverflow.com/users/30155509/himanshu-singh", label: "Stack Overflow", bgColor: "bg-orange-500" },
    { icon: <Link className="w-5 h-5" />, href: "https://linktr.ee/himanshu.singh15", label: "Linktree", bgColor: "bg-green-500" },
    { icon: <ThreadsIcon className="w-5 h-5" />, href: "https://www.threads.net/@himanshu.singh015", label: "Threads", bgColor: "bg-black" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://medium.com/@HimanshuSingh1531", label: "Medium", bgColor: "bg-black" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://leetcode.com/u/HimanshuSingh3115/", label: "leetcode", bgColor: "bg-red-700" },
    { icon: <Users className="w-5 h-5" />, href: "https://www.commudle.com/users/HimanshuSingh15", label: "Commudle", bgColor: "bg-purple-600" }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">

          {/* Hero Section */}
          <div className="relative w-full rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 p-12">
            <div className="max-w-5xl text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Building Digital Experiences That Matter
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed flex item-center justify-center">
                I'm actively seeking opportunities to collaborate on innovative projects and contribute to forward-thinking teams.
                Whether you're looking for a dedicated developer for your team or a collaborative partner for your next project,
                I bring a blend of technical expertise and creative problem-solving to every endeavor.
                Let's explore how we can create something remarkable together!
              </p>
              <div className="mt-8 flex gap-4 flex item-center justify-center">
                <button
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors duration-300"
                  onClick={() => window.location.href = '/projects'}
                >
                  View Projects
                </button>

                <a
                  href="/HIMANSHU_RESUME.pdf"
                  download="HIMANSHU_RESUME.pdf"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex item-center justify-center">
              Find me across the web
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title={social.label}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${social.bgColor} text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Get in Touch</h2>

            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 h-40 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;