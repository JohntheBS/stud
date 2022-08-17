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
  const pics = [pic, pic2, pic3, pic4, pic5, pic6, pic7];
  return (
    <>
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
            <SwiperSlide >
              <Box className='h-[350px] sm:h-[450px]  md:grid grid-cols-2 gap-5 hidden
              '>

                <img src={pic} alt="cover" className="p-4 rounded-xl h-[400px] w-full object-cover" />
                <div className="py-6 px-2 grid">
                  <h1 className="text-3xl font-bold mt-16">Course Title</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio vel. Quae dicta libero nisi fugit culpa sunt, minima, doloremque molestiae excepturi, adipisci explicabo corrupti nam accusantium quidem deserunt quibusdam?
                  Aspernatur amet deleniti rem autem hic quaerat dolores, earum voluptate perferendis debitis tempore, eius explicabo corporis, sit sunt tempora eveniet harum magni ea. Tenetur aliquid fugiat quis iure porro corporis.
                  Explicabo, sit id quidem soluta deleniti ex delectus possimus aut distinctio fugiat voluptates nesciunt magnam enim alias dolor error expedita incidunt esse voluptate nisi aspernatur illum. Nam labore praesentium quibusdam?
                  <div className="flex gap-5 my-6">
                    <Button variant="outline" className="hover:text-white hover:bg-blue-500">Join Course</Button>
                    <Button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">View books</Button>
                  </div>
                </div>
              </Box>
              <Box className="relative md:hidden h-[350px]">

                <div className=" absolute  bg-black/30 h-[100%] w-full z-10 flex flex-col justify-center items-center gap-3">
                  <h1 className="text-white text-xl font-bold">Switching Networks</h1>
                  <div className="flex gap-2">
                    <Button variant="outline" className="hover:text-white hover:bg-blue-500">Join Course</Button>
                    <Button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">View books</Button>
                  </div>
                </div>
                <img src={pic} alt="test" className="absolute h-full w-full object-cover" />
              </Box>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}