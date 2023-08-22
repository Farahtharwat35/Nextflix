import { useAppSelector } from "@/app/hooks";
import React, { useState, useEffect } from "react";
import { MovieData } from "..";
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { ArrowLeftIcon, FilmIcon, UserIcon } from "@heroicons/react/24/outline";

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
        <div className="p-12 ml-20">
            <Sidebar />
            <nav className="flex justify-around py-4">
            <Link href="/admin-dashboard" className="flex gap-2 items-center">
                    <div><ArrowLeftIcon className="stroke-white w-8 h-8" /></div>
                    <div>Back</div>
                </Link>
                <Link href="/admin-dashboard/accounts" className="flex gap-2 items-center">
                    <div><UserIcon className="stroke-white w-8 h-8" /></div>
                    <div>Manage Accounts</div>
                </Link>
                <Link href="/admin-dashboard/movies" className="flex gap-2 items-center">
                    <div><FilmIcon className="stroke-white w-8 h-8" /></div>
                    <div>Manage Movies</div>
                </Link>
            </nav>
            <h1 className="text-xl font-bold">Manage Movies</h1>
            <form onSubmit={handleAddMovie} className="grid grid-cols-4 gap-1">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="bg-opacity-0 bg-white border-b border-solid border-indigo-700 outline-none"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white border-b border-solid border-indigo-700 outline-none"

                    type="text"
                    placeholder="movie image"
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                />
                <input
                    className="bg-opacity-0 bg-white border-b border-solid border-indigo-700 outline-none"

                    type="text"
                    placeholder="Video trailer"
                    value={videoTrailer}
                    onChange={(e) => setVideoTrailer(e.target.value)}
                />
                <button type="submit">Add Movie</button>
            </form>
            <div className="my-10">
                <div className="grid grid-cols-5">
                    <div className="border-solid border border-indigo-300 px-2">Name</div>
                    <div className="border-solid border border-indigo-300 px-2">Image</div>
                    <div className="border-solid border border-indigo-300 px-2">Link</div>
                    <div className="text-center col-span-2 border-solid border border-indigo-300 px-2">Actions</div>
                </div>
                {movies.map((a) => (
                    <div key={a._id} className="grid grid-cols-5">
                        <div className="border-solid border border-indigo-300 px-2">{a.name}</div>
                        <div className="border-solid border border-indigo-300 px-2">{a.url}</div>
                        <div className="border-solid border border-indigo-300 px-2">{a.videoTrailer}</div>
                        <div
                            className="text-blue-600 cursor-pointer border-solid border border-indigo-300 px-2"
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
                            className="text-rose-600 cursor-pointer border-solid border border-indigo-300 px-2"
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
