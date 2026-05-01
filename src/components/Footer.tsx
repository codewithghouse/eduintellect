import { Link } from 'react-router-dom';

const PORTAL_URLS = {
  owner: import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/',
  principal: import.meta.env.VITE_PRINCIPAL_DASHBOARD_URL || 'https://principal-dashboard-seven.vercel.app/',
  teacher: import.meta.env.VITE_TEACHER_DASHBOARD_URL || 'https://teacher-dashboard-ochre.vercel.app/',
  parent: import.meta.env.VITE_PARENT_DASHBOARD_URL || 'https://parent-dashboard-ten.vercel.app/',
};

const FEATURE_LINKS = [
  { label: 'AI Student Monitoring', to: '/features/ai-monitoring' },
  { label: 'Digital Attendance',    to: '/features/attendance' },
  { label: 'Report Generation',     to: '/features/reports' },
  { label: 'Fee Management',        to: '/features/fees' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/legal/privacy' },
  { label: 'Terms of Use',   to: '/legal/terms' },
  { label: 'Legal',          to: '/legal' },
];

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]/60">
      {/* Links section */}
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img
                src="/edullent-icon.png"
                alt="Edullent"
                className="w-7 h-7 rounded-lg object-contain"
                draggable={false}
              />
              <span className="text-[17px] font-normal text-[#1d1d1f] tracking-tight">
                Edu<span className="text-[#0071e3]">llent</span>
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
              <li><a href={PORTAL_URLS.owner}     target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Owner Dashboard</a></li>
              <li><a href={PORTAL_URLS.principal} target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Principal Portal</a></li>
              <li><a href={PORTAL_URLS.teacher}   target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Teacher App</a></li>
              <li><a href={PORTAL_URLS.parent}    target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">Parent Connect</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[#1d1d1f] font-normal text-[12px] mb-4 tracking-[-0.01em]">Features</h4>
            <ul className="space-y-3">
              {FEATURE_LINKS.map(f => (
                <li key={f.to}>
                  <Link to={f.to} className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1d1d1f] font-normal text-[12px] mb-4 tracking-[-0.01em]">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@edullent.com" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">
                  support@edullent.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="text-[#424245] text-[12px] leading-[1.47]">
                Hyderabad, Telangana,<br />India 500032
              </li>
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
            {LEGAL_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#424245] hover:text-[#1d1d1f] text-[12px] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
