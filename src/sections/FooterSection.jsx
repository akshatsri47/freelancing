import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #ONELASTVIOLATION
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/videos/image-removebg-preview.png"
            className="absolute top-0 object-contain right-20"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          
          
          <div className="social-btn">
            <img src="./images/whatsapp.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/instagram.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/threads.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>CARSNCOFFEE </p>
            </div>
            <div>
              <p>DEHRADUN</p>
              <p>Student Marketing</p>
              {/* <p>Dairy Dealers</p> */}
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              {/* <p>Tasty Talk</p> */}
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
        
          <p>Copyright © 2025 Cars and Coffee Dehradun - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <Link to="/privacy-policy" className="hover:text-milk transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-milk transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-milk transition-colors">
              Accessibility
            </Link>
            <Link to="/refund-policy" className="hover:text-milk transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
