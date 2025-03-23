import Image from "next/image";
import { Input } from "../components/ui/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-blue-900">MORENT</h1>
      </div>
      <Input placeholder="Search something here" className="w-1/3" />
      <div className="flex items-center space-x-4">
        <span>❤️</span> {/* Dummy heart icon */}
        <span>🔔</span> {/* Dummy bell icon */}
        <Image
          src="/images/user.png"
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
