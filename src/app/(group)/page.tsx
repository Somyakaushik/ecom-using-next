//@ts-nocheck
import Itemcard from "./component/Itemcard";
import Footer from "./component/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense
        fallback={
          <div className="flex justify-center items-center flex-1">
            <h1>Loading....</h1>
          </div>
        }
      >
        <Homepage />
      </Suspense>
      <Footer />
    </div>
  );
}

async function Homepage() {
  const res = await fetch("https://dummyjson.com/products?limit=194");
  const data = await res.json();
  const products = data?.products || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4">
      {products.map((item) => (
        <Itemcard key={item.id} item={item} />
      ))}
    </div>
  );
}
