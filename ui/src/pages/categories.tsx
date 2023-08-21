import Category from "@/components/category";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Categories = () => {
    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto">
            <Sidebar />
            <Navbar />
			<div className="flex flex-wrap gap-4 p-6">
				<Category type="action" />
				<Category type="anime" />
				<Category type="comedy" />
				<Category type="documentary" />
				<Category type="drama" />
				<Category type="fantasy" />
				<Category type="horror" />
				<Category type="international" />
				<Category type="kids" />
				<Category type="music" />
				<Category type="mystery" />
				<Category type="romance" />
			</div>
        </div>
    );
};

export default Categories;
