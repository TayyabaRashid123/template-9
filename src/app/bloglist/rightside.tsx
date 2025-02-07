import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { FaStar, FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

interface Data {
  id: number;
  img: string;
  date: string;
  des: string;
}
interface Data1{
    id:number;
    img:string;
    title:string;
    review:number;
}

const Rightside = () => {
  const data: Data[] = [
    {
      id: 1,
      img: "/me8.JPG",
      date: "June 22, 2020",
      des: "Lorem ipsum dolor sit cingelit, sed do",
    },
    {
      id: 2,
      img: "/sh2.JPG",
      date: "June 22, 2020",
      des: "Lorem ipsum dolor sit cingelit, sed do",
    },
    {
      id: 3,
      img: "/me6.JPG",
      date: "June 22, 2020",
      des: "Lorem ipsum dolor sit cingelit, sed do",
    },
    {
      id: 4,
      img: "/me7.JPG",
      date: "June 22, 2020",
      des: "Lorem ipsum dolor sit cingelit, sed do",
    },
  ];
const data1:Data1[] =[
    {
        id:1,
        img:"/chick.JPG",
        title:"Chicken Fry",
        review:26,
    },
    {
        id:2,
        img:"/f2.png",
        title:"Burger Food",
        review:46,
    },
    {
        id:3,
        img:"/pizza.png",
        title:"Pizza",
        review:16,
    },
    {
        id:4,
        img:"/f1.JPG",
        title:"Fresh Fruits",
        review: 36,
    },
    {
        id:5,
        img:"/Vegetable.png",
        title:"Vegetable",
        review:16,
    },
]

  return (
    <div className="md:max-w-[424px] w-full my-16 h-fit px-9">
      {/* Search Box */}
      <button className="flex md:max-w-[422px] w-full my-4 border-gray-500 border-2 h-[70px] rounded-[4px]">
        <input
          type="text"
          placeholder="search your keyword..."
          className="pl-5 pt-6 flex-grow"
        />
        <span className="w-[76px] h-[65px] rounded-r-md bg-[#FF9F0D] text-[#fff] p-2">
          <CiSearch size={24} className="ml-4 mt-4" />
        </span>
      </button>

      {/* Client Card */}
      <div className="md:max-w-[424px] w-full h-[423px] px-8 border-2 mb-4 border-gray-300">
        <div className="w-[322px] h-[357px] space-y-2">
          <Image
            src="/cl1.JPG"
            alt="client"
            width={148}
            height={130}
            className="mx-[80px] mt-6"
          />
          <h2 className="text-center text-[20px] font-bold">Prince Miyako</h2>
          <p className="text-center text-[#828282]">Blogger/Photographer</p>
          <p className="flex gap-4 justify-center">
            <span className="flex gap-2 ml-12">
              <FaStar size={14} className="text-[#FF9F0D]" />
              <FaStar size={14} className="text-[#FF9F0D]" />
              <FaStar size={14} className="text-[#FF9F0D]" />
              <FaStar size={14} className="text-[#FF9F0D]" />
              <FaStar size={14} className="text-[#FF9F0D]" />
            </span>
            <span className="text-[#ffc9c9]">(1 Review)</span>
          </p>

          <p className="w-[300px] text-center">
            Lorem ipsue dolor sit amet, consectetur adipiscing elit, veritatis
            distinctio, odio eligendi suscipit reprehenderit atque
          </p>

          <span className="flex justify-center gap-3">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaGithub size={20} />
          </span>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="md:max-w-[423px] h-[583px] w-full border-2 border-gray-300">
        <h2 className="text-[20px] font-bold mx-8 mt-6">Recent Post</h2>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex mt-2 flex-col md:flex-row gap-4 p-4 border-b-2 border-gray-300"
          >
            <Image
              src={item.img}
              alt={item.date}
              width={99}
              height={92}
              className="w-[99px] h-[92px] rounded-md"
            />
            <div>
              <p className="opacity-30">{item.date}</p>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>

      {/*forth div*/}
      <div className="md:max-w-[423px] h-[745px] mt-4 w-full border-2 border-gray-300">
        <h2 className="text-[20px] font-bold mx-8 mt-6">Filter by Menu</h2>
        {data1.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mt-2 flex-col md:flex-row gap-4 p-4 "
          >
            <div className="flex gap-4">
            <Image
              src={item.img}
              alt={item.title}
              width={99}
              height={92}
              className="w-[99px] h-[92px] rounded-md"
            />
            
              <h2 className="font-bold text-[16px] mt-8">{item.title}</h2>
              </div>
              <p className="mt-8 font-semibold">{item.review}</p>
            
          </div>
        ))}
      </div>
      

        


    </div>
  );
};

export default Rightside;
