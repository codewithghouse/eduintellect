import { GraduationCap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">EduIntellect</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering schools with futuristic AI-driven management tools. The all-in-one ecosystem for owners, teachers, and parents.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Portals</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Owner Dashboard</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Principal Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Teacher App</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Parent Connect</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-6">Features</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">AI Student Monitoring</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Digital Attendance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Report Generation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Fee Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-brand-500 mt-1" />
                <span>123 Tech Lane, Silicon Valley,<br />Innovation City, 560001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>support@eduintellect.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} EduIntellect School System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
