import { useState, useEffect } from 'react';

function TypewriterText({ text, delay = 100 }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default TypewriterText; 