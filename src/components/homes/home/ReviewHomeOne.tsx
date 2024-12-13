 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


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
              <div className="review-slider owl-carousel owl-loaded owl-drag">
                
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true} 
                  pagination={{el: ".owl-dots", clickable: true}}
                  modules={[Autoplay, Navigation, Pagination]}
                  navigation={{ nextEl: '.owl-next', prevEl: '.owl-prev' }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  centeredSlides={true} 
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  className="owl-stage-outer">

                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/3.jpg" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Aria Nakamura</h4>
                        <p>
                        Comprehensive sleep research platform providing innovative insights into personal health patterns.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/1.jpg" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Elizabeth Sinclair</h4>
                        <p>
                        User-friendly interface enables seamless participation in groundbreaking scientific sleep investigations.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/3.jpg" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Victoria Anderson</h4>
                        <p>
                        Empowering individuals to understand and improve their unique sleep experiences.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/1.jpg" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Sophia Rodriguez</h4>
                        <p>
                        Professional, confidential survey methodology delivering valuable data for wellness research.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/2.jpg" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Emma Thompson</h4>
                        <p>
                        Transformative approach connecting scientific research with practical individual sleep improvement strategies.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   

                </Swiper>

                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="bx bx-chevrons-left"></i>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="bx bx-chevrons-right"></i>
                  </button>
                </div>

                <div className="owl-dots"> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
}
