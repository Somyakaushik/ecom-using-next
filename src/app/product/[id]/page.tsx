//@ts-nocheck
import Addtocart from "@/app/(group)/component/Addtocart";
import Footer from "@/app/(group)/component/Footer";
import Header from "@/app/(group)/component/Header";
import Image from "next/image";
import Link from "next/link";

// Remove custom PageProps interface

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  // fetch product
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  if (!data?.id) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-xl">
        Product not found.
      </div>
    );
  }

  // Fix image URL if needed
  const imageUrl = data.thumbnail.startsWith("http")
    ? data.thumbnail
    : `https://dummyjson.com/${data.thumbnail}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-xl p-6">

          {/* Product Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <Image
              src={imageUrl}
              alt={data.title}
              width={400}
              height={400}
              className="rounded-lg object-contain w-full h-auto bg-gray-100"
              unoptimized={true} 
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{data.title}</h1>
            <p className="text-gray-600 text-sm md:text-base">{data.description}</p>

            <div className="flex gap-4 items-center">
              <p className="text-lg md:text-xl font-semibold text-blue-600">$ {data.price}</p>
              <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                ⭐ {data.rating}
              </span>
              <span className="text-sm text-gray-500">({data.stock} in stock)</span>
            </div>

            <div className="text-sm text-gray-500">
              Brand: <span className="font-bold text-base md:text-lg">{data.brand}</span>
            </div>
            <div className="text-sm text-gray-500">
              Category: <span className="font-bold text-base md:text-lg">{data.category}</span>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="w-full md:w-[150px]">
                <Addtocart item={data} />
              </div>
              <button className="w-full md:w-[150px] bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>

            <Link href="/">
              <button className="mt-4 text-blue-600 underline text-sm md:text-base">
                ← Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
