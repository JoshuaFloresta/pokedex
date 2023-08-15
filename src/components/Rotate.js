import React from 'react';
import Lottie from 'lottie-react';
import animationData from './lottie.json';

function LottieAnimation() {
  return (
    <div className='flex flex-col justify-center min-h-screen align-middle items-center bg-black'>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        speed={1.5}
        style={{ width: '30vw', height: '30vh', filter:'brightness(70%)' }}
      />

      <h1 className='mt-12 text-lg font-medium text-white'>Rotate your Phone</h1>
    </div>
  );
}

export default LottieAnimation;
