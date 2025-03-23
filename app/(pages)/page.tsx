import CarCard from "@/components/CarCard";
import SkeletonLoader from "../components/SkelatonLoader";

export default function Home() {
  const dummyCars = [
    {
      id: 1,
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      image: "/images/car1.png",
    },
    {
      id: 2,
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      image: "/images/car1.png",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hi, this is the Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {dummyCars.length > 0 ? (
          dummyCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
}
