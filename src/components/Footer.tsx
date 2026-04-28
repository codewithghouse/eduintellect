import { GraduationCap } from 'lucide-react';

const PORTAL_URLS = {
  owner: import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/',
  principal: import.meta.env.VITE_PRINCIPAL_DASHBOARD_URL || 'https://principal-dashboard-seven.vercel.app/',
  teacher: import.meta.env.VITE_TEACHER_DASHBOARD_URL || 'https://teacher-dashboard-ochre.vercel.app/',
  parent: import.meta.env.VITE_PARENT_DASHBOARD_URL || 'https://parent-dashboard-ten.vercel.app/',
};

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]/60">
      {/* Links section */}
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-7 h-7 bg-[#0071e3] rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-4 h-4" />
              </div>
              <span className="text-[17px] font-normal text-[#1d1d1f] tracking-tight">
                Edu<span className="text-[#0071e3]">Intellect</span>
              </span>
            </div>
            <p className="text-[#86868b] text-[12px] leading-[1.47] max-w-[250px] mx-auto md:mx-0">
              Empowering schools with AI-driven management tools. The all-in-one ecosystem for modern education.
            </p>
          </div>

          {/* Portals */}
          <div>
            <h4 className="text-[#1d1d1f] font-normal text-[12px] mb-4 tracking-[-0.01em]">Portals</h4>
            <ul className="space-y-3">
              <li><a href={PORTAL_URLS.owner} target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Owner Dashboard</a></li>
              <li><a href={PORTAL_URLS.principal} target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Principal Portal</a></li>
              <li><a href={PORTAL_URLS.teacher} target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Teacher App</a></li>
              <li><a href={PORTAL_URLS.parent} target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Parent Connect</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[#1d1d1f] font-normal text-[12px] mb-4 tracking-[-0.01em]">Features</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">AI Student Monitoring</a></li>
              <li><a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Digital Attendance</a></li>
              <li><a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Report Generation</a></li>
              <li><a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Fee Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1d1d1f] font-normal text-[12px] mb-4 tracking-[-0.01em]">Contact</h4>
            <ul className="space-y-3">
              <li className="text-[#424245] text-[12px]">support@edullent.com</li>
              <li className="text-[#424245] text-[12px]">+1 (234) 567-890</li>
              <li className="text-[#424245] text-[12px] leading-[1.47]">123 Tech Lane, Silicon Valley,<br />Innovation City, 560001</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d2d2d7]/60">
        <div className="max-w-[980px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#86868b] text-[12px] text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} Edullent. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Terms of Use</a>
            <a href="#" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
