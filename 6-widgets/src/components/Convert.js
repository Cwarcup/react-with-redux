import React, { useState, useEffect } from 'react';
import axios from 'axios';

// accept language and text as prop
// use state to store language and text
// use effect to fetch translation
// return translation

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  // debounce, default value is the text prop
  const [debouncedText, setDebouncedText] = useState(text);

  //useEffect#1
  // useEffect for the text prop
  // will run anytime a user types into the search input
  // timeout will execute setDebouncedText after 500ms
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  //useEffect#2
  // useEffect for debouncedText
  // will run anytime debouncedText is changed
  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
