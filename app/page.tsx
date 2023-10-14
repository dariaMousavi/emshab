import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productsCard";

export default function Home() {
  return (
    <main>
      <h1>hellloooo</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
