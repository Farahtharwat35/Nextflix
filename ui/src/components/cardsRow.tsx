import Card from "./card";

const CardsRow = () => (
    <div className="shrink-0 px-8 mb-4">
        <div className="text-2xl font-bold mb-4">Top 10:</div>
        <div className="flex gap-8 overflow-x-auto flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);

export default CardsRow;
