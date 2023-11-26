import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" h-[250px] sm:h-[300px] md:h-[500px] lg:h-[700px]">
            <div className="relative">
              <div>
                <div className=" text-center pr-24 md:pr-2 pt-[160px] lg:pt-[450px] mx-auto w-[500px]">
                  <h1 className="text-[10px] font-font-caveat md:text-3xl font-bold">
                    Unleash Academic Excellence <br /> with Our Student and
                    Class Management Mastery.
                  </h1>
                  <button className="btn btn-sm md:btn-lg btn-error text-white font-font-caveat mt-4 mr-4">
                    Learn more
                  </button>
                  <button className="btn btn-sm md:btn-lg btn-outline btn-primary font-font-caveat font-bold">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="absolute top-1 flex gap-4 md:gap-12">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="pt-24 md:pt-40"
                >
                  <img
                    className="w-80 top-2 left-3 rounded-lg shadow-2xl"
                    src="https://i.ibb.co/zF4q93S/huma-h-yardim-5-Lv-C-QX0-OOc-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div data-aos="zoom-in">
                  <img
                    className="w-80 top-3 rounded-lg shadow-2xl"
                    src="https://i.ibb.co/DRf8svD/windows-v94mlgvsza4-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="pt-7 md:pt-14"
                >
                  <img
                    className="w-80 top-3 rounded-lg shadow-2xl"
                    src="https://i.ibb.co/tCkLFhZ/gery-wibowo-Eti6ph51-H4-A-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div data-aos="zoom-in">
                  <img
                    className="w-80 top-3 rounded-lg shadow-2xl"
                    src="https://i.ibb.co/g9MbKNr/elijah-hail-y-Lpb-Sjx-Mp-CU-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="pt-14 md:pt-32"
                >
                  <img
                    className="w-80 top-3 rounded-lg shadow-2xl"
                    src="https://i.ibb.co/J5Tf7jq/clay-banks-GX8-KBb-Vm-C6c-unsplash.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[250px] sm:h-[300px] md:h-[500px] lg:h-[700px]">
            <div>
              <div className=" text-center pr-24 md:pr-2 pt-[160px] lg:pt-[450px] mx-auto w-[500px]">
                <h1 className="text-[10px] md:text-3xl font-bold">
                  Unleash Academic Excellence <br /> with Our Student and Class
                  Management Mastery.
                </h1>
                <button className="btn btn-sm md:btn-lg btn-error text-white mt-4 mr-4">
                  Learn more
                </button>
                <button className="btn btn-sm md:btn-lg btn-outline btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="absolute top-1 flex gap-4 md:gap-12">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-24 md:pt-40"
              >
                <img
                  className="w-80 top-2 left-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/zF4q93S/huma-h-yardim-5-Lv-C-QX0-OOc-unsplash.jpg"
                  alt=""
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/DRf8svD/windows-v94mlgvsza4-unsplash.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-7 md:pt-14"
              >
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/tCkLFhZ/gery-wibowo-Eti6ph51-H4-A-unsplash.jpg"
                  alt=""
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/g9MbKNr/elijah-hail-y-Lpb-Sjx-Mp-CU-unsplash.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-14 md:pt-32"
              >
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/J5Tf7jq/clay-banks-GX8-KBb-Vm-C6c-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[250px] sm:h-[300px] md:h-[500px] lg:h-[700px]">
            <div>
              <div className=" text-center pr-24 md:pr-2 pt-[160px] lg:pt-[450px] mx-auto w-[500px]">
                <h1 className="text-[10px] md:text-3xl font-bold">
                  Unleash Academic Excellence <br /> with Our Student and Class
                  Management Mastery.
                </h1>
                <button className="btn btn-sm md:btn-lg btn-error text-white mt-4 mr-4">
                  Learn more
                </button>
                <button className="btn btn-sm md:btn-lg btn-outline btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="absolute top-1 flex gap-4 md:gap-12">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-24 md:pt-40"
              >
                <img
                  className="w-80 top-2 left-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/zF4q93S/huma-h-yardim-5-Lv-C-QX0-OOc-unsplash.jpg"
                  alt=""
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/DRf8svD/windows-v94mlgvsza4-unsplash.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-7 md:pt-14"
              >
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/tCkLFhZ/gery-wibowo-Eti6ph51-H4-A-unsplash.jpg"
                  alt=""
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/g9MbKNr/elijah-hail-y-Lpb-Sjx-Mp-CU-unsplash.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="pt-14 md:pt-32"
              >
                <img
                  className="w-80 top-3 rounded-lg shadow-2xl"
                  src="https://i.ibb.co/J5Tf7jq/clay-banks-GX8-KBb-Vm-C6c-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
