


// import { motion } from "framer-motion";

// const reviews = [
//   {
//     name: "Ali Khan",
//     gym: "PowerFit Gym",
//     city: "Karachi",
//     rating: 5,
//     image: "https://i.pravatar.cc/100?img=3",
//     review:
//       "Gymfinity ne hamara poora management automate kar diya. Attendance aur fee tracking bohat easy ho gayi.",
//   },
//   {
//     name: "Usman Sheikh",
//     gym: "Iron House Fitness",
//     city: "Lahore",
//     rating: 5,
//     image: "https://i.pravatar.cc/100?img=5",
//     review:
//       "System clean aur simple hai. Members ka record maintain karna ab bohat easy ho gaya.",
//   },
//   {
//     name: "Ahmed Raza",
//     gym: "Beast Mode Gym",
//     city: "Islamabad",
//     rating: 4,
//     image: "https://i.pravatar.cc/100?img=8",
//     review:
//       "Dashboard aur reports feature bohat helpful hain. Highly recommended for gym owners.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

//       {/* Soft Glow Background */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gymfinity-400 opacity-10 blur-[160px] rounded-full pointer-events-none"></div>

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <div className="inline-block px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-gray-200 text-gray-700 rounded-md mb-6">
//             FEEDBACK THAT KEEPS US GROWING
//           </div>

//           <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
//             Pakistan's Fastest <br />
//             Growing{" "}
//             <span className="text-gymfinity-400">
//               Gym Management Software
//             </span>
//           </h2>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//           {reviews.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: index * 0.25,
//                 duration: 0.6,
//               }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-500 overflow-hidden"
//             >

//               {/* Animated Side Line */}
//               <motion.div
//                 className="absolute left-0 top-0 w-[3px] h-24 bg-gradient-to-b from-gymfinity-400 to-transparent rounded-full"
//                 animate={{
//                   y: ["-20%", "300%"]
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2,
//                   ease: "linear"
//                 }}
//               />

//               {/* Rating */}
//               <div className="text-gymfinity-400 mb-4 text-lg">
//                 {"⭐".repeat(item.rating)}
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">
//                 "{item.review}"
//               </p>

//               {/* User Info */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-gymfinity-400"
//                 />
//                 <div>
//                   <h4 className="text-gray-900 font-bold text-base">
//                     {item.name}
//                   </h4>
//                   <p className="text-gray-500 text-sm">
//                     {item.gym} — {item.city}
//                   </p>
//                 </div>
//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;







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
  // {
  //   title: "Efficient & Reliable",
  //   review:
  //     "Dashboard aur reports feature bohat helpful hain. Highly recommended for gym owners.",
  //   name: "Ahmed Raza",
  //   city: "Islamabad",
  //   role: "Director",
  //   rating: 4,
  //   image: "https://i.pravatar.cc/100?img=8",
  // },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-16">

        {/* Badge */}
        <div className="inline-block px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-gray-200 text-gray-700 rounded-md mb-6">
          CLIENT FEEDBACK
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          The Impact of <br />
          <span className="text-gymfinity-400">
            GymFinity on Fitness Businesses
          </span>
        </h2>
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

