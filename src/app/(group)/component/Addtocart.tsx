//@ts-nocheck
'use client'

import { useEffect, useState } from "react";

export default function Addtocart({ item }: { item: any }) {
  const [added, setAdded] = useState(false);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const prevItem = cartItems.find(elem => elem.id === item.id);
    if (prevItem) setInCart(true);
  }, [item.id]);

  function handleClick() {
    setAdded(true);

    let cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const prevItem = cartItems.find(elem => elem.id === item.id);

    if (prevItem) {
      prevItem.quantity = prevItem.quantity + 1;
    } else {
      const itemToAdd = { ...item, quantity: 1 };
      cartItems.push(itemToAdd);
      setInCart(true);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  return (
    <div className="w-full sm:w-auto flex justify-center">
      <button
        onClick={handleClick}
        className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 
          ${added ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}
        `}
      >
        {added ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
