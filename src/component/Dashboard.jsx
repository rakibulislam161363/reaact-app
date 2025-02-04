import Img from "/img1.png";
import Img2 from "/img2.png";
import Img3 from "/img3.png";
import Img4 from "/img4.png";
import Img5 from "/img5.png";
import Img6 from "/img6.png";
import Img7 from "/Group.png";
import { useState } from "react";
import Nav from "./navenext";


function Dashboard() {
  const [toggless, massageOption] = useState(false);

  const toggleSystem = () => {
    massageOption(!toggless);

  }
  const items = [
    {
      img: Img,
      heding: 'Whitechapel Rd.',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      img: Img2,
      heding: 'Whitechapel Rd.',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      img: Img3,
      heding: 'Tulare County',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      img: Img4,
      heding: 'Tulare County',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      img: Img5,
      heding: 'Tulare County',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      img: Img6,
      heding: 'Tulare County',
      paragraph: 'Tulare County,  Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
  ];
  return (
    <>
      <Nav/>
      <section className="flex justify-center mx-2 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 bg-white">
          {items.map(item => (
            <div key={item}>
              <div className="relative">
                <img src={item.img} alt="" />
                <div className="absolute flex p-2 px-3 gap-1 bg-white rounded-2xl top-3 right-3">
                  <img src={Img7} alt="" />
                  <p>Blizzard</p>
                </div>
              </div>
              <h1 className="text-[16px] font-semibold">{item.heding}</h1>
              <p className="mt-1 text-[#71717A] text-[14px]">
                {item.paragraph}
              </p>
              <p className="text-[16px] font-semibold mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="fixed bottom-8 right-6 rounded-full">
        <button
          className={`${
            toggless ? 'bg-black' : 'bg-[#F26922]'
          }  p-2 px-4 font-semibold rounded-full text-white text-2xl hover:bg-gray-500 shadow-2xl`}
          onClick={toggleSystem}
        >
          {toggless ? 'X' : 'C'}
        </button>
      </div>
      <div className={`${toggless ? 'block' : 'hidden'}`}>
        <div className="fixed bottom-24 right-6 rounded-md bg-[#F4F4F5]">
          <h1 className="pt-4 pb-2 px-3 bg-[#F26922] w-full text-xl text-white rounded-t-md">
            Chat with Cypher
          </h1>
          <p className="w-[250px] mt-3 rounded-lg bg-[#27272A] text-white p-4 ml-20 mb-2 float-end">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
          <div>
            <p className="w-[250px] p-2 mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="w-[250px] p-2 mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="w-[250px] mt-2 rounded-lg bg-[#27272A] text-white p-4 ml-20 mb-10 float-end">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
          <div>
            <input
              className="text-[#71717A] outline-hidden p-1 border-2 rounded-xl w-full border-[#E5E7EB] mr-5 mx-2 mt-1"
              type="text"
              placeholder="Enter your question..."
            />
          </div>
          <div className="flex justify-between mx-2 mt-2 mb-3">
            <div className="flex">
              <img src="Frame(1).png" alt="" />
              <img src="Frame(2).png" alt="" />
              <img src="Frame(3).png" alt="" />
            </div>
            <button className="bg-[#F26922] px-4 p-1 text-white rounded-4xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;