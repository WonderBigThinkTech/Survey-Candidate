import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    id: 1,
    name: "Aria Nakamura",
    image: "team/1.png",
    rating: 5.0,
    review: "Principal Scientist Bioinformatics Centre, CSIR-IMTech, Chandigarh"
  },
  {
    id: 2,
    name: "Elizabeth Sinclair",
    image: "team/2.jpg",
    rating: 5.0,
    review: "Senior Research Fellow Bioinformatics Centre, CSIR-IMTech, Chandigarh "
  }
];

export default function ReviewHomeOne() {
  return (
    <>
      <section className="review section-padding">
        <div className="container">
          <div className="row">
            <div className="col-10 wow fadeInUp">
              <div className="section-title">
                <span>Our Candidates Review</span>
                <h2>What Our Candidates Are Says</h2>
              </div>
            </div>

            <div className="col-xl-12 wow fadeIn">
              <div className="review-slider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{ el: ".owl-dots", clickable: true }}
                  modules={[Autoplay, Navigation, Pagination]}
                  navigation={{ nextEl: ".owl-next", prevEl: ".owl-prev" }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  centeredSlides={true}
                  className="owl-stage-outer"
                >
                  {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="owl-item">
                      <div className="review-item">
                        <div className="rimage">
                          <img src={review.image} alt="review" />
                        </div>
                        <div className="rev-content">
                          <h4>{review.name}</h4>
                          <p>{review.review}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="owl-nav">
                  <button type="button" role="presentation" className="owl-prev">
                    <i className="bx bx-chevrons-left"></i>
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <i className="bx bx-chevrons-right"></i>
                  </button>
                </div>

                <div className="owl-dots"></div>
              </div>
            </div>
          </div>
        </div>

        <ul className="circles">
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </section>
    </>
  );
}
