import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: 1.2, // Reduced from true for better performance
          pin: true,
          anticipatePin: 1, // Better pinning performance
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
        force3D: true, // Hardware acceleration
      });
    }

    // Subtle animation for images (tilt + scale)
    gsap.utils.toArray(".flavor-image").forEach((img, i) => {
      gsap.fromTo(
        img,
        { scale: 0.9, rotate: i % 2 === 0 ? -5 : 5 },
        {
          scale: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1.2, // Reduced from true for better performance
          },
          ease: "power2.out",
        }
      );
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors flex gap-8">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={flavor.img}
              alt={flavor.name}
              className="flavor-image w-full h-full object-cover rounded-xl shadow-lg"
              loading="lazy"
              style={{ willChange: "transform" }}
            />

            {/* <h1 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
              {flavor.name}
            </h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;