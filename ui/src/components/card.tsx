import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
    <Link className="flex flex-col gap-4 shrink-0" href={`/movies/${id}`}>
        <Image
            className="h-40 w-56 object-cover -scale-x-100 object-right rounded-lg shadow-lg"
            src="/images/interstellar-movie.jpg"
            alt="Interstellar Hero Image"
            width={3840}
            height={2160}
        />
        <div className="text-sm font-bold">{name}</div>
    </Link>
);

export default Card;
