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
    if (!contentRef.current || !titleRef.current || !heroRef.current) return;

    // Initial setup
    gsap.set([titleRef.current, ".team-card", ".team-section"], { opacity: 0, y: 50 });

    // Hero section animation
    gsap.fromTo(heroRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Main content entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(".team-section", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.4")
    .to(".team-card", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      image: "/photos/team1.jpg",
      description: "Passionate about automotive culture and community building. Sarah brings 8+ years of event management experience to our team.",
      social: {
        instagram: "@sarahj_events",
        linkedin: "sarah-johnson-events"
      }
    },
    {
      name: "Mike Chen",
      role: "Technical Coordinator",
      image: "/photos/team2.jpg", 
      description: "Our tech wizard who ensures every event runs smoothly. Mike handles all technical aspects from sound systems to live streaming.",
      social: {
        instagram: "@mikechen_tech",
        linkedin: "mike-chen-tech"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      image: "/photos/team3.jpg",
      description: "The heart of our community engagement. Emma connects with car enthusiasts and builds lasting relationships within our community.",
      social: {
        instagram: "@emma_community",
        linkedin: "emma-rodriguez-community"
      }
    },
    {
      name: "David Park",
      role: "Safety & Security Lead",
      image: "/photos/team4.jpg",
      description: "Ensuring every event is safe and secure. David brings military precision and automotive passion to keep our community protected.",
      social: {
        instagram: "@david_safety",
        linkedin: "david-park-safety"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Marketing & Communications",
      image: "/photos/team5.jpg",
      description: "Creative storyteller who brings our events to life through compelling visuals and engaging content across all platforms.",
      social: {
        instagram: "@lisa_creative",
        linkedin: "lisa-thompson-marketing"
      }
    },
    {
      name: "Alex Kumar",
      role: "Logistics Coordinator",
      image: "/photos/team6.jpg",
      description: "The master of organization who ensures everything is perfectly coordinated. Alex makes the impossible look effortless.",
      social: {
        instagram: "@alex_logistics",
        linkedin: "alex-kumar-logistics"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-milk">
      <NavBar showLogo={true} />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-gradient-to-br from-dark-brown to-mid-brown min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-5">
          <h1 className="text-milk text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 opacity-0" ref={titleRef}>
            Our Team
          </h1>
          <p className="text-milk/90 font-paragraph text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals who make Cars & Coffee Dehradun possible. 
            Each member brings unique expertise and unwavering dedication to our automotive community.
          </p>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-milk/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-milk/20 rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-milk/30 rotate-45"></div>
      </div>

      <div ref={contentRef} className="container mx-auto px-5 py-20">
        {/* Team Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="team-section text-center mb-16">
            <h2 className="text-dark-brown text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Core Team
            </h2>
            <p className="text-dark-brown/70 font-paragraph text-xl max-w-3xl mx-auto">
              Our dedicated team members work tirelessly to create unforgettable automotive experiences 
              and foster a vibrant community of car enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-light-brown shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23e3a458'/%3E%3Ctext x='64' y='64' font-family='Arial' font-size='48' text-anchor='middle' dy='0.35em' fill='white'%3E" + member.name.charAt(0) + "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <h3 className="text-dark-brown text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-mid-brown text-lg font-semibold uppercase tracking-wide mb-4">{member.role}</p>
                  <p className="text-dark-brown/80 font-paragraph text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
                
                <div className="border-t border-light-brown/30 pt-6">
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-mid-brown text-milk rounded-full hover:bg-light-brown transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-mid-brown text-milk rounded-full hover:bg-light-brown transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team Section */}
          <div className="team-section bg-gradient-to-r from-mid-brown to-light-brown rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-milk text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              Join Our Team
            </h3>
            <p className="text-milk/90 font-paragraph text-xl mb-8 max-w-3xl mx-auto">
              Passionate about cars and community? We're always looking for dedicated individuals 
              to join our growing team and help us create amazing automotive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:join@carsandcoffeedehradun.com"
                className="bg-milk text-dark-brown font-bold py-4 px-8 rounded-full hover:bg-milk/90 transition-all duration-300 hover:scale-105"
              >
                Send Us Your Resume
              </a>
              <a 
                href="mailto:info@carsandcoffeedehradun.com"
                className="border-2 border-milk text-milk font-bold py-4 px-8 rounded-full hover:bg-milk hover:text-dark-brown transition-all duration-300 hover:scale-105"
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
