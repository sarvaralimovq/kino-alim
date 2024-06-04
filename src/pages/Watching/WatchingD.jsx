import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { kinoDate } from '../../data/data';

function WatchingD() {
    const { slug } = useParams();
    console.log();
    const [watching, setWatching] = useState(
      kinoDate.find((item) => item.id == slug)
    );
  return (
    <div>
      <img src={watching.img}alt="img" />
        <h1>{watching.id}</h1>
    </div>
  )
}

export default WatchingD
