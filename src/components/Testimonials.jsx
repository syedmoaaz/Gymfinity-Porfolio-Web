import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import RowHausLogo from "../Assets/RowHaus Logo.webp";
import SteelGymLogo from "../Assets/SteelGymLogo.png";
import ForgeFitnessLogo from "../Assets/ForgeFitnessLogo.png";
import DohsArenaGymLogo from "../Assets/DohsArenaGymLogo.jpeg";
import ThriveFitnessLogo from "../Assets/ThriveFitnessLogo.png";
import OnyxGymLogo from "../Assets/OnyxGymLogo.jpg";

import "swiper/css";
import "swiper/css/pagination";

const PREVIEW_LIMIT = 200;

const reviews = [
  {
    title: "Incredible Partner",
    review:
      "Thank you Gymfinity, for being such an incredible partner. We absolutely love the software. It has made managing our gym so much easier. A special mention to Moaaz, who has been an absolute gentleman throughout. He's always available, responsive and genuinely committed to helping whenever we need him.",
    name: "Meherdil Babai",
    city: "RowHaus",
    role: "Owner",
    rating: 5,
    image: RowHausLogo,
  },
  {
    title: "Amazing Support Team",
    review:
      "GymFinity Software is best for gyms and the support team is very responsive and always available whenever we need help or guidance regarding the software features.",
    name: "Shahzad Ahmed Qureshi",
    city: "Chain Of Steel Gym",
    role: "Owner",
    rating: 5,
    image: SteelGymLogo,
  },
  {
    title: "Time Savers",
    review:
      "System is great and they also added all our old members data from registration forms into the system, which helped us a lot and made gym management much easier.",
    name: "Abdullah Bin Israr",
    city: "Forge Fitness",
    role: "Owner",
    rating: 5,
    image: ForgeFitnessLogo,
  },
  {
    title: "Excellent System",
    review:
      "We installed GymFinity in our society gym, and the experience has been outstanding. They also customized the system according to our requirements in a very short time.",
    name: "Team DOHS",
    city: "DOHS Arena Gym",
    role: "Staff",
    rating: 5,
    image: DohsArenaGymLogo,
  },
  {
    title: "Very Efficient Software",
    review:
      "I have been using this software in my gym Thrive Fitness for a while now, and my experience has been excellent. The system is very efficient and user friendly.",
    name: "Umer Zubair",
    city: "Thrive Fitness",
    role: "Owner",
    rating: 5,
    image: ThriveFitnessLogo,
  },
  {
    title: "Easy to Use and Manage",
    review:
      "GymFinity is very easy to use and manage . It has all the features that a gym needs to manage its operations efficiently, really liked the POS feature. ",
    name: "Rayyan Amir",
    city: "Onyx Gym and Fitness Studio",
    role: "Owner",
    rating: 5,
    image: OnyxGymLogo,
  },
];

const Testimonials = () => {
  const [activeReview, setActiveReview] = useState(null);

  useEffect(() => {
    if (!activeReview) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveReview(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeReview]);

  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The Impact of <br />
          <span className="text-gymfinity-400">
            GymFinity on Fitness Businesses
          </span>
        </h3>
      </div>

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
        className="max-w-6xl mx-auto !pb-12 [&_.swiper-slide]:!h-auto [&_.swiper-wrapper]:!items-stretch"
      >
        {reviews.map((item, index) => {
          const isLong = item.review.length > PREVIEW_LIMIT;

          return (
            <SwiperSlide key={index} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg bg-white shadow-md group p-8 h-full flex flex-col"
              >
                <div className="absolute -top-20 -left-20 w-56 h-56 bg-gymfinity-400 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />

                <div className="relative z-10 transition-colors duration-300 flex flex-col h-full">
                  <div className="text-4xl text-white mb-4">
                    <RiDoubleQuotesL />
                  </div>

                  <div className="mb-3 text-gymfinity-400 group-hover:text-white transition">
                    {"⭐".repeat(item.rating)}
                  </div>

                  <h4 className="text-xl font-semibold text-gymfinity-400 group-hover:text-white transition mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 group-hover:text-gray-200 transition text-sm leading-relaxed line-clamp-4 min-h-[5.5rem]">
                    {item.review}
                  </p>

                  {isLong ? (
                    <button
                      type="button"
                      onClick={() => setActiveReview(item)}
                      className="mt-2 mb-6 self-start text-sm font-semibold text-gymfinity-400 group-hover:text-white transition underline-offset-2 hover:underline"
                    >
                      Read more
                    </button>
                  ) : (
                    <div className="mb-6 mt-2 h-5" aria-hidden="true" />
                  )}

                  <div className="mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gymfinity-400 group-hover:border-white transition mb-3"
                    />

                    <h5 className="text-lg font-semibold text-gymfinity-400 group-hover:text-white transition">
                      {item.name}
                    </h5>

                    <h6 className="text-sm text-gray-500 group-hover:text-gray-200 transition">
                      {item.role} — {item.city}
                    </h6>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {activeReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setActiveReview(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveReview(null)}
              aria-label="Close review"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
            >
              &times;
            </button>

            <div className="mb-3 text-gymfinity-400">
              {"⭐".repeat(activeReview.rating)}
            </div>

            <h4
              id="review-modal-title"
              className="text-xl font-semibold text-gymfinity-400 mb-4"
            >
              {activeReview.title}
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activeReview.review}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={activeReview.image}
                alt={activeReview.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gymfinity-400"
              />
              <div>
                <p className="font-semibold text-gymfinity-400">
                  {activeReview.name}
                </p>
                <p className="text-sm text-gray-500">
                  {activeReview.role} — {activeReview.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
