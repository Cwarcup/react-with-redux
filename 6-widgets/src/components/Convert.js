import React, { useState, useEffect } from 'react';

// accept language and text as prop
// use state to store language and text
// use effect to fetch translation
// return translation

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('new language or text');
  }, [language, text]);
  return <div>Convert</div>;
};

export default Convert;
