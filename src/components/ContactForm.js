import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  
  // الرابط الخاص بك تم وضعه هنا بنجاح
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx4WqqVizr-HsK4YMmlPvNuThtsSCezIjQEZTaSaJCDBPLFAdMT0MF7I7-R2mSOF_in3Q/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('جاري إرسال طلبك إلى أمنية...');

    fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      body: new FormData(form),
      mode: 'no-cors' // لضمان الإرسال دون مشاكل التقاطعات (CORS) مع سكريبت جوجل
    })
    .then(() => {
      setStatus('تم تسجيل طلبك بنجاح في سجلاتنا!');
      form.reset();
    })
    .catch(() => setStatus('عذراً، حدث خطأ في الاتصال.'));
  };

  return (
    <section style={{ 
      padding: '80px 10%', 
      background: 'linear-gradient(135deg, #071A1E 0%, #0B1315 100%)', // التدرج النيلي الجديد
      borderTop: '1px solid rgba(20, 93, 105, 0.3)' 
    }}>
      <h2 className="section-title" style={{ color: '#145D69' }}>تواصل مع صاحبة المنصة</h2>
      
      <form onSubmit={handleSubmit} style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px' 
      }}>
        <input 
          name="Name" 
          type="text" 
          placeholder="اسمك الكامل" 
          required 
          style={{ 
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid #145D69', // حدود تيركوازية
            color: '#fff', 
            borderRadius: '5px',
            outline: 'none'
          }} 
        />
        
        <input 
          name="Email" 
          type="email" 
          placeholder="بريدك الإلكتروني" 
          required 
          style={{ 
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid #145D69', 
            color: '#fff', 
            borderRadius: '5px',
            outline: 'none'
          }} 
        />
        
        <textarea 
          name="Message" 
          placeholder="ما هي العملة التي تبحث عنها؟" 
          rows="5" 
          required 
          style={{ 
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid #145D69', 
            color: '#fff', 
            borderRadius: '5px',
            outline: 'none',
            resize: 'none'
          }}
        ></textarea>
        
        <button 
          type="submit" 
          className="gold-btn" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px',
            padding: '15px',
            fontSize: '1.1rem'
          }}
        >
          إرسال الطلب <Send size={18} />
        </button>
        
        {status && (
          <p style={{ 
            textAlign: 'center', 
            color: '#C5A059', 
            marginTop: '15px',
            fontWeight: 'bold' 
          }}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;