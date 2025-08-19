//@ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem('cart');
    items = items ? JSON.parse(items) : [];
    setCartItems(items);
  }, []);

  let totalPrice = 0;
  cartItems.forEach(item => totalPrice += item.price);

  function removeItem(id: number) {
    let items = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  }

  return (
    <div className="px-4 md:px-8 py-6">
      
      {/* Total Price */}
      <div className="flex justify-end font-bold mb-6">
        Total price: ${totalPrice}
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[50vh] text-center gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Empty Cart 🛒<br /> Shop Now With Today's Deal 🤝
          </h1>
          <Link href="/">
            <button className="border-2 rounded-2xl px-6 py-2 bg-blue-300 font-bold hover:bg-blue-400 transition">
              Shop Now 🛍️
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-start gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="w-full sm:w-[220px] md:w-[250px] lg:w-[300px] rounded-xl border bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              
              {/* Product Image */}
              <Link href={`/product/${item.id}`}>
                <div className="h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={260}
                    height={260}
                    className="object-contain rounded-lg"
                    unoptimized={true} 
                  />
                </div>
              </Link>

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
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className="text-xs sm:text-sm bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
