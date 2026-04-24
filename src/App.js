import React from 'react';
import './styles/Global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CoinGallery from './components/CoinGallery';
import ContactForm from './components/ContactForm';
// استيراد الصورة رقم 6 كخلفية (تأكد من وجودها في المجلد)
import bgWatermark from './assets/images/6.jpg'; 

function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* التوقيع المائي (العلامة المائية) - الصورة رقم 6 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bgWatermark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05, // شفافية خفيفة جداً لتبدو كعلامة مائية
        filter: 'blur(8px) grayscale(100%)', // ضبابية وتحويل للأبيض والأسود لعدم تشتيت العين
        zIndex: -1, // خلف كل العناصر
        pointerEvents: 'none'
      }}></div>

      <Header />
      <Hero />
      
      <div style={{ padding: '80px 0' }}>
        <CoinGallery />
      </div>
      
      <ContactForm />
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px', 
        background: 'rgba(255, 255, 255, 0.5)', // زجاج شفاف فاتح
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid #4DB6AC', // حدود تيركوازية
        color: '#212121' // نصوص سوداء
      }}>
        <p>© 2026 منصة أمنية العتيق - Old Is Gold</p>
      </footer>
    </div>
  );
}

export default App;