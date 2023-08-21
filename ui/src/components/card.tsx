import Image from "next/image";
import Link from "next/link";

const Card = () => (
    <Link className="flex flex-col gap-4 shrink-0" href="/movies/zSWdZVtXT7E">
        <Image
            className="h-40 w-56 object-cover -scale-x-100 object-right rounded-lg shadow-lg"
            src="/images/interstellar-movie.jpg"
            alt="Interstellar Hero Image"
            width={3840}
            height={2160}
        />
        <div className="text-sm font-bold">Interstellar</div>
    </Link>
);

export default Card;
