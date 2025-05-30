
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faLinkedinIn, faTwitter, faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-maib text-white py-10">
//       <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
//         {/* Logo Section */}
//         <div className="col-span-2 md:col-span-1">
//           <Link href="/" title="Sedra">
//             <img  src="/images/New-MaiprosofLogo/sedraf.png"
//  alt="Maiprosoft Logo" className="h-12 width-[210px] mb-4 mx-auto md:mx-0 white-logo" /> {/* Adjust height as needed */}
//           </Link>
//         </div>

//         {/* About Maiprosoft Section */}
//         <div>
//   <h6 className="font-semibold mb-4">About Sedra</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light ">Careers</Link></li>
//     <li><Link href="#" className="font-light">Latest News</Link></li>
//     <li><Link href="#" className="font-light">Corporate Vision</Link></li>
//     <li><Link href="#" className="font-light">About Sedra</Link></li>
//   </ul>
// </div>

// {/* Discover Section */}
// <div>
//   <h6 className="font-semibold mb-4">Discover</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light">Our Products</Link></li>
//     <li><Link href="#" className="font-light">Our Services</Link></li>
//     <li><Link href="#" className="font-light">Our Partners</Link></li>
//     <li><Link href="#" className="font-light">    Our Global Footprint
//     </Link></li>

//     <li><Link href="#" className="font-light">Case Studies</Link></li>
//   </ul>
// </div>

// {/* Important Links Section */}
// <div>
//   <h6 className="font-semibold mb-4">Important Links</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light">Sedra Club Blue</Link></li>
//     <li><Link href="#" className="font-light">Press Kit</Link></li>
//     <li><Link href="#" className="font-light">Support</Link></li>
//     <li><Link href="#" className="font-light">Secure Usage Policy</Link></li>
//     <li><Link href="#" className="font-light">Privacy Policy</Link></li>

//   </ul>
// </div>


//         {/* Follow Us Section */}
//         <div>
//       <h6 className="font-semibold mb-4">Follow Us</h6>
//       <div className="flex space-x-1">
//         {/* Facebook */}
//         <Link
//           href="#"
//           aria-label="Facebook"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaFacebookF
//             className="text-white transition-colors group-hover:text-[#1877F2]"
//           />
//         </Link>

//         {/* LinkedIn */}
//         <Link
//           href="#"
//           aria-label="LinkedIn"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaLinkedinIn
//             className="text-white transition-colors group-hover:text-[#0077B5]"
//           />
//         </Link>

//         {/* X (formerly Twitter) */}
//         {/* <Link
//           href="https://x.com/maiprosoft"
//           aria-label="X"
//           className="group text-xl p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaTwitter
//             className="text-white transition-colors group-hover:text-[#1DA1F2]"
//           />
//         </Link> */}
//                 <Link
//           href="#"
//           aria-label="X"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 512 512"
//             className="text-white transition-colors group-hover:text-[#fff]"
//             fill="currentColor"
//           >
//             <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//           </svg>
//         </Link>


//         {/* Instagram */}
//         <Link
//           href="#"
//           aria-label="Instagram"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaInstagram
//             className="text-white transition-colors group-hover:text-[#E4405F]"
//           />
//         </Link>
//       </div>
//     </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="container mx-auto px-6 mt-8 border-t border-gray-600 pt-4 grid grid-cols-1 md:grid-cols-3">
//         <p className="text-center md:text-left text-gray-400">© Sedra 2024</p>
//         <div className="text-center hidden md:block"></div>
//         <div className="flex justify-center md:justify-end">
//           <Link href="/employee-services"><i className="icon-sign_in_menu_icon text-xl"></i></Link>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-[#1a2734] font-sans pt-10 pb-6 px-4 md:px-10 relative overflow-hidden">
      {/* Gradient border on top */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300" />
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-row md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <a href="/" title="Sedra" className="block">
            <img
              src="/images/logo/sedra2.png"
              alt="Sedra Logo"
              className="md:w-[180px] w-[110px] h-12 object-contain"
            />
          </a>
          {/* Current Status Ping - right aligned on desktop */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-600 md:ml-auto md:mr-0 md:justify-end justify-center mt-4 md:mt-0">
            <span>Current Status</span>
            <span className="relative flex items-center justify-center md:h-8 md:w-8 h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
            </span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm m-6">
          {/* About */}
          <div>
            <h4 className="mb-4 font-bold text-lg">About Sedra</h4>
            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="/about-sedra" className="hover:text-mai transition">About Sedra</a>
              </li>
            </ul>
          </div>
          {/* Discover */}
          <div>
            <h4 className="mb-4 font-bold text-lg">Discover</h4>
            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-green-600 transition">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition">Our Partners</a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="mb-4 font-bold text-lg">Resources</h4>
            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-green-600 transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition">Case Studies</a>
              </li>
            </ul>
          </div>
          {/* Contact + Social */}
          <div>
            <h4 className="mb-4 font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-700 mb-4">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-600" />
                <a href="mailto:info@sedra.com" className="hover:text-green-600 transition">info@sedra.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-600" />
                <a href="tel:+1234567890" className="hover:text-green-600 transition"> 966 114 229 922</a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-green-600" />
                <span>Mon-Fri 9:00-18:00</span>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-3  mt-2">
              <a href="#" className="p-4 rounded-full bg-gray-200 shadow hover:bg-blue transition" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="p-4 rounded-full bg-gray-200 shadow hover:bg-teal-700 transition" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="p-4 rounded-full bg-gray-200 shadow hover:bg-sky-400 transition" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-4 rounded-full bg-gray-200 shadow hover:bg-pink-300 transition" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 text-xs text-gray-600">
          <p className="mb-3 md:mb-0">&copy; Sedra {new Date().getFullYear()}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-green-600 transition">Terms</a>
            <a href="#" className="hover:text-green-600 transition">Privacy</a>
            <a href="#" className="hover:text-green-600 transition">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
