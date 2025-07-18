import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">YourBrand</h2>
          <p className="text-sm leading-relaxed">
            <i className="fa fa-check text-green-500 mr-2"></i> High-speed performance<br />
            <i className="fa fa-check text-green-500 mr-2"></i> 24/7 Expert Support<br />
            <i className="fa fa-check text-green-500 mr-2"></i> Free SSL & Backups
          </p>
        </div>

        {/* Hosting Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><i className="fa fa-server text-accent mr-2"></i><Link href={"/hosting"} className="hover:text-white">Web Hosting</Link></li>
            <li><i className="fa fa-globe text-accent mr-2"></i><Link href={"/domain"} className="hover:text-white">Domain Registration</Link></li>
            <li><i className="fa fa-envelope text-accent mr-2"></i><Link href={"/email"} className="hover:text-white">Email Hosting</Link></li>
            <li><i className="fa fa-shield text-accent mr-2"></i><Link href={"/ssl"} className="hover:text-white">SSL Certificate</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><i className="fa fa-info-circle text-accent mr-2"></i><a href="#" className="hover:text-white">About Us</a></li>
            <li><i className="fa fa-edit text-accent mr-2"></i><a href="#" className="hover:text-white">Blog</a></li>
            <li><i className="fa fa-briefcase text-accent mr-2"></i><a href="#" className="hover:text-white">Careers</a></li>
            <li><i className="fa fa-envelope text-accent mr-2"></i><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-3"><i className="fa fa-life-ring text-accent mr-2"></i> 24/7 Support Available</p>
          <p className="text-sm mb-3"><i className="fa fa-envelope text-accent mr-2"></i> support@yourbrand.com</p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-white"><i className="fa fa-facebook text-accent"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-twitter text-accent"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-linkedin text-accent"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-instagram text-accent"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} IruHost. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-white"><i className="fa fa-lock mr-1 text-accent"></i> Privacy Policy</a>
          <a href="#" className="hover:text-white"><i className="fa fa-file-contract mr-1 text-accent"></i> Terms of Service</a>
          <a href="#" className="hover:text-white"><i className="fa fa-sitemap mr-1 text-accent"></i> Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;