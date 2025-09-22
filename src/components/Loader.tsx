import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 }
    )
      .to(textRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        delay: 0.5,
      })
      .to(overlayRef.current, {
        y: "-100%",
        duration: 1.2,
      });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
    >
      <h1 ref={textRef} className="text-white text-4xl md:text-6xl font-bold whitespace-nowrap">
        #One Last <span className="text-red-500">Violation</span>
      </h1>
    </div>
  );
};

export default Loader;
