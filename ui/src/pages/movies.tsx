import CardsRow from "@/components/cardsRow";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { FilmIcon } from "@heroicons/react/24/outline";

const Movies = () => (
    <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto">
        <Sidebar />
        <Navbar />
        <div className="flex gap-4 justify-center items-center py-12">
            <FilmIcon className="w-10 h-10 stroke-white" />
            <h1 className="text-4xl font-bold">Movies</h1>
        </div>
        <CardsRow />
        <CardsRow />
        <CardsRow />
    </div>
);

export default Movies;
