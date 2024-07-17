import React from 'react';
import '../App.css';

export const PageFive = () => {
    return (
        <div className='page-five'>
            <div className="people-png" />
            <div className='middle-text'>
                삐빅! 졸면 안돼요!
            </div>
            <div className='small-text'>
                탑재된 카메라가 여러분의 행동을 학습해요<br/>
                저희의 <span className="yell-highlight">인공지능</span> 기술로 여러분의 집중상태를 확인할게요<br/>
                눈감고 명상중이라는 변명은 안 통한답니다
            </div>
        </div>
    );
};