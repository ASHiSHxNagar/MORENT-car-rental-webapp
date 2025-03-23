import Image from "next/image";
import { Button } from "../components/ui/button";

interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <Image
        src={car.image}
        alt={car.name}
        width={200}
        height={120}
        className="w-full"
      />
      <h3 className="text-lg font-bold">{car.name}</h3>
      <p className="text-sm text-gray-500">{car.type}</p>
      <p className="text-lg font-semibold text-blue-600">${car.price}.00/day</p>
      <Button className="mt-2">Rent Now</Button>
    </div>
  );
}
