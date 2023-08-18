import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

const Home = () => {
    return (
        <div className="h-screen pt-16 pl-20 box-border flex flex-col gap-4">
            <Sidebar />
            <Navbar />
            <div className="grid-cols-2 grid gap-4 p-8 max-h-full box-border overflow-y-auto shrink-0">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl text-center font-bold">
                        INTERSTELLAR
                    </h1>
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
                <div className="">
                    <Image
                        className="object-cover -scale-x-100 object-right h-full rounded-lg shadow-lg"
                        src="/images/interstellar-movie.jpg"
                        alt="Interstellar Hero Image"
                        width={3840}
                        height={2160}
                    />
                </div>
            </div>
            <div className="overflow-x-auto shrink-0 px-8">
                <div className="text-2xl font-bold mb-4">For You:</div>
                <div className="flex gap-8">
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
                </div>
            </div>
        </div>
    );
};

export default Home;
