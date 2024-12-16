type Props = {
  style_2?: boolean;
  style_3?: boolean;
};

const instructorsData = [
  {
    id: 1,
    name: "Masum Billah",
    image: "assets/img/instructor/1.png",
    candidates: "25+ Candidates",
    courses: "32 Courses",
  },
  {
    id: 2,
    name: "Munaim Billah",
    image: "assets/img/instructor/2.png",
    candidates: "25+ Candidates",
    courses: "32 Courses",
  },
  // {
  //   id: 3,
  //   name: "Motasim Billah",
  //   image: "assets/img/instructor/3.png",
  //   candidates: "25+ Candidates",
  //   courses: "32 Courses",
  // },
  // {
  //   id: 4,
  //   name: "Ekram Hossain",
  //   image: "assets/img/instructor/4.png",
  //   candidates: "25+ Candidates",
  //   courses: "32 Courses",
  // },
];

export default function InstructorsHomeOne({ style_2, style_3 }: Props) {
  return (
    <>
      <section
        className={`instructors ${style_3 ? "instyle-2 pb120" : "section-paddding"}  ${style_2 ? "instyle-2" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 wow fadeInUp">
              <div className="section-title">
                <span>Talented Instructors</span>
                <h2>Our Expert Instructors</h2>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 align-self-center title_btn wow fadeIn">
              <a href="#" className="bg_btn bt">
                View All
              </a>
            </div>

            {instructorsData.map((instructor) => (
              <div key={instructor.id} className="col-xl-3 col-md-6 col-12 wow fadeIn">
                <div className="single-instructor">
                  <div className="inimage">
                    <img src={instructor.image} alt={instructor.name} />
                    <span className="sicon">
                      <a href="#">
                        <i className="bx bx-plus"></i>
                      </a>
                    </span>
                    <div className="social-link">
                      <ul>
                        <li>
                          <a href="#" className="fb_bg">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="tw_bg">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="li_bg">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="inbottom">
                    <h3>
                      <a href="#">{instructor.name}</a>
                    </h3>
                    {!style_2 && (
                      <div className="inmeta">
                        <span className="float-start">
                          <i className="bx bx-user"></i>
                          <p>{instructor.candidates}</p>
                        </span>

                        <span className="float-end">
                          <i className="bx bx-file-blank"></i>
                          <p>{instructor.courses}</p>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
