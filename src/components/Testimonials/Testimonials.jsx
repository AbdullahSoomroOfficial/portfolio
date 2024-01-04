import React from "react";
import "./Testimonials.css";
import Avatar1 from "./../../assets/avatar1.jpg";
import Avatar2 from "./../../assets/avatar2.jpg";
import Avatar3 from "./../../assets/avatar3.jpg";
import Avatar4 from "./../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonial</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            delectus fugiat voluptatibus vel non impedit amet autem nostrum,
            nobis incidunt!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar2} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            delectus fugiat voluptatibus vel non impedit amet autem nostrum,
            nobis incidunt!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar3} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            delectus fugiat voluptatibus vel non impedit amet autem nostrum,
            nobis incidunt!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar4} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            delectus fugiat voluptatibus vel non impedit amet autem nostrum,
            nobis incidunt!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
