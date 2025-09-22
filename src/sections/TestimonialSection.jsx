import { useRef, useState, useEffect } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const sliderRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    // Only apply complex animations on desktop
    if (!isMobile && !isTablet) {
      gsap.set(".testimonials-section", {
        marginTop: "-140vh",
      });

      // Optimized title animations with better performance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: 1.2, // Reduced from true for smoother performance
          anticipatePin: 1, // Better pinning performance
        },
      });

      tl.to(".testimonials-section .first-title", {
        xPercent: 70,
        ease: "none", // Use none for better scroll performance
      })
        .to(
          ".testimonials-section .sec-title",
          {
            xPercent: 25,
            ease: "none",
          },
          "<"
        )
        .to(
          ".testimonials-section .third-title",
          {
            xPercent: -50,
            ease: "none",
          },
          "<"
        );

      // Optimized pinning with better performance
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.2, // Reduced from 1.5
          pin: true,
          anticipatePin: 1, // Better pinning performance
          invalidateOnRefresh: true, // Better refresh handling
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
        // Add hardware acceleration
        force3D: true,
      });
    } else {
      // Simple mobile animations
      gsap.from(".vd-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        force3D: true, // Hardware acceleration
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.2, // Optimized scrub value
        },
      });

      // Optimized video initialization for mobile
      setTimeout(() => {
        vdRef.current.forEach((video, index) => {
          if (video) {
            video.preload = "metadata"; // Only load metadata on mobile
            video.load();
            // Try to play after a short delay
            setTimeout(() => {
              video.play().catch(error => {
                console.log(`Video ${index} auto-play failed:`, error);
              });
            }, 500);
          }
        });
      }, 1000);
    }
  }, [isMobile, isTablet]);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    if (video) {
      video.play().catch(error => {
        console.log('Video play failed:', error);
        // Fallback: show poster image or handle error
      });
    }
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    if (video) {
      video.pause();
    }
  };

  const handleVideoLoad = (index) => {
    const video = vdRef.current[index];
    if (video && isMobile) {
      // On mobile, try to play video immediately
      video.play().catch(error => {
        console.log('Auto-play failed on mobile:', error);
      });
    }
  };

  // Mobile image slider functions
  const goToImage = (index) => {
    if (index >= 0 && index < cards.length) {
      setCurrentImageIndex(index);
      
      // Animate slider position
      if (sliderRef.current) {
        gsap.to(sliderRef.current, {
          x: -index * 100 + "%",
          duration: 0.6,
          ease: "power2.out"
        });
      }
    }
  };

  const nextImage = () => {
    if (currentImageIndex < cards.length - 1) {
      goToImage(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      goToImage(currentImageIndex - 1);
    }
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const deltaX = currentX - startX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe right - go to previous image
        prevImage();
      } else {
        // Swipe left - go to next image
        nextImage();
      }
    }
    
    setIsDragging(false);
  };

  // Initialize mobile image slider
  useEffect(() => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.style.setProperty('--image-count', cards.length);
      // Initialize the first image
      setTimeout(() => {
        goToImage(0);
      }, 500);
    }
  }, [isMobile, cards.length]);

  return (
    <section className="testimonials-section">
      {isMobile ? (
        // Mobile image slider
        <div className="mobile-testimonials-wrapper">
          <div className="mobile-testimonials-header">
            <h1 className="text-black">What's</h1>
            <h1 className="text-light-brown">Everyone</h1>
            <h1 className="text-black">Talking</h1>
          </div>
          
          <div className="mobile-testimonials-slider">
            <div 
              ref={sliderRef}
              className="mobile-testimonials-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {cards.map((card, index) => (
                <div key={index} className="mobile-testimonial-image">
                  <img
                    src={card.img}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  {/* <div className="image-overlay">
                    <div className="image-name">{card.name}</div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          
          {/* Image indicators */}
          <div className="mobile-image-indicators">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop video layout
        <>
          <div className="absolute size-full flex flex-col items-center pt-[5vw]">
            <h1 className="text-black first-title">What's</h1>
            <h1 className="text-light-brown sec-title">Everyone</h1>
            <h1 className="text-black third-title">Talking</h1>
          </div>

          <div className="pin-box">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`vd-card ${card.translation} ${card.rotation}`}
                onMouseEnter={() => handlePlay(index)}
                onMouseLeave={() => handlePause(index)}
              >
                <video
                  ref={(el) => (vdRef.current[index] = el)}
                  src={card.src}
                  playsInline
                  muted
                  loop
                  autoPlay={!isMobile}
                  preload={isMobile ? "metadata" : "auto"}
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="true"
                  className="size-full object-cover"
                  poster={card.img}
                  style={{ willChange: "transform" }}
                  onLoadedData={() => handleVideoLoad(index)}
                  onTouchStart={() => handlePlay(index)}
                  onTouchEnd={() => handlePause(index)}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TestimonialSection;