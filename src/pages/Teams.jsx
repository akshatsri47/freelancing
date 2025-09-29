import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import NavBar from "../components/NavBar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(() => {
    // Simple fade-in animation for the entire page
    const tl = gsap.timeline({ delay: 0.1 });
    
    tl.fromTo([heroRef.current, contentRef.current], 
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Naman Gupta",
      
      image: "/photos/team1.jpg",
      description: "A true automobile enthusiast with a wide network in the car community, he is passionate about curating memorable experiences that unite car lovers.",
      social: {
        instagram: "@sarahj_events",
    
      }
    },
    {
      name: "Prince Chaudhary",
     
      image: "/photos/team2.jpg", 
      description: "Passionate about cars since childhood, he treats every build like a toy turned masterpiece, from humble Polos to iconic R8s",
      social: {
        instagram: "@mikechen_tech",
     
      }
    },
    {
      name: "Ritvik Dang",
     
      image: "/photos/team3.jpg",
      description: "Recognized for his sleek builds and distinctive taste, he infuses creativity and unique perspectives that define the brand’s character.",
      social: {
        instagram: "@emma_community",
       
      }
    },
    {
      name: "Debanik Singh",
     
      image: "/photos/team4.jpg",
      description: "The cornerstone of execution, he seamlessly manages anchors, operations, and logistics, ensuring every event is flawlessly delivered.",
      social: {
        instagram: "@david_safety",
       
      }
    },
    {
      name: "Sifat Wason",
 
      image: "/photos/team5.jpg",
      description: "With expertise in marketing and PR, she shapes the brand’s presence, driving meaningful connections and impactful community engagement.",
      social: {
        instagram: "@lisa_creative",
        
      }
    },
    {
      name: "Shaurya Puri",
 
      image: "/photos/team5.jpg",
      description: "With expertise in marketing and PR, she shapes the brand’s presence, driving meaningful connections and impactful community engagement.",
      social: {
        instagram: "@lisa_creative",
        
      }
    },

  ];

  return (
    <div className="min-h-screen bg-milk">
      <NavBar showLogo={true} />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-gradient-to-br from-dark-gray to-mid-gray min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 sm:px-5">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
            Our Team
          </h1>
          <p className="text-white/90 font-paragraph text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-2">
            Meet the passionate individuals who make Cars & Coffee Dehradun possible. 
            Each member brings unique expertise and unwavering dedication to our automotive community.
          </p>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/20 rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-white/30 rotate-45"></div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 sm:px-5 py-12 sm:py-16 md:py-20">
        {/* Team Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-dark-gray text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              Core Team
            </h2>
            <p className="text-dark-gray/70 font-paragraph text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
              Our dedicated team members work tirelessly to create unforgettable automotive experiences 
              and foster a vibrant community of car enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-red/20 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23dc2626'/%3E%3Ctext x='80' y='80' font-family='Arial' font-size='64' text-anchor='middle' dy='0.35em' fill='white'%3E" + member.name.charAt(0) + "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-dark-gray text-xl sm:text-2xl font-bold mb-4">{member.name}</h3>
                  
                  {/* Description */}
                  <p className="text-dark-gray/80 font-paragraph text-sm sm:text-base leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  {/* Instagram Link */}
                  <div className="flex justify-center">
                    <a 
                      href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team Section */}
          <div className="bg-gradient-to-r from-accent-red to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              Join Our Team
            </h3>
            <p className="text-white/90 font-paragraph text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Passionate about cars and community? We're always looking for dedicated individuals 
              to join our growing team and help us create amazing automotive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="mailto:join@carsandcoffeedehradun.com"
                className="bg-white text-accent-red font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Send Us Your Resume
              </a>
              <a 
                href="mailto:info@carsandcoffeedehradun.com"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white hover:text-accent-red transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
