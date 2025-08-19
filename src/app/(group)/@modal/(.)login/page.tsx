



'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  
  const closePopup = () => {
    router.back();
  };

  return (
    <div
      className='flex fixed justify-center items-center h-[100vh] w-[100vw] bg-black/30 z-50'
      onClick={closePopup}
    >
      <div
        className='border z-50 w-[300px] bg-amber-50 flex flex-col m-[100px] relative'
        onClick={(e) => e.stopPropagation()} 
      >
     
        <button
          className="absolute top-2 right-3 text-black text-lg font-bold"
          onClick={closePopup}
        >
          ×
        </button>

        <h1 className="p-3 ml-3 text-2xl">Sign-in or Create Account</h1>
        <h1 className="font-bold pl-3 ml-3">Enter Mobile Number or Email</h1>
        <input
          type="text"
          placeholder="Enter number Or Email"
          className="ml-6 mr-4 mt-3 mb-2 p-[4px] border-[#3488e9] border rounded"
        />
        <Link href={"/login/createAcc"}>
          <button className="ml-6 w-[257px] mr-4 mt-1 mb-3 p-[4px] border-[#3488e9] bg-[#8db5ea] border rounded">
            Continue
          </button>
        </Link>

        <p className="text-sm p-4">
          By continuing, you agree to <br />Ecom.'s Conditions of Use and Privacy Notice.
        </p>
      </div>
    </div>
  );
}
