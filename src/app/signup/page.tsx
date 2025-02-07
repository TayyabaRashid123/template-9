import Common from ' @/components/common';
import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import { MdOutlineMailOutline } from 'react-icons/md';
import {CiLock} from "react-icons/ci";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa"
const page = () =>{
    return(
        <div className='md:max-w-[1920px]'>
            <Common title='Sign Up Page' subtitle='Sign up'/>
<div  className="md:max-w-[474px] w-full h-[704px]  border-[1px] md:mx-[35%] px-8 my-24">
<div className='w-fu;; mx-8 shadow-sm shadow-[#FF9F0D] '>
    <h2 className='font-bold text-[20px] md:pl-[40px] pl-[25px] pt-[20px]'>Sign Up</h2>
    <div className='flex p-4 gap-4 md:mx-8 mx-2 border-[1px] rounded-md mt-4 '>
<AiOutlineUser size={24} />
<input type="text" placeholder='Name'/>
    </div>
    <div className='flex p-4 gap-4 md:mx-8 mx-2 border-[1px] rounded-md mt-4 '>
<MdOutlineMailOutline size={24} />
<input type="text" placeholder='Email'/>
    </div>
    <div className='flex p-4 gap-4 md:mx-8 mx-2 border-[1px] rounded-md mt-4 '>
<CiLock size={24} />
<input type="password" placeholder='Password'/>
    </div>


    
    <div className='flex p-4 gap-4 md:mx-8 mx:2  mt-2 '>


<input type="checkbox" className='bg-[#FF9F0D] text-[#fff]'/>
<p >Reminder ME?</p>
    </div>
    <button className='md:max-w-[360px] w-full h-[44px] md:mx-8 mx:2 mt-4 *:rounded-md bg-[#FF9f0d] text-[#fff] p-4 '>Sign Up</button>
    <p className="text-right mt-4 md:mx-8 mx:2">Forgot Password</p>




<div className="w-full mx-8 mt-8 flex items-center  justify-center">
    <hr className="w-1/3 bg-gray-600 border-[1px]"/>
    <span className="text-gray-500 border-[2px] p-2">OR</span>
    <hr className="w-1/3 bg-gray-600 border-[1px]"/>

</div>
    <div className='flex p-4 gap-16 md:mx-8 mx:2 border-[1px] rounded-md mt-4 '>
<FcGoogle size={24} />
<p>Sign up with Google</p>
    </div>




    <div className='flex p-4 gap-16 md:mx-8 mx:2 border-[1px] rounded-md mt-4 '>
<FaApple size={23} />
<p>Sign up with APPLE</p>
    
</div>
</div>


</div>
        </div>
    )
}
export default page;