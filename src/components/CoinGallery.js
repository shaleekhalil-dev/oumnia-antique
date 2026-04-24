import React from 'react';
import { motion } from 'framer-motion';

const coins = [
  { id: 1, name: "دينار ذهبي معتق", period: "العصر العباسي", img: "https://images.unsplash.com/photo-1610375461246-83df8201a002?q=80&w=400" },
  { id: 2, name: "سوليدوس بيزنطي", period: "الإمبراطورية الرومانية", img: "https://images.unsplash.com/photo-1589483232748-515c025575ba?q=80&w=400" },
  { id: 3, name: "درهم فضي قديم", period: "الأندلس", img: "https://images.unsplash.com/photo-1624515542297-906969562762?q=80&w=400" },
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
              background: 'rgba(255, 255, 255, 0.6)', // زجاج فاتح
              border: '1px solid #4DB6AC', // حدود تيركوازية
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
                style={{ width: '100%', display: 'block', borderRadius: '15px' }} 
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