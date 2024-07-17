import React, { useEffect, useRef, useState } from 'react';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { PageFour } from './components/PageFour';
import { PageFive } from './components/PageFive';
import { PageSix } from './components/PageSix';
import { PageSeven } from './components/PageSeven';
import './App.css';

const App = () => {
  const pageOneRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            pageOneRef.current.classList.add('hidden');
          } else {
            pageOneRef.current.classList.remove('hidden');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pageOneRef.current) {
      observer.observe(pageOneRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (pageOneRef.current) {
        observer.unobserve(pageOneRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="page" ref={pageOneRef} style={{ transform: `translateY(-${scrollY}px)` }}>
        <PageOne />
      </div>
      <div className="page">
        <PageTwo />
      </div>
      <div className="page">
        <PageThree />
      </div>
      <div className="page">
        <PageFour />
      </div>
      <div className="page">
        <PageFive />
      </div>
      <div className="page">
        <PageSix />
      </div>
      <div className="page">
        <PageSeven />
      </div>
    </div>
  );
};

export default App;
