import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
// import {
//   GiDogBowl,
//   GiPetHouse,
//   GiTrainingDog,
//   GiMedicalPack,
// } from "react-icons/gi";

// Payment logos
import visa from "../assets/payments/visa.png";
import mastercard from "../assets/payments/mastercard.png";
import creditcard from "../assets/payments/bank-transfer.png";
import bkash from "../assets/payments/bankcard.png";
import paypal from "../assets/payments/paypal.png";
import bank from "../assets/payments/card (2).png";

const Footer = () => {
  const services = [
    // { name: "Pet Adoption",  anchor: "#adoption" },
    // { name: "Pet Grooming", icon: <GiDogBowl />, anchor: "#grooming" },
    // { name: "Pet Training", icon: <GiTrainingDog />, anchor: "#training" },
    // { name: "Veterinary Care", icon: <GiMedicalPack />, anchor: "#veterinary" },
    { name: "Pet Adoption",  anchor: "#adoption" },
    { name: "Pet Grooming",  anchor: "#grooming" },
    { name: "Pet Training",  anchor: "#training" },
    { name: "Veterinary Care",  anchor: "#veterinary" },
  ];

  const payments = [
    { src: visa, alt: "Visa" },
    { src: mastercard, alt: "MasterCard" },
    { src: creditcard, alt: "Credit Card" },
    { src: bkash, alt: "bKash" },
    { src: paypal, alt: "PayPal" },
    { src: bank, alt: "Dutch Bangla Bank" },
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img className="ml-4 w-52" src="/images/new-logo.png" alt="" />
            
          </Link>
          <p className="text-gray-400">
            Connecting loving families with pets in need of a forever home.
            Adopt, don’t shop!
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-red-600 inline-block">
            <Link to="/services" className="hover:text-red-500">
              Services
            </Link>
          </h2>
          <ul className=" text-gray-300">
            {services.map((service) => (
              <li
                key={service.name}
                className="flex items-center gap-2 hover:text-red-500"
              >
                {/* <span className="text-red-500">{service.icon}</span> */}
                <Link
                  to={`/services${service.anchor}`}
                  className="hover:text-red-500"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-red-600 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Payment Options */}
        <div className="flex flex-wrap items-center gap-3">
          {payments.map((payment) => (
            <img
              key={payment.alt}
              src={payment.src}
              alt={payment.alt}
              className="w-12 h-8 object-contain transform transition duration-300 hover:scale-110 hover:brightness-125"
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-red-600 mt-6 py-6 px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Social Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          {[
            { icon: FaFacebookF, link: "https://facebook.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
            { icon: FaInstagram, link: "https://instagram.com" },
            { icon: FaLinkedin, link: "https://linkedin.com" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-red-600 rounded-full hover:bg-red-600 transition transform hover:scale-110"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Pet Adoption Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
