import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      /* تدرج أزرق وتيركوازي مذهل */
      background: 'linear-gradient(135deg, #0277BD 0%, #4DB6AC 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* طبقة زجاجية شفافة تعطي مظهر الفخامة */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(8px)',
        background: 'rgba(255, 255, 255, 0.1)'
      }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '60px',
          background: 'rgba(255, 255, 255, 0.2)', // زجاج شفاف
          backdropFilter: 'blur(25px)',
          borderRadius: '40px',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
          maxWidth: '800px'
        }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          color: '#212121', // كلمات سوداء
          lineHeight: '1.5',
          marginBottom: '20px',
          fontWeight: '900'
        }}>
          حقق أمنيتك بامتلاك كنوز عتيقة ولكنها ثمينة
        </h1>
        
        <h2 style={{ 
          fontSize: '2.2rem', 
          color: '#01579B', 
          fontFamily: 'serif',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}>
          Old Is Gold
        </h2>

        <div style={{ marginTop: '20px' }}>
             <button className="gold-btn" style={{ 
               background: '#212121', 
               color: '#fff',
               padding: '15px 40px',
               borderRadius: '50px',
               fontSize: '1.2rem',
               border: 'none',
               cursor: 'pointer'
             }}>
               تصفح الكنوز
             </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;