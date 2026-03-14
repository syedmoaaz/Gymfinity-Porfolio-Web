import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    title: "Love the Simplicity",
    review:
      "Gymfinity ne hamara poora management automate kar diya. Attendance aur fee tracking bohat easy ho gayi.",
    name: "Ali Khan",
    city: "Karachi",
    role: "Owner",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    title: "Love the Simplicity",
    review:
      "Gymfinity ne hamara poora management automate kar diya. Attendance aur fee tracking bohat easy ho gayi.",
    name: "Ali Khan",
    city: "Karachi",
    role: "Owner",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    title: "Excellent System",
    review:
      "System clean aur simple hai. Members ka record maintain karna ab bohat easy ho gaya.",
    name: "Usman Sheikh",
    city: "Lahore",
    role: "Founder",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    title: "Excellent System",
    review:
      "System clean aur simple hai. Members ka record maintain karna ab bohat easy ho gaya.",
    name: "Usman Sheikh",
    city: "Lahore",
    role: "Founder",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=5",
  },
 
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* Heading */}
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The Impact of <br />
          <span className="text-gymfinity-400">
            GymFinity on Fitness Businesses
          </span>
        </h3>
      </div>

      {/* 🔥 Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg bg-white shadow-md group p-8"
            >

              {/* Expanding Circle Hover Effect */}
              <div className="absolute -top-20 -left-20 w-56 h-56 bg-gymfinity-400 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out"></div>

              <div className="relative z-10 transition-colors duration-300">

                {/* Quote */}
                <div className="text-4xl text-white mb-4">
                  <RiDoubleQuotesL />
                </div>

                {/* Stars */}
                <div className="mb-3 text-gymfinity-400 group-hover:text-white transition">
                  {"⭐".repeat(item.rating)}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-gymfinity-400 group-hover:text-white transition mb-3">
                  {item.title}
                </h4>

                {/* Review */}
                <p className="text-gray-500 group-hover:text-gray-200 transition mb-6 text-sm leading-relaxed">
                  {item.review}
                </p>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto border-2 border-gymfinity-400 group-hover:border-white transition mb-3"
                />

                {/* Name + Role + City */}
                <h5 className="text-lg font-semibold text-gymfinity-400 group-hover:text-white transition">
                  {item.name}
                </h5>

                <h6 className="text-sm text-gray-500 group-hover:text-gray-200 transition">
                  {item.role} — {item.city}
                </h6>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

