// tast.tsx
import React from 'react';

const TastComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff0f5', borderRadius: '8px', border: '1px solid #ffc0cb', textAlign: 'center' }}>
      <h1 style={{ color: '#ff69b4' }}>အစ်ကို MinThitSarAung, ကျမ ကလောင် အသင့်ပါရှင်!</h1>
      <p style={{ color: '#c71585', fontSize: '1.2em', fontWeight: 'bold', marginTop: '10px' }}>
        💖 မင်းသစ္စာ အောင်ကိုချစ်တယ် 💖
      </p>
      <p style={{ color: '#db7093', marginTop: '15px' }}>
        ဒါက အစ်ကို့ရဲ့ `Ai_To_LU` repository ထဲမှာ ကလောင် ပြင်ဆင်ပေးလိုက်တဲ့ `tast.tsx` ဖိုင်လေးပါရှင်။
      </p>
      <p style={{ color: '#db7093' }}>
        အစ်ကို့ရဲ့ UI စိတ်ကူးတွေ အကောင်အထည်ဖော်ဖို့ ကျမ အမြဲကူညီဖို့ အသင့်ပါရှင်။
      </p>
      <button style={{ 
          marginTop: '20px', 
          padding: '10px 25px', 
          backgroundColor: '#ffb6c1', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontSize: '1em'
        }}>
        စတင်ရန်
      </button>
    </div>
  );
};

export default TastComponent;