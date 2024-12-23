
"use client"
import { useEffect } from 'react'
import './HeroHomeOne.scss'
import {useState} from 'react';
import surveyImg1 from '/img/jpg05.jpg';
import surveyImg2 from '/img/jpg06.jpg';
import './HeroHomeOneSlider/HeroHomeOneSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HeroHomeOne () { 

  const parallax = (event: MouseEvent) => {
    const elements = document.querySelectorAll<HTMLElement>(".eitem");

    elements.forEach((shift) => {
      const position = Number(shift.getAttribute("value")); // Convert the attribute value to a number
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  useEffect(() => {
    // Add the mousemove event listener when the component mounts
    const handleMouseMove = (event: MouseEvent) => parallax(event);

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to ensure it runs once on mount


  const [showModal, setShowModal] = useState(false);
  const [tick1, setTick1] = useState(false);
  const [tick2, setTick2] = useState(false);
  const [showTick1, setShowTick1] = useState(false);
  const [showTick2, setShowTick2] = useState(false);
  const [showDisagreeMessage, setShowDisagreeMessage] = useState(false);
  const [showDisagreeMessage1, setShowDisagreeMessage1] = useState(false);


  const modalClick = () => {
    setShowModal(true);
  }

  const Paragraphs = [
    "Purpose: Our study aims to increase awareness about the significance of sleep and its relationship with comorbidities. We aim to identify the sleep-deprived population in the Chandigarh region, assess the impact of sleep on comorbidities, and determine which patients with comorbidities are associated with sleep deprivation.",
    "There is a lack of awareness about the importance of sleep among individuals. In today's fast-paced world, sleep is often neglected. To address this lack of awareness, health professionals will be involved, and a sleep and related comorbidities dashboard will be created.",
    "In order to conduct our research, we have developed a questionnaire that covers several aspects related to sleep, including daytime sleepiness, sleep duration and quality, stress levels, sleep-wake patterns, chronotype, and comorbidity scale.",
    "We use a variety of scales to assess these factors, including the Pittsburg Sleep Quality Index (PSQI), Epworth Sleepiness Scale (ESS), Karolinska Sleepiness Scale (KSS), Perceived Stress Index, and a self-assessment scale to determine morningness-eveningness. We will measure participants' responses to these questions using scaled scores. The questionnaire will take approximately an hour, and the study details and informed consent will be discussed as well."
  ];

  // const setShowTick1 = (val) => {
  //   setShow
  // }
  // const setShowTick2 = () => {

  // }

  const pdf1Content = [
    {
      title : "Study number",
      content : "IEC (September 2023) #2"
    },
    {
      title : "Principal Investigator",
      content : "Dr. Anshu Bhardwaj"
    },
    {
      title : "Name of the Institution",
      content : "CSIR-Institute of Microbial Technology, Sector-39A, Chandigarh-160036"
    },
    {
      title : "Study title",
      content : "Unveiling the Impact of Sleep Deprivation on Comorbidities in the Population of Chandigarh with Emphasis on Awareness"
    },
    {
      title : "Study duration",
      content : "One year"
    },
    {
      title : "Sponsor of study",
      content : "DST, Chandigarh"
    },
    {
      title : "Purpose and benefits of study",
      content : "Our study aims to increase awareness about the significance of sleep and its relationship with comorbidities. We aim to identify the sleep-deprived population in the Chandigarh region, assess the impact of sleep on comorbidities, and determine which patients with comorbidities are associated with sleep deprivation. There is a lack of awareness about the importance of sleep among individuals. In today's fast-paced world, sleep is often neglected. According to the Centers for Disease Control and Prevention, irregular sleep patterns and chronic sleep deprivation have been associated with several comorbidities, such as diabetes, cardiovascular diseases, obesity, hypertension, and depression. To address this lack of awareness, health professionals will be involved, and a sleep and related comorbidities dashboard will be created."
    },
    {
      title : "Study procedure, duration and (if applicable) schedule pertaining to participants",
      content : "In order to conduct our research, we will develop a questionnaire that covers several aspects related to sleep, including daytime sleepiness, sleep duration and quality, stress levels, sleep-wake patterns, chronotype, and comorbidity scale. We will use a variety of scales to assess these factors, including the Pittsburg Sleep Quality Index (PSQI), Epworth Sleepiness Scale (ESS), Karolinska Sleepiness Scale (KSS), Perceived Stress Index, a self-assessment scale to determine morningness-eveningness. We will measure participants' responses to these questions using scaled scores. The study will last for one year, the dashboard created with this data will continue to be populated in order to share the impact of the work done during the project. Participants will be provided with an overview of the importance of sleep and related comorbidities before filling out the questionnaire. Clinicians will also record patient data as part of the study. The questionnaire will take approximately one hour and the discussion about the study and informed consent form will also be discussed."
    },
    {
      title : "Possible risks to the participant",
      content : "None"
    },
    {
      title : "Confidentiality of data and records of the participant",
      content : "No traceable information is collected for participants."
    },
    {
      title : "Participant’s responsibilities",
      content : "Participants should fill out the form accurately."
    },
    {
      title : "Participant’s rights",
      content : "Participants have the right to inquire about the purpose of the study and can access their own data."
    },
    {
      title : "Compensation to the participant of the study",
      content : "NA"
    },
    {
      title : "Contact information (the participant may contact the following persons for further information)",
      content : "Dr Anshu Bhardwaj, +91-9910172490"
    }
  ];

  const pdf2Content = [
    {
        title : "Study number",
        content : "IEC (September 2023) #2"
    },
    {
        title : "Principal Investigator",
        content : "Dr. Anshu Bhardwaj"
    },
    {
        title : "Name of the Institution",
        content : "CSIR-Institute of Microbial Technology, Sector-39A, Chandigarh-160036"
    },
    {
        title : "Study title",
        content : "Unveiling the Impact of Sleep Deprivation on Comorbidities in the Population of Chandigarh with Emphasis on Awareness"
    },
    {
        title : "Study duration",
        content : "One year"
    },
    {
        title : "Sponsor of study",
        content : "DST, Chandigarh"
    }
];

  const pdf2AddContent = [
    "The supervising researcher has given me a full explanation of the nature,purpose and likely duration of the study in the language best understood by me. The information sheet given to me is also in a language familiar to me. I have been given the opportunity to question all aspects of the research study and have understood the advice / information given. I voluntarily agree to cooperate fully with the supervising researcher. I am aware of the purpose and benefits of the study, the study procedure, associated possible risks, and compensation for participation and any study-related injury.",
    "I understand that the researcher in-charge of this study may stop the study at any time, for any reason without my consent. I am also aware that my participation in this study is completely voluntary and I am aware of my right to opt out of the study at any time during the course of the study without having to give reasons for doing so.",
    "I understand that my records will be treated confidentialy, and my identity will not be revealed in any information to third parties or published. The Sponsor of the study, the Ethics committee and regulatory authorities will not need my permission to look at my records or data that are associated with my participation in the study, but will also treat it with utmost confidentiality. I give permission to the researcher in-charge of the study to communicate the results of the research (for scientific dissemination) without disclosing my identity. I understand that the samples collected will only be used for this study and not for any other future studies.",
    "I hereby agree to take part in the study"
  ];


  const slickData = [
    {
      img : surveyImg1,
    },
    {
      img : surveyImg2,
    }
] 
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };


  return (
    <>
      <section className="home-banner"   id="">
        <div className="container">
          <div className="row home-row">
            <div className="col-xl-8 col-lg-7 col-md-12 paddinTop">
              <div className="banner-content d-flex align-items-center">
                <div className="banner-content-inner">
                    <div className='heroSlickContainer'>
                      <div className='heroSlick'>
                          <h2 className="title">Welcome to <span>NapLytics</span>  Dashboard</h2>
                          <p>
                            India is the second most sleep-deprived country after Japan. Sleep deprivation leads to disruption of cognitive behaviour and decreases learning,
                            memory and attention (Read Article). 
                            NapLytic analyzes sleep patterns and associated comorbidities using survey-based questions, enabling the identification of sleep-deprived
                            individuals and their related health conditions. It helps to estimate the prevalence of sleep-related disorders and creates awareness about
                            importance of sleep.
                          </p>
                      </div>
                    </div>
                  <div className="bbtns">
                    <span onClick={modalClick} className="bg_btn bt">Take a Survey</span>
                    <a href="#contact" className="wborder_btn bt">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_img col-xl-4 col-lg-5 col-md-12">
              <div className="banner_img_inner moeffect">
                <div className='heroSlickContainer'>
                  <Slider {...settings}>
                    {
                      slickData.map((item) => {
                        return (
                          <div className='heroSlickItem text-center'>
                            <img src={item.img} alt="Banner Image"  />
                          </div>
                        )
                      })
                    }
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="book_icon">
            <i className='bx bx-book-open'></i>
          </div>

          <div className="bg_shapes moeffect">
            <div className="fshape1 spinning">
              <svg fill="none" viewBox="0 0 68 73"><path fill="#fff" fillOpacity=".05" d="M4.216 47.5C.004 45.604-.578 39.86 3.17 37.16L52.345 1.71c3.747-2.7 9.013-.332 9.478 4.263l6.112 60.313c.465 4.595-4.218 7.971-8.43 6.077L4.216 47.5z" /></svg>
            </div>

            <div className="bshape2 eitem" defaultValue={2.5}>
              <svg fill="none" viewBox="0 0 45 43"><path fill="#fff" fillOpacity=".14" d="M20.598 1.854c.599-1.843 3.205-1.843 3.804 0l3.823 11.766a2 2 0 001.902 1.382H42.5c1.937 0 2.743 2.48 1.175 3.618l-10.008 7.272a2 2 0 00-.727 2.236l3.823 11.766c.599 1.843-1.51 3.375-3.078 2.236l-10.008-7.272a2 2 0 00-2.352 0L11.316 42.13c-1.568 1.139-3.677-.394-3.078-2.236l3.823-11.766a2 2 0 00-.726-2.236L1.325 18.62c-1.567-1.139-.761-3.618 1.176-3.618h12.372a2 2 0 001.902-1.382l3.823-11.766z" /><path stroke="#fff" strokeOpacity=".13" strokeWidth="2" d="M21.549 2.163c.3-.921 1.603-.921 1.902 0l3.823 11.766a3 3 0 002.853 2.073H42.5c.968 0 1.371 1.24.587 1.81l-10.008 7.27a3 3 0 00-1.09 3.355l3.823 11.766c.3.921-.755 1.687-1.539 1.118l-10.009-7.272a3 3 0 00-3.526 0l-10.01 7.272c-.783.57-1.837-.197-1.538-1.118l3.823-11.766a3 3 0 00-1.09-3.354L1.914 17.81c-.784-.57-.381-1.809.587-1.809h12.372a3 3 0 002.853-2.073l3.823-11.766z" /></svg>
            </div>

            <div className="bshape3 eitem" defaultValue={-1.5}>
              <svg fill="none" viewBox="0 0 57 57"><path fill="#fff" fillOpacity=".2" d="M46.865.174c-.345.122-.846.367-1.113.557-.268.19-9.479 9.334-20.46 20.316l-19.96 19.97-2.629 6.393C1.255 50.92.041 53.993.02 54.227-.171 55.597 1.089 57 2.514 57c.479 0 .902-.167 7.496-2.885l5.947-2.45 20.038-20.026c11.015-11.016 20.17-20.25 20.349-20.527.768-1.215.869-2.785.234-4.055-.279-.557-.836-1.18-3.208-3.542C50.964 1.121 50.396.608 49.85.363c-.868-.4-2.105-.479-2.985-.19zm-1.693 11.628c2.228 2.228 4.044 4.088 4.044 4.155 0 .144-2.139 2.283-2.284 2.283-.056 0-1.949-1.838-4.199-4.088l-4.099-4.099 1.136-1.136c.635-.635 1.192-1.147 1.26-1.147.055 0 1.926 1.816 4.142 4.032zm-5.87 1.259l1.727 1.726-7.106 7.106c-7.685 7.696-7.429 7.384-6.816 7.986.601.613.29.869 7.986-6.817l7.106-7.106 1.726 1.727c.947.947 1.726 1.77 1.726 1.838 0 .055-6.783 6.894-15.07 15.18l-15.058 15.06-1.782-1.783-1.782-1.782 7.106-7.106c7.685-7.696 7.429-7.384 6.816-7.986-.601-.612-.29-.869-7.986 6.817l-7.106 7.106-1.782-1.782-1.782-1.782 15.059-15.06c8.287-8.286 15.125-15.069 15.18-15.069.068 0 .892.78 1.839 1.727zM10.178 46.864c2.072 2.072 3.753 3.799 3.731 3.82-.09.068-6.16 2.551-6.382 2.618-.156.045-.68-.412-2.038-1.77-1.003-1.003-1.827-1.872-1.827-1.939 0-.156 2.606-6.516 2.673-6.516.034 0 1.76 1.705 3.843 3.787z" /></svg>
            </div>

            <div className="bshape4 eitem" defaultValue={2}>
              <svg fill="none" viewBox="0 0 146 91"><path stroke="#fff" strokeOpacity=".25" strokeWidth="3" d="M1 88.974c57.757 1.132 10.964-35.222 26.06-46.86 15.097-11.638 32.815 14.148 53.859 8.381 21.044-5.766-12.378-39.299 12.998-47.543C119.292-5.29 116.734 43.06 145 29.644" /></svg>
            </div>
          </div>

          <div className="tpshape">
            <svg fill="none" viewBox="0 0 147 297"><path fillRule="evenodd" stroke="#fff" strokeOpacity=".05" strokeWidth="7" d="M83.755-55.798c33.904 36.979 10.442 93.21 19.058 142.218 9.073 51.606 59.065 103.667 31.95 147.908-27.292 44.529-94.427 31.803-146.613 39.177-53.094 7.503-112.908 37.432-155.043 3.451-41.916-33.803-18.758-98.921-28.438-151.421-10.342-56.091-57.129-112.778-29.34-161.951 28.69-50.767 97.899-59.728 156.706-63.423 54.33-3.414 114.657 3.619 151.72 44.041z" clipRule="evenodd" /></svg>
          </div>

          <div className="btmshape">
            <svg fill="none" viewBox="0 0 236 409"><path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-89.755 52.094c37.15-14.894 77.387 2.568 112.843 19.565 34.705 16.637 69.624 37.842 81.693 73.691 11.968 35.549-6.127 72.04-20.797 107.193-16.373 39.233-26.341 88.982-67.167 103.584-40.895 14.626-80.23-17.547-117.945-37.376-34.682-18.235-76.17-33.695-87.396-70.589-11.017-36.203 16.557-70.85 33.888-105.254 17.307-34.357 28.555-76.251 64.881-90.814z" clipRule="evenodd" /><path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-55.387 52.63C-19.19 39.093 19.54 57.897 53.646 76.07c33.383 17.787 66.909 40.134 78.094 76.268 11.091 35.832-6.952 71.55-21.66 106.056-16.414 38.509-26.772 87.72-66.526 100.837-39.82 13.14-77.47-20.287-113.723-41.36-33.338-19.38-73.309-36.232-83.663-73.378-10.16-36.45 17.039-70 34.313-103.666 17.251-33.62 28.738-74.961 64.132-88.197z" clipRule="evenodd" /><path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-21.667 51.68c36.473-12.776 74.8 6.834 108.518 25.718 33.003 18.482 66.054 41.526 76.48 77.886 10.338 36.057-8.449 71.39-23.876 105.58-17.217 38.157-28.604 87.139-68.623 99.421C30.745 372.588-6.196 338.381-42 316.553c-32.925-20.073-72.534-37.759-82.108-75.114-9.395-36.654 18.501-69.627 36.477-102.925 17.95-33.251 30.3-74.342 65.964-86.834z" clipRule="evenodd" /><path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-4.929 45.706C31.293 32.23 70.173 51.77 104.418 70.625c33.518 18.454 67.198 41.561 78.54 78.527 11.247 36.657-6.7 72.929-21.309 107.995-16.305 39.134-26.502 89.242-66.289 102.256-39.855 13.038-77.706-21.411-114.113-43.244-33.48-20.078-73.596-37.639-84.11-75.63-10.317-37.278 16.813-71.254 33.998-105.44C-51.704 100.95-40.347 58.882-4.93 45.706z" clipRule="evenodd" /></svg>
          </div>

{
      showModal &&
        <div className='survey-modal-overlay' onClick={() => {setShowModal(false)}}>

        </div>
}

        {showModal && 
        
        <div className='survey-modal'> 
            <div className="close-button" onClick={() => setShowModal(false)}>✖</div>
            <div className="col-12 wow fadeInUp wow fadeIn survey-modal-20">
              <div className="section-title text-center">
                <span>Questionare</span>
                <h2>QUESTIONNAIRE FOR ASSESSMENT OF SLEEP AND RELATED CO-MORBIDITIES</h2>
              </div>
            </div>
          
            <div className='relative'>

              <div className='col-12 wow fadeInUp wow fadeIn'>
                <div className='paragraphs'>
                  {
                    Paragraphs.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  }
                </div>
              </div>

              <div className="col-12 wow fadeInUp wow fadeIn">
                <div className='requirements'>
                  <div className='show-tick1'>
                    
                    {
                      showTick1 && 
                        <div className='show-tick1-modal'>
                          <div className='relative1'>
                              <div className='pdfWindow'>
                                <h3>Participant Information Sheet (PIS)</h3>
                                {
                                  pdf1Content.map((item, index) => {
                                    return (
                                      <div>
                                        <b>{index + 1} . {item.title + " : "}</b>
                                        {item.content}
                                      </div>
                                    )
                                  })
                                }
                              </div>
                              <div className='btnContainer'>
                                <h5 className='button-24 button-24-green' onClick={() => {
                                  setTick1(true);
                                  setShowTick1(false);
                                }}>Please accept our T&Cs</h5>
                                <h5 className='button-24' onClick={() => {
                                  // setTick1(false);
                                  // setShowTick1(false);
                                  setShowDisagreeMessage(true);
                                }}>No I can't agree</h5>
                              </div>

                              {showDisagreeMessage && 
                                <div className='disagree-message'>
                                  If you can't agree... then you can't take a survey!
                                </div>
                              }
                          </div>
                        </div>
                    }
                    {
                      showTick2 && 
                        <div className='show-tick1-modal'>
                          <div className='relative1'>
                              <div className='pdfWindow'>
                                <h3>Informed Consent Form (ICF)</h3>
                                {
                                  pdf2Content.map((item, index) => {
                                    return (
                                      <div>
                                        <b>{index + 1} . {item.title + " : "}</b>
                                        {item.content}
                                      </div>
                                    )
                                  })
                                }
                                <div>
                                  <b>7. Name of the Participant(s):</b>
                                  {
                                    pdf2AddContent.map((item) => <p>{item}</p>)
                                    
                                  }
                                </div>
                              </div>
                              <div className='btnContainer'>
                                <h5 className='button-24 button-24-green' onClick={() => {
                                  setTick2(true);
                                  setShowTick2(false);
                                }}>Please accept our T&Cs</h5>
                                <h5 className='button-24' onClick={() => {
                                  // setTick2(false);
                                  // setShowTick2(false);
                                  setShowDisagreeMessage1(true);
                                }}>No I can't agree</h5>
                              </div>
                              {showDisagreeMessage1 && 
                                <div className='disagree-message'>
                                  If you can't agree... then you can't take a survey!
                                </div>
                              }
                          </div>
                        </div>
                    }
                  </div>
                  <div className='form-group'>
                    <div className='label'>
                      <input type='checkbox' id='tick1' checked={tick1} onChange={() => setShowTick1(true)} />
                      <label htmlFor='tick1'  onClick={() => setShowTick1(true)}>I agree to the T&Cs mentioned in the PIS form</label>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='label'>
                      <input type='checkbox' id='tick2' checked={tick2} onChange={() => setShowTick2(true)} />
                      <label htmlFor='tick2' onClick={() => setShowTick2(true)}>I agree to the T&Cs mentioned in the ICF Form</label>
                    </div>
                  </div>
                </div>
              </div>

                {
                  tick1 && tick2 &&

                  <div className='col-12 wow fadeInUp wow fadeIn'>
                    <div className='btn-container'>
                      <a className={'button-24 button-24-green ' + (tick1 && tick2 && 'enabled')} href='/survey'>
                        Start Survey
                      </a>
                    </div>
                  </div>
                }

            </div>
        </div>}
      </section>
    </>
  )
}
