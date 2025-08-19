//@ts-nocheck
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Itemcard({ item }: { item: any }) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="w-full sm:w-[220px] md:w-[250px] lg:w-[300px] rounded-xl border bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        
        {/* Product Image */}
        <div className="h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={260}
            height={260}
            className="object-contain rounded-lg"
            unoptimized={true} // <--- add this if image domain not allowed
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col justify-between h-[170px] sm:h-[180px] md:h-[200px]">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
            {item.title}
          </h2>
          <p className="text-[11px] sm:text-[12px] text-gray-600 line-clamp-3 mb-2">
            {item.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-600 font-bold text-sm sm:text-base">
              $ {item.price}
            </p>
            <button className="text-xs sm:text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
              ⭐ {item.rating}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
