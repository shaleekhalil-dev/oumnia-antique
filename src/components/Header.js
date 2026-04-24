import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', width: '100%', display: 'flex', justifyContent: 'space-around',
      padding: scrolled ? '15px 0' : '25px 0', zIndex: 1000, transition: '0.4s',
      background: scrolled ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #4DB6AC' : 'none'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#212121', fontWeight: 'bold', fontSize: '1.4rem' }}>
        <Coins size={30} color="#4DB6AC" />
        <span>أمنية العتيق</span> 
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '30px', color: '#212121', fontWeight: '600' }}>
        <span style={{ cursor: 'pointer' }}>الرئيسية</span>
        <span style={{ cursor: 'pointer' }}>العملات</span>
        <span style={{ cursor: 'pointer' }}>تواصل معنا</span>
      </div>
    </nav>
  );
};

export default Header;