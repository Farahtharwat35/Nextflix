import CardsRow from "@/components/cardsRow";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { FilmIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { MovieData } from ".";
import { useAppSelector } from "@/app/hooks";
import Card from "@/components/card";

const Movies = () => {
    const [data, setData] = useState<MovieData[]>([]);
    const auth = useAppSelector((a) => a.auth);

    useEffect(() => {
        auth &&
            fetch("http://127.0.0.1:3001/movies", {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                });
    }, [auth]);

    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto">
            <Sidebar />
            <Navbar />
            <div className="flex gap-4 justify-center items-center py-12 px-8">
                <FilmIcon className="w-10 h-10 stroke-white" />
                <h1 className="text-4xl font-bold">Movies</h1>
            </div>
            <div className="flex flex-wrap gap-8 px-12">
                {data.map((m) => (
                    <Card key={m._id} name={m.name} id={m.url} />
                ))}
            </div>
        </div>
    );
};

export default Movies;
