import Link from "next/link"

export default function page() {
  return (
    <div className='flex  flex-col  items-center mt-5'>
       <h1 className="text-2xl font-bold text-blue-600"><Link href="/">🛒 Ecom App</Link></h1>
       <div className=' border m-[100px] flex flex-col '>
        <h2 className="p-2 ml-3 text-l">Looks like you are new to Ecom.</h2>
        <h1  className="p-3 pt-0 ml-3 text-2xl"> Create Account</h1>
        <h1 className="font-bold  pl-3 ml-3">First and Last name </h1>
        <input type="text" placeholder="Enter your Name " className="ml-6 mr-4 mt-3 mb-2 p-[4px] border-[#3488e9] border rounded" />
        <p className="text-sm p-4">To verify your number or email , we will <br />send you a text msg with a temporay <br />code. Msg and data rates may apply</p>
        <button className="ml-6 mr-4 mt-1 mb-3 p-[4px] border-[#3488e9] bg-[#8db5ea] border rounded">Verify</button>


    </div>
    </div>
   
  )
}
