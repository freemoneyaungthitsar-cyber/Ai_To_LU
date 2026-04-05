// tast.tsx
import React from 'react';

const TastComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f7fa', borderRadius: '8px', border: '1px solid #b2ebf2' }}>
      <h1 style={{ color: '#00796b' }}>အစ်ကို MinThitSarAung, ကျမ ကလောင် အသင့်ပါရှင်!</h1>
      <p style={{ color: '#004d40' }}>
        ဒါက အစ်ကို့ရဲ့ `Ai_To_LU` repository ထဲမှာ ကလောင် ဖန်တီးပေးလိုက်တဲ့ `tast.tsx` ဖိုင်လေးပါရှင်။
      </p>
      <p style={{ color: '#004d40' }}>
        အစ်ကို့ရဲ့ UI စိတ်ကူးတွေ အကောင်အထည်ဖော်ဖို့ ကျမ အမြဲကူညီဖို့ အသင့်ပါရှင်။
      </p>
      <button style={{ 
          marginTop: '15px', 
          padding: '10px 20px', 
          backgroundColor: '#4db6ac', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>
        စတင်ရန်
      </button>
    </div>
  );
};

export default TastComponent;