import React, { useState, useEffect } from 'react';

const TypingText = ({ delay }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = 'Hi, I\'m Kathi! I\'m glad you\'ve reached my portfolio. Let me tell you briefly about myself. Currently, I am a Full Stack Web Developer. Additionally, I\'ve enjoyed a diverse career as an educator at various educational levels (earning a promotion at UNSL), a pianist, a cultural manager, and a research consultant at UBA.  Driven by a passion for logical processes and collaborative teamwork, I\'ve found programming to be the perfect platform for further professional growth.';

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setTypedText(prevTypedText => prevTypedText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return <div className="aboutMeText collapsed">
      <p>{typedText}</p>
  </div>;
};

export default TypingText;
