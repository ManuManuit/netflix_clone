import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


import './Row.css'

const posterBaseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (

        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movies.map(movie => (
                    <Link to={`/movie-details/${movie.id}`} className="header__link">
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                            src={`${posterBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                    </Link>
                ))}



            </div>
        </div>
    )
}

export default Row
