import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { kinoDate } from '../../data/data';
import WatchingD from './WatchingD';

function Watching() {
  
    
  return (
    <div className='watching'>
      <WatchingD/>
    </div>
  )
}

export default Watching
