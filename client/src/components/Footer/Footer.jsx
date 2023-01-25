import React from "react";
import { FooterWrapper } from "./FooterStyles";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="info">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4089532661824!2d-58.40665038103647!3d-34.59381901112233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca909cae8f17%3A0x6c62e1bea5aa3492!2sAv.%20Pueyrred%C3%B3n%201416%2C%20C1118%20CABA!5e0!3m2!1ses-419!2sar!4v1665946413471!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link to="/">
        <img src="https://res.cloudinary.com/duafuhu8k/image/upload/v1668786936/astrogames/logo_y6vajp.png" alt="logo" />
        </Link>

        <IconContext.Provider value={{ color: "#FFF", size: "40px" }}>
          <div className="icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram
                style={{
                  filter: "drop-shadow(0 0 0.8em #02b3ab)",
                }}
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                style={{
                  filter: "drop-shadow(0 0 0.8em #02b3ab)",
                }}
              />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <BsTwitter
                style={{
                  filter: "drop-shadow(0 0 0.8em #02b3ab)",
                }}
              />
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <div>
        <p>
          © Todos los derechos reservados. Creado por{" "}
          <a
            href="https://www.linkedin.com/in/luciacastro2108/"
            target="_blank"
            rel="noreferrer"
          >
            Lucía Castro
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
