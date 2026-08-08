import Link from "next/link";

const Footer = () => {
  return (
    <>
    <footer id="footer" className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Description */}
        <div>
          <Link href={"/"} className="header-left h-[40px] w-[60px] flex" scroll={true}>
            <img src="/logo.png" alt="logo" className="h-full w-full" />
          </Link>
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
            <li><i className="fa fa-server text-accent mr-2"></i><Link href={"/hosting"} className="hover:text-white" scroll={true}>Shared Hosting</Link></li>
            <li><i className="fa fa-wordpress text-accent mr-2"></i><Link href={"/wordpress-hosting"} className="hover:text-white" scroll={true}>WordPress Hosting</Link></li>
            <li><i className="fa fa-sitemap text-accent mr-2"></i><Link href={"/reseller-hosting"} className="hover:text-white" scroll={true}>Reseller Hosting</Link></li>
            <li><i className="fa fa-globe text-accent mr-2"></i><Link href={"/domain"} className="hover:text-white" scroll={true}>Domain Registration</Link></li>
            <li><i className="fa fa-envelope text-accent mr-2"></i><Link href={"/email"} className="hover:text-white" scroll={true}>Email Hosting</Link></li>
            <li><i className="fa fa-shield text-accent mr-2"></i><Link href={"/ssl"} className="hover:text-white" scroll={true}>SSL Certificate</Link></li>
            <li><i className="fa fa-code text-accent mr-2"></i><Link href={"/web-development"} className="hover:text-white" scroll={true}>Web Development</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><i className="fa fa-info-circle text-accent mr-2"></i><Link href="/about" className="hover:text-white" scroll={true}>About Us</Link></li>
            <li><i className="fa fa-edit text-accent mr-2"></i><Link href="/blogs" className="hover:text-white" scroll={true}>Blog</Link></li>
          </ul>
        </div>

        {/* Contact & Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-3"><i className="fa fa-life-ring text-accent mr-2"></i> 24/7 Support Available</p>
          <p className="text-sm mb-3"><i className="fa fa-envelope text-accent mr-2"></i> contact@iruhost.com</p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="https://web.facebook.com/profile.php?id=61579213176080" aria-label="Visit our Facebook page" target="_blank" className="hover:text-white"><i className="fa fa-facebook text-accent"></i></a>
            <a href="https://x.com/iruapsudio" aria-label="Visit our X (Twitter) page" target="_blank" className="hover:text-white"><i className="fa fa-twitter text-accent"></i></a>
            <a href="https://www.instagram.com/iruapstudio/" aria-label="Visit our Instagram page" target="_blank" className="hover:text-white"><i className="fa fa-instagram text-accent"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} IruHost. An Iruap Tech Studio Limited Web Hosting Business. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-white" scroll={true}><i className="fa fa-lock mr-1 text-accent"></i> Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white" scroll={true}><i className="fa fa-file-contract mr-1 text-accent"></i> Terms of Service</Link>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;