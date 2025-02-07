import React from "react";
import Image from "next/image";

interface Data {
  id: number;
  img: string;
  title: string;
  date: string;
}

const Footer = () => {
  const data: Data[] = [
    {
      id: 1,
      img: "/1.JPG",
      title: "Is fast food good for your body?",
      date: "February 28, 2022",
    },
    {
      id: 2,
      img: "/1.JPG",
      title: "Change your food habit with organic food",
      date: "February 28, 2022",
    },
    {
      id: 3,
      img: "/1.JPG",
      title: "Do you like fast food for your life?",
      date: "February 28, 2022",
    },
  ];

  return (
    <footer className="bg-black text-white py-10">
      {/* Upper Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-[#FF9F0D] pb-6">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
            </h2>
            <p className="text-sm md:text-base">
              Don't wait, make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col md:flex-row items-center ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full md:w-[304px] px-4 py-3 bg-[#FF9F0D] text-white rounded-md placeholder-white"
            />
            <button className="w-full md:w-[163px] bg-white text-[#FF9F0D] px-4 py-3 rounded-md font-semibold">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-sm">
            Corporate clients and leisure travelers rely on Groundlink for safe, professional chauffeured car service worldwide.
          </p>
          <div className="flex items-center space-x-4">
            <button className="w-[50px] h-[50px] bg-[#FF9F0D] rounded-md flex justify-center items-center">
              <Image src="/icon.jpg" alt="icon" width={30} height={30} />
            </button>
            <div>
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs">Mon-Sat (8.00 - 6.00) <br /> Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold">Useful Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold">Help?</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg font-bold">Recent Posts</h2>
          <div className="mt-3 space-y-4">
            {data.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image src={item.img} alt={item.title} width={60} height={60} className="rounded-md" />
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
