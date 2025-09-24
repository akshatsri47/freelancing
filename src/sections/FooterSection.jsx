import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1 "
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-white py-5 whitespace-nowrap">
          #One Last <span className="text-accent-red font-bold drop-shadow-lg">Violation</span>
          </h1>
        </div>
{/* 
        {isMobile ? (
          // <img
          //   src="/images/footer-drink.png"
          //   className="absolute top-0 object-contain"
          // />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )} */}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <a 
            href="https://www.threads.com/@carsncoffee.doon?igshid=NTc4MTIwNjQ2YQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn group"
          >
            <img src="./images/threads.svg" alt="Threads" className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="https://www.instagram.com/carsncoffee.doon/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn group"
          >
            <img src="./images/insta.svg" alt="Instagram" className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          <div className="social-btn group">
            <img src="./images/whatsapp.svg" alt="WhatsApp" className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          {/* Desktop: Spread content across the full width */}
          <div className="hidden md:flex items-start justify-between w-full">
            {/* Left section - Brand */}
            <div className="flex flex-col">
              <p className="text-accent-red font-bold text-xl tracking-wider mb-4">CARSNCOFFEE</p>
              <div className="space-y-1">
                <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">carsncoffeedoon</p>
                <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">car meetup</p>
              </div>
            </div>

            {/* Center section - Navigation */}
            <div className="flex flex-col space-y-1">
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Company</p>
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Contacts</p>
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Blog</p>
            </div>

            {/* Right section - Additional info */}
            <div className="flex flex-col space-y-1">
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Events</p>
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Gallery</p>
              <p className="hover:text-accent-red transition-colors duration-300 cursor-pointer">Join Us</p>
            </div>
          </div>

          {/* Mobile: Minimal layout - only show brand name */}
          <div className="flex items-center justify-center md:hidden">
            <div>
              <p className="text-accent-red font-bold text-xl tracking-wider">CARSNCOFFEE</p>
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */} 
          <p className="text-milk/80">Copyright © 2025 carsncoffee - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <a 
              href="/privacy-policy" 
              className="hover:text-accent-red transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-and-conditions" 
              className="hover:text-accent-red transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;