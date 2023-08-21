import CardsRow from "@/components/cardsRow";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

export interface MovieData {
    _id: string;
    name: string;
    author: string;
    reviews: [];
    poster: string;
    overview: string;
    productionDate: string;
    videoTrailer: string;
    genre: string;
    actors: [];
    duration: number;
    url: string;
}

const Home = () => {
    const [data, setData] = useState<MovieData[]>();

    useEffect(() => {
        fetch("http://localhost:3001/movies")
            .then((res) => res.json())
            .then((d) => setData(d));
    }, []);

    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto pb-8">
            <Sidebar />
            <Navbar />
            <Hero />
            {data && <CardsRow movies={data} />}
        </div>
    );
};

export default Home;
