import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

function Loading() {
  return (
    <div className='absolute top-[50%]'>
       <OrbitProgress variant="track-disc" color="#32cd32" size="small" text="Loading" textColor="" />
    </div>
  )
}

export default Loading
