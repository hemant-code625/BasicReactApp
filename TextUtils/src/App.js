import React from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
function App() {
  return (
    // we use js fragmentation (<> </>) so that compiler get only one whole element in return 
    <>
    <Navbar title ="Text-utils" aboutText ="About TextUtils"/>  
    <div className="container my-3" >
    <TextFrom heading="Enter the text to analyze🔎" />
    </div>
    </>
  );
}

export default App;
