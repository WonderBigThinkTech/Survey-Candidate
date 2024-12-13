 
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import jpg01 from './CoursesHomeOneImg/jpg01.jpg'
import jpg02 from './CoursesHomeOneImg/jpg02.jpg'
import jpg03 from './CoursesHomeOneImg/jpg03.jpg'
import jpg04 from './CoursesHomeOneImg/jpg04.jpg'

export default function CoursesHomeOne() {
  return (
    <>
      <section className="courses" id='candidate'>
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="section-title">
                <span>From our candidates</span>
                <h2>Our Candidates are the best</h2>
              </div>
            </div>

            <div className="col-12 wow fadeIn">

              <div className="courses-slider owl-carousel owl-loaded owl-drag">
                
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={
                      { nextEl: '.owl-next', prevEl: '.owl-prev' }
                    }
                    breakpoints={{
                      0: {
                        slidesPerView: 1
                      },
                      768: {
                        slidesPerView: 2
                      },
                      1200: {
                        slidesPerView: 3
                      }
                    }}
                    className="courses-slider owl-carousel owl-loaded owl-drag">

                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src={jpg01} alt="course image" />
                        <span className="cprice">$50.00</span>
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span>(21)</span>
                          </a>
                        </div>
                        <h2><Link to="#">Your Sleep Data Matters To Us</Link></h2>


                        <div className="course_btm">
                          <div className="cauthor">
                            <a href="#">
                              <img src="assets/img/review/1.jpg" alt="" />
                              <span>Masum Billah</span>
                            </a>
                          </div>

                          <div className="ccategory">
                            <a href="#">
                              WordPress
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src={jpg02} alt="course image" />
                        <span className="cprice">$50.00</span>
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span>(21)</span>
                          </a>
                        </div>
                        <h2><Link to="#">Contribute Valuable Insights For Sleep Health</Link></h2>

                        <div className="course_btm">
                          <div className="cauthor">
                            <a href="#">
                              <img src="assets/img/review/1.jpg" alt="" />
                              <span>Masum Billah</span>
                            </a>
                          </div>

                          <div className="ccategory">
                            <a href="#">
                              JavaScript
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src={jpg03} alt="course image" />
                        <span className="cprice">$50.00</span>
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span>(21)</span>
                          </a>
                        </div>
                        <h2><Link to="#">Together We'll Unlock Sleep's Wellness Secrets</Link></h2>
                        
                        <div className="course_btm">
                          <div className="cauthor">
                            <a href="#">
                              <img src="assets/img/review/1.jpg" alt="" />
                              <span>Masum Billah</span>
                            </a>
                          </div>

                          <div className="ccategory">
                            <a href="#">
                              Laravel
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src={jpg04} alt="course image" />
                        <span className="cprice">$50.00</span>
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span>(21)</span>
                          </a>
                        </div>
                        <h2><Link to="#">Insightful Sleep Research Helps Everyone Improve</Link></h2>

                        <div className="course_btm">
                          <div className="cauthor">
                            <a href="#">
                              <img src="assets/img/review/1.jpg" alt="" />
                              <span>Masum Billah</span>
                            </a>
                          </div>

                          <div className="ccategory">
                            <a href="#">
                              PHP
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>


                  </Swiper>

               

                  <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev"><i className="bx bx-chevrons-left"></i></button>
                    <button type="button" role="presentation" className="owl-next"><i className="bx bx-chevrons-right"></i></button>
                  </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  )
}
