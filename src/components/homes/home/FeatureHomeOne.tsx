 
import './FeatureHomeOne.scss'
import { RiSurveyLine } from "react-icons/ri";
import { AiOutlineForm } from "react-icons/ai";
import { TiUserAdd } from "react-icons/ti";
import { GiNightSleep } from "react-icons/gi";

type Props = {
  style_2?: boolean
}

export default function FeatureHomeOne({style_2}: Props) {

  
  return (
    <>
      <section className={`features section-padding ${style_2 ? 'fstyle-2' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp wow fadeIn">
              <div className="section-title text-center">
                <span>Features</span>
                <h2>How to Start</h2>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                <TiUserAdd />
                </div>
                <h3>Register With Your Email</h3>
                <p>Help researchers understand sleep health effectively today.  </p>
                <span className="fnumber">01</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                <RiSurveyLine />
                </div>
                <h3>Take the Survey Form</h3>
                <p>Please take the survey form seriously today.</p>
                <span className="fnumber">02</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                <AiOutlineForm />
                </div>
                <h3>Fill the Forms</h3>
                <p>Don’t forget to fill the forms accurately</p>
                <span className="fnumber">03</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                <GiNightSleep />
                </div>
                <h3>Know Your Sleep Quality</h3>
                <p>Understand your sleep quality for better health. </p>
                <span className="fnumber">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
