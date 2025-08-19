//@ts-nocheck
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import AddProdButton from "./Add-prd-btn";

export default function Header() {
  const [userinp, setUserinp] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserinp(event.target.value);
  }

  useEffect(() => {
    async function getProd() {
      const res = await fetch("https://dummyjson.com/products?limit=194");
      const data = await res.json();
      const products = data.products;

      const filteredSugg = products.filter((item: any) =>
        item.title.toLowerCase().includes(userinp.toLowerCase())
      );

      setSuggestion(filteredSugg.slice(0, 10));
    }
    if (userinp) getProd();
  }, [userinp]);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white shadow-md mb-2 gap-4 md:gap-0">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        <Link href="/">🛒 Ecom App</Link>
      </h1>

      {/* Search Bar */}
      <div className="flex items-center relative w-full md:w-auto">
        <form className="flex flex-col md:flex-row w-full md:w-auto" action="/search" method="GET">
          <input
            type="text"
            value={userinp}
            onChange={handleChange}
            placeholder="Search for product"
            name="q"
            required
            className="w-full md:w-[400px] rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-2 md:mt-0 md:ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Search
          </button>
        </form>

        {/* Suggestions Dropdown */}
        {userinp && suggestion.length > 0 && (
          <div className="absolute top-full left-0 w-full md:w-[400px] bg-white p-3 mt-2 border rounded-lg shadow-lg z-50">
            {suggestion.map((elem: any) => (
              <div key={elem.id} className="py-1 hover:bg-gray-100 px-2 rounded">
                <Link
                  href={`/search?q=${elem.title}`}
                  onClick={() => {
                    setUserinp("");
                    setSuggestion([]);
                  }}
                  className="block truncate"
                >
                  {elem.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Product Button */}
      <AddProdButton />

      {/* Login & Cart */}
      <div className="flex flex-row md:flex-row items-center gap-4">
        <button className="text-blue-600 font-medium hover:underline">
          <Link href={"/login"}>Login</Link>
        </button>
        <div className="relative text-gray-700 hover:text-blue-600 cursor-pointer">
          <Link href={"/cart"}>🛒 Cart</Link>
        </div>
      </div>
    </header>
  );
}
