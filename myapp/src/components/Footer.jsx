import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10 mt-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Company Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Partner with Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Ride with Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Follow Us</h4>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Swiggy Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
