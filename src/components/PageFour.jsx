import React from 'react';
import '../App.css';

export const PageFour = () => {
    return (
        <div className='page-four'>
            <div className="wind-png" />
            <div className='middle-text'>
                환기할 시간이네요!
            </div>
            <div className='small-text'>
                오랜 시간 집중도를 유지하다 보면<br/>
                창문을 열고 환기를 해야할 순간이 필요하죠<br/>
                <span className="blue-highlight">습도 측정</span>으로 항상 상쾌하게 공부할 수 있게 도와줄게요
            </div>
        </div>
    );
};