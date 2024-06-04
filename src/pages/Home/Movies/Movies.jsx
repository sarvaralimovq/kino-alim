import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { kinoDate } from '../../../data/data'
import { Context } from '../../Context/Context'
import './Movies.scss'
function Movies() {
    const {search, setSearch} = useContext(Context)
    const {from} = useContext(Context)
   
    const Liref = useRef()

  
    
  return (
    <div className='Movies'>
        <div className="container">
           <div className="movies__inner">
                <h2>
                    Kinolar






                    
                </h2>
                <ul className='movies__list'>
                
                    {
                        kinoDate?.filter((item)=> item.name.includes(search) || item.id == search   ).map((item , index)=> (
                            <Link to={`/watching/${item.id}`}>
                                <li ref={Liref} key={index}>
                                     <span>
                                     <img src={item.img} alt="img" />
                                     <h2>Nomi - {item.name}</h2>
                                     <h3>Kino ID - {item.kinoId}</h3>
                                     <p>Chiqgan yil - {item.yil}</p>
                                     <p>Kino yoki Serial - {item.turi}</p>
                                     </span>
                                </li>

                            </Link>

                        ))
                            
                      
                    }
                </ul>
           </div>
        </div>
    </div>
  )
}

export default Movies
