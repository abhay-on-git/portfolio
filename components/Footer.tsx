import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full md:h-96 h-100 relative">
      <footer className="w-full md:pt-20 py-20 bg-black-100 relative -z-10" id="contact">
        {/* background grid */}
        <div className="w-full absolute left-0 md:-bottom-72 min-h-96 z-0">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>

        <div className="flex flex-col items-center z-20 relative">
          <h1 className="heading lg:max-w-[45vw] text-white">
            Looking to elevate <span className="text-purple">your</span> digital presence?
          </h1>
          <p className="text-white-200 md:mt-10 my-4 text-center">
            Let’s connect and talk about how I can support you in reaching your goals.
          </p>
          <a href="mailto:abhayagnihotri1585@gmail.com" className="z-30">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-12 md:flex-row flex-col justify-between items-center z-20 relative">
          <p className="md:text-base text-sm md:font-normal md:mb-0 mb-10 font-light text-white">
            Copyright © 2024 Abhay Agnihotri
          </p>

          <div className="flex items-center md:gap-3 gap-6 z-30">
            {socialMedia.map((info) => (
              <a
                href={info.link}
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
