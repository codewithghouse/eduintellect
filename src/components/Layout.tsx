import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#fbfbfd] flex flex-col selection:bg-[#0071e3]/20 selection:text-[#1d1d1f]">
      <Header />
      <main className="flex-grow" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
