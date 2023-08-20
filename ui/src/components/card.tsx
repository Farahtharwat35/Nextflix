import Image from "next/image";

const Card = () => (
    <div className="flex flex-col gap-4 shrink-0">
        <Image
            className="h-40 w-56 object-cover -scale-x-100 object-right rounded-lg shadow-lg"
            src="/images/interstellar-movie.jpg"
            alt="Interstellar Hero Image"
            width={3840}
            height={2160}
        />
        <div className="text-sm font-bold">Interstellar</div>
    </div>
);

export default Card;
