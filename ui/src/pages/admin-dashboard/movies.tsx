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
                .then((res) => {
                    console.log(res)
                    setMovies(res)});
    }, [auth]);

    const refresh = () => {
        auth &&
            fetch(`http://localhost:3001/movies`, {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => setMovies(res));
    };

    const handleAddMovie = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) return;
        try {
            const res = await fetch("http://localhost:3001/movies", {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    url: url,
                    videoTrailer: videoTrailer
,
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
            setVideoTrailer("")
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
                    placeholder="movie trailer"
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
                    <div>Video</div>
                    <div>Image</div>
                    <div className="text-center col-span-2">Actions</div>
                </div>
                {movies.map((a) => (
                    <div key={a._id} className="grid grid-cols-7">
                        <div>{a.name}</div>
                        <div>{a.url}</div>
                        <div>{a.videoTrailer}</div>
                        <div
                            className="text-blue-600 cursor-pointer"
                            onClick={async () => {
                                if (!auth)
                                    return;

                                const res = await fetch(
                                    `http://localhost:3001/movies/${a._id}`,
                                    {
                                        headers: {
                                            authorization: `Bearer ${auth.accessToken}`,
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            name: name,
                                            url: url,
                                            videoTrailer: videoTrailer
                                        }),
                                        method: "PUT",
                                    }
                                );
								refresh();
                            }}
                        >
                            Edit
                        </div>
                        <div
                            className="text-rose-600 cursor-pointer"
                            onClick={async () => {
                                if (!auth)
                                    return;

                                const res = await fetch(
                                    `http://localhost:3001/movies/${a._id}`,
                                    {
                                        headers: {
                                            authorization: `Bearer ${auth.accessToken}`,
                                            "Content-Type": "application/json",
                                        },
                                        method: "DELETE",
                                    }
                                );
                                
                                console.log(res)
								refresh();
                            }}
                        >
                            Delete
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
