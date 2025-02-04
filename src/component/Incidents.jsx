import Img from '/img1.png';
import Img2 from '/img2.png';
import Img3 from '/img3.png';
import Img4 from '/img4.png';
import Img5 from '/img5.png';
import Img6 from '/img6.png';
import Img7 from '/Group.png';
import Nav2 from './Nav2';

function Incidents() {
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
      <Nav2 />
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
    </>
  );
}

export default Incidents;
