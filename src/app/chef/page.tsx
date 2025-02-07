import Common from ' @/components/common';
import React from 'react'
import Image from 'next/image'



interface Chef{
    id:number;
    img:string;
    name:string;
    title:string;
}
const page = () =>{
    const chefData:Chef[]=[
        {
        id:1,
        img:"/ch1.png",
        name:"Tahmina Rumi",
        title:"Chef"
    },
    {
        id:2,
        img:"/ch2.png",
        name:"Jornia Begum",
        title:"Chef"
    },
    {
        id:3,
        img:"/ch3.png",
        name:"M.Mohammad",
        title:"Chef"
    },
    {
        id:4,
        img:"/ch4.png",
        name:"Munna Katthy",
        title:"Chef"
    },
    {
        id:5,
        img:"/ch5.png",
        name:"Tahmina Rumi",
        title:"Chef"
    },
    {
        id:6,
        img:"/ch6.png",
        name:"Bisna devgon",
        title:"Chef"
    },
    {
        id:7,
        img:"/ch7.png",
        name:"Motin Molladasf",
        title:"Chef"
    },
    {
        id:8,
        img:"/ch8.png",
        name:"William Rumi",
        title:"Chef"
    },
    {
        id:9,
        img:"/ch9.png",
        name:"kats william roy",
        title:"Chef"
    },
    {
        id:10,
        img:"/ch10.png",
        name:"Mahmud Khuli",
        title:"Chef"
    },
    {
        id:11,
        img:"/ch11.png",
        name:"Ataur Rehman",
        title:"Chef"
    },
    {
        id:12,
        img:"/ch12.png",
        name:"Monalisa holly",
        title:"Chef"
    },
]
    return(
<div className='md:max-w-[1920px] w-full mx-auto'>
    <Common title='Our Chef' subtitle='chef'/>
    <div className="md:max-w-[1320] px-8">
        <div className='grid gap-6 md:grid-cols-4 sm:grid-col-2 grid-cols-1 justify-center items-center my-12'>
            {chefData.map((item,index)=>(
            <div key={index} className=' w-full max-w-[312px] mx-auto p-4 bg-white shadow-lg rounded-lg'>

<Image
 src={item.img} 
 alt={item.title} 
 width={312} 
 height={380}
  className="w-full mb-4 rounded-lg object-cover"/>
<h2 className='text-center font-bold text-lg mb-2'>{item.name}</h2>

<p className='text-center text-sm text-gray-600'>{item.title}</p>item

            </div>

                            ))},
        </div>






    </div>

</div>
                )
            }
export default page