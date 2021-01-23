import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import './MovieDetails.css';

const MovieDetails = (props) => {

    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const fetchMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=79179b15957fb3ee0d928154505750ab&language=en-US`;
    const posterBaseUrl = "https://image.tmdb.org/t/p/original";

    console.log("EL ID DE LA PELICULA ES: ", id);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchMovie);
            console.log("La película es:", request.data);
            setMovie(request.data);
            return request;
        }
        fetchData();


    }, [])

    return (

        <div>
            <header className='banner__movie'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${posterBaseUrl}${movie.backdrop_path}")`,
                    backgroundPosition: "inherit"
                }}>
                <div className="back__home"><Link to="/" className="header__link">← BACK</Link></div>

                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie.title || movie.name || movie.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <div className="banner__button">{`Nota: ${movie.vote_average}`}</div>
                        <div className="banner__button">{`${movie.vote_count} votos`}</div>
                    </div>
                    <div className="movie__description">
                        {movie.overview}
                    </div>
                </div>

            </header>
        </div>
    )
}

export default MovieDetails

