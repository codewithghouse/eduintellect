import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import LoginModal from './LoginModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Owner', href: '/owner' },
    { name: 'Principal', href: '/principal' },
    { name: 'Teacher', href: '/teacher' },
    { name: 'Student/Parent', href: '/student-parent' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#fbfbfd]/80 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-[#d2d2d7]/40 py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[#0071e3] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="text-white w-5 h-5" />
          </div>
          <span className={cn(
            "text-[21px] font-normal tracking-tight transition-colors duration-300",
            isScrolled ? "text-[#1d1d1f]" : "text-[#1d1d1f]"
          )}>
            Edu<span className="text-[#0071e3]">llent</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative text-[12px] transition-colors duration-300 tracking-[0.008em]",
                  isActive
                    ? "text-[#0071e3] font-medium after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[2px] after:rounded-full after:bg-[#0071e3]"
                    : "text-[#424245] font-normal hover:text-[#1d1d1f]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="text-[12px] font-normal text-[#424245] hover:text-[#1d1d1f] transition-colors duration-300"
          >
            Sign in
          </button>
          <Link to="/register" className="text-[12px] font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full transition-all duration-300">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1d1d1f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fbfbfd]/95 backdrop-blur-2xl border-b border-[#d2d2d7]/40 animate-fade-in">
          <nav className="flex flex-col max-w-[980px] mx-auto px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[17px] font-normal text-[#1d1d1f] py-3 border-b border-[#d2d2d7]/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="text-[17px] text-[#0071e3] font-normal py-2"
              >
                Sign in
              </button>
              <Link
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center text-[17px]"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Header;
