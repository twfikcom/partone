import React, { useState, useEffect } from 'react';

const TypewriterSection: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Chapter 1: Awareness",
    "Chapter 2: Integration",
    "Chapter 3: Evolution"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of sentence
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="py-32 px-6 flex justify-center items-center bg-brand-dark/50 border-y border-white/5">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-4 text-brand-purple font-mono text-sm tracking-widest uppercase">System Status</div>
        <div className="h-20 md:h-24 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-white tracking-tight">
            {text}
            <span className="animate-pulse ml-1 text-brand-purple">_</span>
          </h2>
        </div>
        <p className="mt-8 text-gray-500 max-w-lg mx-auto">
          The story is being written in real-time. The phases of our roadmap are designed to scale with humanity's readiness.
        </p>
      </div>
    </section>
  );
};

export default TypewriterSection;