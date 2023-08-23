interface Props {
    type: "action" | "anime" | "comedy" | "documentary" | "drama" | "fantasy" | "horror" | "international" | "kids" | "music" | "mystery" | "romance";
}

const colors = {
        action: {
            color: "from-orange-600 to-red-600",
            text: "Action and Adventure",
        },
        anime: {
            color: "from-fuchsia-600 to-sky-600",
            text: "Anime",
        },
        comedy: {
            color: "from-amber-400 to-yellow-600",
            text: "Comedy",
        },
        documentary: {
            color: "from-emerald-700 to-green-600",
            text: "Documentary",
        },
        drama: {
            color: "from-purple-950 to-fuchsia-600",
            text: "Drama",
        },
        fantasy: {
            color: "from-violet-700 to-violet-950",
            text: "Fantasy",
        },
        horror: {
            color: "from-stone-950 to-rose-600",
            text: "Horror",
        },
        international: {
            color: "from-green-600 to-yellow-500",
            text: "International",
        },
        kids: {
            color: "from-pink-500 to-pink-200",
            text: "Kids",
        },
        music: {
            color: "from-red-600 to-pink-500",
            text: "Music Videos and Concerts",
        },
        mystery: {
            color: "from-blue-900 to-sky-300",
            text: "Mystry and Thrillers",
        },
        romance: {
			color: "from-rose-700 to-pink-400",
			text: "Romance"
		},
    };

const Category: React.FC<Props> = ({ type }) => {
    return (
        <div
            className={[
                "border-2 border-solid border-white/30 text-xl font-bold w-80 h-40 shrink-0 flex items-center justify-start cursor-pointer bg-gradient-to-tr p-4 rounded-xl bg-opacity-30 hover:scale-110 translate-x-0 transition-all ease-out",
                colors[type].color,
            ].join(" ")}
        >
            {colors[type].text}
        </div>
    );
};

export default Category;
