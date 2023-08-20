import Image from "next/image";

const Hero = () => {
    return (
        <div className="box-border overflow-y-auto shrink-0 relative">
            <div className="flex m-8 flex-col relative z-10 h-[40rem] justify-end items-start bg-gradient-to-tr from-black to-black/10 rounded-lg border-solid border-slate-900 border-2 shadow-lg">
                <div className="p-8 box-content w-[30rem] flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">INTERSTELLAR</h1>
                    <p className="text-lg">
                        With humanity teetering on the brink of extinction, a
                        group of astronauts travels through a wormhole in search
                        of another inhabitable planet.
                    </p>
                    <div className="text-sm">
                        <span className="text-neutral-400">Cast:</span> Matthew
                        McConaughey, Anne Hathaway, Jessica Chastain, and more.
                    </div>
                    <div className="text-sm">
                        <span className="text-neutral-400">Genres:</span>{" "}
                        Sci-Fi, Drama, Action and Adventure.
                    </div>
                    <div className="text-sm">
                        <span className="text-neutral-400">This movie is:</span>{" "}
                        Mind-Bending.
                    </div>
                </div>
            </div>
            <div className="p-8 top-0 bottom-0 left-0 right-0 absolute">
                <Image
                    className="object-cover object-right-top h-full rounded-lg shadow-lg"
                    src="/images/interstellar-movie.jpg"
                    alt="Interstellar Hero Image"
                    width={3840}
                    height={2160}
                />
            </div>
        </div>
    );
};

export default Hero;
