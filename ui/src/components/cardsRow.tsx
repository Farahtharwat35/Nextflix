import { MovieData } from "@/pages";
import Card from "./card";

interface Props {
    movies: MovieData[];
}

const CardsRow: React.FC<Props> = ({ movies }) => {
    return (
        <div className="shrink-0 px-8 pb-12">
            <div className="text-2xl font-bold mb-4">Top 10:</div>
            <div className="flex gap-8 overflow-x-auto flex-nowrap">
                {movies.map((m) => {
                    return <Card id={m._id} name={m.name} key={m._id} />;
                })}
            </div>
        </div>
    );
};

export default CardsRow;
