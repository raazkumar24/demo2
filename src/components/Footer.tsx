import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Clock } from 'lucide-react';

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/membership', label: 'Memberships' },
  { path: '/pool-booking', label: 'Pool Booking' },
  { path: '/trainers', label: 'Trainers' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

const services = [
  'Strength Training',
  'Cardio Zone',
  'Swimming Pool',
  'Group Classes',
  'Personal Training',
  'Nutrition Guidance',
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D] border-t border-white/5">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                R FITNESS
              </span>
            </Link>
            <p className="text-[#B8BCC8] text-sm leading-relaxed mb-6">
              Premium gym and swimming pool in Chandigarh. Train hard, swim
              strong, and live bold with world-class facilities and expert
              trainers.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#B8BCC8] hover:text-white hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#B8BCC8] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#B8BCC8] text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                <span className="text-[#B8BCC8] text-sm">
                  Sector 26, Chandigarh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-[#B8BCC8] text-sm hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                <a
                  href="mailto:hello@rfitness.in"
                  className="text-[#B8BCC8] text-sm hover:text-white transition-colors"
                >
                  hello@rfitness.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                <div className="text-[#B8BCC8] text-sm">
                  <p>Gym: 5:00 AM - 11:00 PM</p>
                  <p>Pool: 6:00 AM - 10:00 AM / 5:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#B8BCC8] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} R Fitness. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-[#B8BCC8] text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-[#B8BCC8] text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
