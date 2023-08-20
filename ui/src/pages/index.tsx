import CardsRow from "@/components/cardsRow";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Home = () => {
    return (
        <div className="h-screen mt-16 ml-20 box-border flex flex-col gap-4 overflow-y-auto">
            <Sidebar />
            <Navbar />
            <Hero />
			<CardsRow />
			<CardsRow />
			<CardsRow />
        </div>
    );
};

export default Home;
