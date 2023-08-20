import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Avatar from "boring-avatars";

const Settings = () => (
    <div className="h-screen mt-16 ml-20 box-border flex justify-center items-center gap-4 overflow-y-auto">
        <Sidebar />
        <Navbar />
		<div className="flex border-solid border-slate-300 gap-4">
			<div>
                <div className="w-24 h-24 p-1 border-solid border-2 border-indigo-700 rounded-full">
                    <Avatar
                        size="100%"
                        name="Etsh"
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
			</div>
			<div>
				<form className="border-slate-300 border-solid border"></form>
			</div>
		</div>
    </div>
);

export default Settings;
