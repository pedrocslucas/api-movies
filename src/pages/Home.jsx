import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../styles/MovieGrid.css";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [posterMovies, setPosterMovies] = useState([]);

    const getPosterMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setPosterMovies(data.results);
    }

    useEffect(() => {

        const posterUrl = `${moviesURL}now_playing?${apiKey}`;

        getPosterMovies(posterUrl);

    }, [])

    return (
        <div className="container">
            <h2 className="title">Em Cartaz</h2>
            <div className="movies-container">
                {posterMovies.length === 0 && <p>Carregando...</p>}

                {posterMovies.length > 0 && 
                    posterMovies.map((movie) => 
                <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    );
}

export default Home;