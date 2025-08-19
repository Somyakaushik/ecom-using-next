'use client' 


import { useState } from 'react'
// import Footer from '../(group)/component/Footer'
// import Header from '../(group)/component/Header'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
//@ts-ignore
export default function layout({children}) {

    const searchparams = useSearchParams();
    const searchterm = searchparams.get('q') || "";
    const minAm = searchparams.get('min') || "";
    const maxAm = searchparams.get('max') || "";
    const minrating = searchparams.get('rating' ) || 0;

    const [min, setmin] = useState(minAm);
    const [max,setmax] =useState(maxAm);
    const [rating , setrating ] = useState(minrating);
//@ts-ignore
    function handlemin(event){
        setmin(event.target.value)
    }
//@ts-ignore
    function handlemax(event){
        setmax(event.target.value)
    }

    let currRating = "";
    const router = useRouter();
    //@ts-ignore
    function handlego(currRatingValue) {
  const curr = currRatingValue || rating;

  let url = "/search?";
  if (searchterm) {
    url += `q=${searchterm}`;
  }
  if (min) {
    url += `&min=${min}`;
  }
  if (max) {
    url += `&max=${max}`;
  }
  if (curr) {
    url += `&rating=${curr}`;
  }

  router.push(url);
}

//@ts-ignore
    function handlerating(event){
        setrating(event.target.value);
        handlego(event.target.value);

    }
   
  return (
    <div>
         {/* <Header/> */}
        <div className='flex  h-[800px]  p-3 '>
        <div className='w-[300px] mt-0 h-[800px] flex flex-col  p-6  bg-blue-100 rounded-lg mr-0 font-bold'><h1 >Deals & Discount </h1>
            <div>
                <input type="number" value={min} className='p-2 font-semibold m-2 ' onChange={handlemin} placeholder='enter min'/>
                <input type="number" value={max} className='p-2 font-semibold m-2  ' onChange={handlemax} placeholder='enter max'/>
                
               
            </div>
                  <select name="rating" value={rating} onChange={handlerating} className='border' id="rating">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </select>
            <button className='p-2 mt-7 rounded-lg boreder border-b-blue-800 font-bold bg-blue-400' onClick={()=>{
                handlego
            }}>Go</button>
            <h1 className='flex  justify-center pb-2 pt-5'>Delivery Day </h1>
           <div className='flex gap-2  items-center'>
            <input className='h-4 w-4' type="checkbox" /> 
            <div>Get it Today</div>
           
           </div>
           <div className='flex gap-2 items-center'>
            <input className='h-4 w-4' type="checkbox" /> 
            <div>Get it by Tomorrow</div>
           </div>
         <div className='flex gap-2  items-center'>
            <input className='h-4 w-4' type="checkbox" /> 
             <div>Get it in 2 days</div>
           </div>
        </div>

      
       
        
      {children}
      </div>
       {/* <Footer/> */}
    </div>
  )
}
