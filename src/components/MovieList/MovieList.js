import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import { list } from '../../const/Const';
function MovieList() {
    return (
        <div className="moviesList">
            {list.map((movie, i) => <MovieCard movie={movie} key={i} />)}
        </div>
        
    )
}

export default MovieList