//@ts-nocheck
import Itemcard from '../component/Itemcard';
import notFound from '../../not-found';

export async function generateMetadata({ params }: { params: any }) {
  const id = params.id;
  const url = "https://dummyjson.com/products/" + id;
  const respo = await fetch(url);
  const prod = await respo.json();

  if (!prod.id) {
    notFound();
  }

  return {
    title: prod.title,
    description: prod.description 
  };
}

//@ts-ignore
export default async function page({ searchParams }: { searchParams: any }) {
  const query = searchParams.q || '';
  const min = searchParams.min;
  const max = searchParams.max;
  const rating = searchParams.rating;

  let results: any[] = [];

  try {
    if (query) {
      const url = "https://dummyjson.com/products/search?q=" + query;
      const res = await fetch(url);
      const data = await res.json();
      results = data.products || [];
    }
  } catch (err) {
    console.error("Search error:", err);
  }

  // Filter by min/max price or rating
  results = results.filter(item => {
    let isValid = true;
    if (min) isValid = isValid && item.price >= Number(min);
    if (max) isValid = isValid && item.price <= Number(max);
    if (rating) isValid = isValid && item.rating >= Number(rating);
    return isValid;
  });

  return (
    <div className="px-4 md:px-8 py-6">
      {results.length !== 0 && (
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-6">
          Showing results for "{query}"
        </h1>
      )}

      {results.length === 0 && (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-lg md:text-xl">No results found for "{query}"</h2>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-5">
        {results.map((item) => (
          <Itemcard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
