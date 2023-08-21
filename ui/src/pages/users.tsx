import Avatar from "boring-avatars";

const Users = () => {
    const users = ["Etsh", "Farah", "Mark", "Kirollos", "Hamza"];
    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <h2 className="text-4xl">MEEN??</h2>
            <div className="flex gap-8">
                {users.map((u) => (
				<div key={u} className="group cursor-pointer">
                    <div className="h-20 w-20 border-solid border-2 border-white/0 group-hover:border-white/100 rounded-full transition-all ease-in">
                        <Avatar
                            size="100%"
                            name={u}
                            variant="beam"
                            colors={[
                                "#92A1C6",
                                "#146A7C",
                                "#F0AB3D",
                                "#C271B4",
                                "#C20D90",
                            ]}
                        />
                    </div>
					<div className="opacity-50 group-hover:opacity-100 text-center py-4 transition-all ease-in text-lg">{u}</div>
				</div>
                ))}
            </div>
			<button className="rounded-full px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors ease-in border-solid border-2 border-white/10 hover:border-white/30">Sign Out</button>
        </div>
    );
};

export default Users;
