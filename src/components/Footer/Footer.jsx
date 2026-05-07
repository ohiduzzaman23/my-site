import React from "react";
import logo from "../../assets/abazar-1.png";
import { Container } from "../Container";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-[#c6dddc] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" className="w-15" />
            <p>
              Md. Ohiduzzaman (sobuj)
              <br />
              Providing reliable tech since 2026
            </p>
          </div>
          {/* Footer Right */}
          <div className="flex gap-10 text-center">
            <div>
              <p className="font-semibold text-gray-700 text-xl">Follow Us</p>
              <div className="flex gap-4 text-3xl mt-3">
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaWhatsapp />
                </span>
                <span>
                  <FaXTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p>© Daraz 2026</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
