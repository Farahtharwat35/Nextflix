import { useAppSelector } from "@/app/hooks";
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

const Home: React.FC = () => {
    const [data, setData] = useState<MovieData[]>([]);
    const auth = useAppSelector((a) => a.auth);

    useEffect(() => {
        auth && fetch("http://127.0.0.1:3001/watch-history/top", {
            headers: {
				authorization: `Bearer ${auth.accessToken}`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, [auth]);

    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto pb-8">
            <Sidebar />
            <Navbar />
            <Hero />
            <CardsRow movies={data.slice(0, 10)} />
        </div>
    );
};

export default Home;
