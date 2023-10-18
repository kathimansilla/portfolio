import React, { useState, useEffect } from 'react';

const TypingText = ({ delay }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text =
    "Hello, I am Katherina! I am glad you have reached my portfolio. Let me give you a brief introduction about myself. Currently, I am a Full Stack Web Developer. Additionally, I have enjoyed a diverse career as an educator at various educational levels (earning a promotion at UNSL), a research consultant at UBA, a pianist, and a cultural manager.  Driven by a passion for logical processes and collaborative teamwork, I have found programming to be the perfect platform for further professional growth.";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="aboutMeText ">
      <p>{typedText}</p>
    </div>
  );
};

export default TypingText;
