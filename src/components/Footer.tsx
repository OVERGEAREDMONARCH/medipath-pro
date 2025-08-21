import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MediConnect</h3>
                <p className="text-sm text-white/70">Healthcare Platform</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Revolutionizing healthcare through technology, compassion, and innovation. 
              Connecting patients with providers for better health outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Appointment Booking</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Telemedicine</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Medication Tracking</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Secure Messaging</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/80">support@mediconnect.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">123 Healthcare Ave, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 MediConnect. All rights reserved. HIPAA Compliant Healthcare Platform.
          </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="/security" className="text-white/60 hover:text-white text-sm transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;