'use client';

import { useState } from 'react';
import React from 'react';

export default function AddProdButton() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image_url, setImageUrl] = useState('');

  function saveProductToLocalStorage(productData: any) {
    try {
      const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
      const newProduct = {
        id: Date.now(),
        ...productData,
        createdAt: new Date().toISOString()
      };
      const updatedProducts = [...existingProducts, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { success: true, data: newProduct };
    } catch (error) {
      return { success: false, message: "Failed to save product" };
    }
  }

  async function handleSubmit() {
    const data = { title, description, category, image_url };
    const res = saveProductToLocalStorage(data);

    if (res.success) {
      setTitle('');
      setDescription('');
      setCategory('');
      setImageUrl('');
      alert('Product added successfully!');
    } else {
      alert('Failed to add product');
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Product
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md sm:max-w-lg bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">Add Product</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 text-center sm:text-left">
              Fill in the product details.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              <label className="flex flex-col">
                <span className="text-sm sm:text-base font-medium mb-1">Title</span>
                <input
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter product title"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm sm:text-base font-medium mb-1">Description</span>
                <input
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm sm:text-base font-medium mb-1">Category</span>
                <input
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm sm:text-base font-medium mb-1">Image URL</span>
                <input
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={image_url}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSubmit();
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
