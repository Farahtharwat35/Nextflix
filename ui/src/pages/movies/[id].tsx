import LogoIcon from "@/assets/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieData } from "..";
import { useAppSelector } from "@/app/hooks";

const Movie = () => {
    const [media, setMedia] = useState<MovieData>();
    const router = useRouter();
    const auth = useAppSelector((a) => a.auth);

    useEffect(() => {
        const id = router.query.id;
        id &&
            auth &&
            fetch(`http://localhost:3001/movies/${id}`, {
                headers: {
                    authorization: `Bearer ${auth.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((res) => setMedia(res));
    }, [router.query.id, auth]);

    return (
        <div className="h-screen box-border flex flex-col gap-4 overflow-y-auto bg-black">
            <nav className="fixed pl-20 top-0 left-0 right-0 h-16 bg-black flex gap-4 items-center">
                <Link href="/">
                    <div className="animate-pulse flex gap-4 items-center">
                        <LogoIcon className="fill-indigo-700" />
                        <h2 className="font-bold text-2xl text-indigo-700">
                            Nextflix
                        </h2>
                    </div>
                </Link>
            </nav>
            <div className="flex flex-col gap-4 w-full items-center mx-auto h-full">
                {media ? (
                    <iframe
                        id="ytplayer"
                        typeof="text/html"
                        className="outline-none rounded-lg shadow-md h-full pt-16 shrink-0 w-full"
                        height="unset"
                        src={`https://www.youtube.com/embed/${media.url}?autoplay=1`}
                    ></iframe>
                ) : (
                    "Loading"
                )}
            </div>
        </div>
    );
};

export default Movie;
