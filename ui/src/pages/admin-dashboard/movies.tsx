import { useAppSelector } from "@/app/hooks";
import React, { useState, useEffect } from "react";
import { MovieData } from "..";

const MoviesPage = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const auth = useAppSelector((a) => a.auth);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!auth) return;
            try {
                const response = await fetch("/api/movies", {
                    headers: {
                        authorization: auth.accessToken,
                    },
                });
				const res = await response.json();
                setMovies(res);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, [auth]);

    const handleAddMovie = async () => {
        const movieData = {
            // Provide movie data here (name, author, reviews, poster, etc.)
        };

        try {
            // const response = await axios.post("/api/movies", movieData);
            // fetchMovies(); // Refresh movie list after adding
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    return (
        <div>
            <h1>Manage Movies</h1>
            <form onSubmit={handleAddMovie}>
                {/* Add input fields for movie details */}
                <button type="submit">Add Movie</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>{movie.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesPage;
