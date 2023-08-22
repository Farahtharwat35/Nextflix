import { useAppSelector } from "@/app/hooks";
import React, { useState, useEffect } from "react";
import { MovieData } from "..";

const MoviesPage = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const [name, setName] = useState("");
    const [url, setURL] = useState("");
    const [videoTrailer, setVideoTrailer] = useState("");
    const auth = useAppSelector((a) => a.auth);

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

    const handleAddMovie = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) return;
        try {
            const res = await fetch("http://localhost:3001/Accounts", {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    name: "kled",

                    email: "led",
                    users: [],

                    password: "1222",
                    phoneNo: "dlajdklsaj",
                    subscription: "Platinum",
                    type: "Admin",
                }),
            });

            await res.json();

            auth &&
                fetch(`http://localhost:3001/movies`, {
                    headers: {
                        authorization: `Bearer ${auth.accessToken}`,
                    },
                })
                    .then((res) => res.json())
                    .then((res) => setMovies(res));
            // Reset the form fields
            setName("");
            setURL("");
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <div>
            <h1>Manage Movies</h1>
            <form onSubmit={handleAddMovie}>
                {}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="bg-opacity-0 bg-white"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white"
                    type="text"
                    placeholder="movie image"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white"
                    type="text"
                    placeholder="movie image"
                    value={videoTrailer}
                    onChange={(e) => setVideoTrailer(e.target.value)}
                />
                <button type="submit">Add Movie</button>
            </form>
            <div className="my-10">
                <div className="grid grid-cols-7">
                    <div>Name</div>
                    <div>Image</div>
                    <div>Link</div>
                    <div className="text-center col-span-2">Actions</div>
                </div>
                {movies.map((a) => (
                    <div key={a._id} className="grid grid-cols-7">
                        <div>{a.name}</div>
                        <div>{a.url}</div>
                        <div>{a.videoTrailer}</div>
                        <div>Edit</div>
                        <div>Delete</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
