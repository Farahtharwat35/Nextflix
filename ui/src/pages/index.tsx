import CardsRow from "@/components/cardsRow";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data: MovieData[]= [];

    return {
        props: { data },
    };
};

interface Props {
    data: MovieData[];
}

const Home: React.FC<Props> = ({ data }) => {
    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto pb-8">
            <Sidebar />
            <Navbar />
            <Hero />
            <CardsRow movies={data} />
        </div>
    );
};

export default Home;
