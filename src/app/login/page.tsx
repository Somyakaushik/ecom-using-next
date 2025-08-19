import Link from "next/link"

export default function page() {
  return (
    <div className='flex  flex-col  items-center mt-5'>
       <h1 className="text-2xl font-bold text-blue-600"><Link href="/">🛒 Ecom App</Link></h1>
       <div className=' border m-[100px] w-[300px] flex flex-col '>
        
        <h1  className="p-3 ml-3 text-2xl">Sign-in or Create Account</h1>
        <h1 className="font-bold  pl-3 ml-3">Enter Mobile Number or Email</h1>
        <input type="text" placeholder="Enter number Or Email" className="ml-6 mr-4 mt-3 mb-2 p-[4px] border-[#3488e9] border rounded" />
        <Link href={"/login/createAcc"}><button className="ml-6 w-[257px] mr-4 mt-1 mb-3 p-[4px] border-[#3488e9] bg-[#8db5ea] border rounded">Continue</button></Link>

        <p className="text-sm p-4">By continuing, you agree to <br />Ecom.'s Conditions of Use and Privacy Notice.</p>

    </div>
    </div>
   
  )
}
