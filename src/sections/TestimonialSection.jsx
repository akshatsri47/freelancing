import { useRef, useState, useEffect } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: true,
        },
      });

      tl.to(".testimonials-section .first-title", {
        xPercent: 70,
      })
        .to(
          ".testimonials-section .sec-title",
          {
            xPercent: 25,
          },
          "<"
        )
        .to(
          ".testimonials-section .third-title",
          {
            xPercent: -50,
          },
          "<"
        );

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    } else {
      // Mobile discrete video slider
      // Initialize videos for mobile
      setTimeout(() => {
        vdRef.current.forEach((video, index) => {
          if (video) {
            video.load();
            // Only play the first video initially
            if (index === 0) {
              setTimeout(() => {
                video.play().catch(error => {
                  console.log(`Video ${index} auto-play failed:`, error);
                });
              }, 500);
            }
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
      console.log(`Video ${index} loaded successfully`);
      // On mobile, try to play video immediately
      video.play().catch(error => {
        console.log('Auto-play failed on mobile:', error);
      });
    }
  };

  // Mobile slider navigation functions
  const goToVideo = (index) => {
    if (index >= 0 && index < cards.length) {
      console.log(`Switching to video ${index}`);
      setCurrentVideoIndex(index);
      
      // Pause all videos
      vdRef.current.forEach((video, i) => {
        if (video) {
          video.pause();
          console.log(`Paused video ${i}`);
        }
      });
      
      // Play the current video
      const currentVideo = vdRef.current[index];
      if (currentVideo) {
        console.log(`Playing video ${index}`);
        currentVideo.play().catch(error => {
          console.log('Video play failed:', error);
        });
      } else {
        console.log(`Video ${index} not found`);
      }
      
      // Animate slider position
      if (sliderRef.current) {
        gsap.to(sliderRef.current, {
          x: -index * 100 + "%",
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }
  };

  const nextVideo = () => {
    if (currentVideoIndex < cards.length - 1) {
      goToVideo(currentVideoIndex + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      goToVideo(currentVideoIndex - 1);
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
        // Swipe right - go to previous video
        prevVideo();
      } else {
        // Swipe left - go to next video
        nextVideo();
      }
    }
    
    setIsDragging(false);
  };

  // Set CSS variable for video count and initialize first video
  useEffect(() => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.style.setProperty('--video-count', cards.length);
      // Initialize the first video
      setTimeout(() => {
        goToVideo(0);
      }, 1000);
    }
  }, [isMobile, cards.length]);

  // Scroll-based navigation
  useEffect(() => {
    if (!isMobile) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Simple scroll detection - you can enhance this
        const scrollY = window.scrollY;
        const sectionTop = document.querySelector('.testimonials-section')?.offsetTop || 0;
        const sectionHeight = document.querySelector('.testimonials-section')?.offsetHeight || 0;
        
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
          // Calculate which video should be active based on scroll position within section
          const scrollProgress = (scrollY - sectionTop) / sectionHeight;
          const targetIndex = Math.min(Math.floor(scrollProgress * cards.length), cards.length - 1);
          
          if (targetIndex !== currentVideoIndex) {
            goToVideo(targetIndex);
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile, currentVideoIndex]);


  return (
    <section className="testimonials-section">
      {isMobile ? (
        // Mobile discrete video slider
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
                <div key={index} className="mobile-testimonial-video">
                  <video
                    ref={(el) => (vdRef.current[index] = el)}
                    src={card.src}
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    poster={card.img}
                    onLoadedData={() => handleVideoLoad(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Video indicators */}
          <div className="mobile-video-indicators">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentVideoIndex ? 'active' : ''}`}
                onClick={() => goToVideo(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop layout
        <div className="absolute size-full flex flex-col items-center pt-[5vw]">
          <h1 className="text-black first-title">What's</h1>
          <h1 className="text-light-brown sec-title">Everyone</h1>
          <h1 className="text-black third-title">Talking</h1>
        </div>
      )}

      {!isMobile && (
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
                autoPlay
                preload="metadata"
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                className="size-full object-cover"
                poster={card.img}
                onLoadedData={() => handleVideoLoad(index)}
                onTouchStart={() => handlePlay(index)}
                onTouchEnd={() => handlePause(index)}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;