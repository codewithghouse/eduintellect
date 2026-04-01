import { GraduationCap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const PORTAL_URLS = {
  owner: import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/',
  principal: import.meta.env.VITE_PRINCIPAL_DASHBOARD_URL || 'https://principal-dashboard-seven.vercel.app/',
  teacher: import.meta.env.VITE_TEACHER_DASHBOARD_URL || 'https://teacher-dashboard-ochre.vercel.app/',
  parent: import.meta.env.VITE_PARENT_DASHBOARD_URL || 'https://parent-dashboard-ten.vercel.app/',
};

const Footer = () => {
  return (
    <footer className="bg-[#002147] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Edu<span className="text-blue-400">Intellect</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Empowering schools with futuristic AI-driven management tools. The all-in-one ecosystem for owners, teachers, and parents.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Portals</h4>
            <ul className="space-y-5">
              <li><a href={PORTAL_URLS.owner} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Owner Dashboard</a></li>
              <li><a href={PORTAL_URLS.principal} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Principal Portal</a></li>
              <li><a href={PORTAL_URLS.teacher} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Teacher App</a></li>
              <li><a href={PORTAL_URLS.parent} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Parent Connect</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Features</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">AI Student Monitoring</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Digital Attendance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Report Generation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors uppercase tracking-wider">Fee Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm text-slate-400 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <span className="leading-relaxed font-medium">123 Tech Lane, Silicon Valley,<br />Innovation City, 560001</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-400 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="font-medium">support@eduintellect.com</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-400 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="font-medium">+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} EduIntellect School System. <br className="md:hidden" /> Crafted for the future.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
