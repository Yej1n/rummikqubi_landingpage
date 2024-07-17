import React, { useState, useEffect } from 'react';
import '../App.css';

export const PageThree = () => {
    const [currentLight, setCurrentLight] = useState('red');
  
    useEffect(() => {
      const lights = ['red', 'yellow', 'green'];
      let currentIndex = 0;
  
      const changeLight = () => {
        setCurrentLight(lights[currentIndex]);
        currentIndex = (currentIndex + 1) % lights.length;
      };
  
      const interval = setInterval(changeLight, 700);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <div className="page-three">
      <div className="traffic-lights">
        <div className={`light ${currentLight === 'red' ? 'red' : 'off'}`}></div>
        <div className={`light ${currentLight === 'yellow' ? 'yellow' : 'off'}`}></div>
        <div className={`light ${currentLight === 'green' ? 'green' : 'off'}`}></div>
      </div>
      <div className="middle-text">
        우선, 여러분의 집중도를 신호등으로 알려드릴게요<br/>
      </div>
      <div className='small-text'>
        초록은 <span className="green-highlight">집중</span>, 노랑은 <span className="yellow-highlight">주의</span>, 빨강은 <span className="red-highlight">휴식 필요</span><br/>
        여러분의 집중도를 실시간으로 확인하고<br/>
        자신의 페이스에 맞게 학습할 수 있어요
      </div>
    </div>
  );
};
