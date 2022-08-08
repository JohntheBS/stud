import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button } from "@mantine/core";

export default function Swipe() {
  const pic = require('../assets/images/pic.jpg');
  const pic2 = require('../assets/images/pic2.jpg');
  const pic3 = require('../assets/images/pic3.jpg');
  const pic4 = require('../assets/images/pic4.jpg');
  const pic5 = require('../assets/images/pic5.jpg');
  const pic6 = require('../assets/images/pic6.jpg');
  const pic7 = require('../assets/images/pic7.jpg');
  const pics = [pic, pic2, pic3, pic4, pic5, pic6,pic7];
  return (
    <>
      <Box className="flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold text-center text-blue-500 m-4">How to contact us</h1>
        <p className="text-center lg:px-40 py-4 text-black/75">Email us with any questions or inquiries or  call +237 657 443 611.We would be happy to answer your questions and set up a meeting with you. Thinkers can help set you apart from the flock!</p>
        <h1 className="text-4xl font-bold text-center text-blue-500 m-4">What we do</h1>
      </Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-4"
      >
        
        {pics.map(pic => {
          return (
            <SwiperSlide>
              <Box className='relative h-[350px] sm:h-[500px]'>
                <div className='h-full w-full absolute text-center text-white flex flex-col justify-end items-center pb-24'></div>
                <img src={pic} alt="cover" className='w-full object-cover top-[50%] h-full' />
              </Box>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}