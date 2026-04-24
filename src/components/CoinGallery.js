import React from 'react';
import { motion } from 'framer-motion';

// استيراد صورك الفعلية من المجلد
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';

const coins = [
  { id: 1, name: "كنز عتيق 1", period: "مقتنيات أمنية الثمينة", img: img1 },
  { id: 2, name: "كنز عتيق 2", period: "مقتنيات أمنية الثمينة", img: img2 },
  { id: 3, name: "كنز عتيق 3", period: "مقتنيات أمنية الثمينة", img: img3 },
  { id: 4, name: "كنز عتيق 4", period: "مقتنيات أمنية الثمينة", img: img4 },
  { id: 5, name: "كنز عتيق 5", period: "مقتنيات أمنية الثمينة", img: img5 },
];

const CoinGallery = () => {
  return (
    <section className="gallery-section" style={{ padding: '80px 0' }}>
      <h2 className="section-title" style={{ color: '#212121', textAlign: 'center', marginBottom: '50px' }}>مقتنيات أمنية النادرة</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px', 
        padding: '0 10%' 
      }}>
        {coins.map((coin) => (
          <motion.div 
            key={coin.id}
            whileHover={{ y: -10 }}
            style={{
              background: 'rgba(255, 255, 255, 0.6)', // زجاج فاتح تيركوازي
              border: '1px solid #4DB6AC', 
              padding: '25px', 
              borderRadius: '25px', 
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '15px' }}>
              <img 
                src={coin.img} 
                alt={coin.name} 
                style={{ width: '100%', display: 'block', borderRadius: '15px', height: '250px', objectFit: 'cover' }} 
              />
            </div>
            <h3 style={{ color: '#212121', marginBottom: '10px' }}>{coin.name}</h3>
            <p style={{ color: '#4DB6AC', fontWeight: 'bold' }}>{coin.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoinGallery;