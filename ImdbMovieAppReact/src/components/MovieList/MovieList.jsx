import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getMovieList } from '../../Redux/slices/movieListSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css'
import Loading from '../Loading/Loading';

const MovieList = () => {

    const dispatch = useDispatch();
    const { movieList , isLoading } = useSelector((store) => store.movieList);

    useEffect(() => {
        console.log(movieList)
    dispatch(getMovieList())
    }, [])
   console.log(movieList);
  return (
    <div className='Movie-List'>
      <ul>
        { 
            !isLoading ?
            movieList && movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>  
            )) : <Loading/>
        }
      </ul>
       
    </div>
  )
}

export default MovieList