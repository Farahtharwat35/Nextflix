import { useAppSelector } from "@/app/hooks";
import React, { useState, useEffect } from "react";
import { MovieData } from "..";

const MoviesPage = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const auth = useAppSelector((a) => a.auth);
    
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        console.log(auth?.accessToken)
            auth &&
            fetch(`http://localhost:3001/movies`, {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => console.log(res));
    }, [auth]);

	useEffect(() => {}, [])

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
