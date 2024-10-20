import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenre } from '../../Redux/slices/genreSlice';
import {store} from '../../Redux/Store'
import './Genre.css'


const Genre = () => {


  const {genres} = useSelector((store) => store.genre)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getGenre());
  },[])

  return (
    <div className='genres'>
      <ul>
        {genres && genres.map((genre,index) =>(
          <li key={genre.id}>{genre.name}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default Genre