import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, GraduationCap, Users, ArrowRight } from 'lucide-react';

const DASHBOARDS = [
  {
    to: '/owner',
    title: 'Owner Dashboard',
    description: 'Every branch, every metric, every decision — at a glance.',
    icon: Building2,
    brand: '#0071e3',
  },
  {
    to: '/principal',
    title: 'Principal Dashboard',
    description: 'Run your school with AI-powered intelligence.',
    icon: ShieldCheck,
    brand: '#003ECC',
  },
  {
    to: '/teacher',
    title: 'Teacher Dashboard',
    description: 'Less paperwork. More teaching. AI in your toolkit.',
    icon: GraduationCap,
    brand: '#059669',
  },
  {
    to: '/parent',
    title: 'Parent Dashboard',
    description: 'Stay close to every milestone — in real time.',
    icon: Users,
    brand: '#d97706',
  },
];

const DashboardLinks = () => (
  <section id="dashboards" className="py-20 md:py-24 bg-[#fbfbfd]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[14px] font-normal tracking-[-0.01em] mb-3 text-[#0071e3]">
          One platform · Four dashboards
        </p>
        <h2 className="text-[36px] md:text-[52px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-4">
          Explore every role.
        </h2>
        <p className="text-[#86868b] text-[18px] md:text-[19px] font-light max-w-[620px] mx-auto leading-[1.45]">
          Edullent connects every role in a school through one unified intelligence layer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {DASHBOARDS.map(({ to, title, description, icon: Icon, brand }) => (
          <Link
            key={to}
            to={to}
            className="group bg-white rounded-[20px] p-6 md:p-7 border border-[rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.15)] flex flex-col"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
              style={{ background: `${brand}14`, color: brand, boxShadow: `0 6px 16px ${brand}1f` }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-[18px] md:text-[19px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2">
              {title}
            </h3>
            <p className="text-[13.5px] text-[#86868b] leading-[1.5] mb-5 flex-1">
              {description}
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ color: brand }}
            >
              Explore <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardLinks;
