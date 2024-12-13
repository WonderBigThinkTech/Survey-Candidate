// import {useRef} from 'react'
import HeroHomeOne from './HeroHomeOne'
import FeatureHomeOne from './FeatureHomeOne'
import AboutHomeOne from './AboutHomeOne'
import CounterHomeOne from './CounterHomeOne'
import CoursesHomeOne from './CoursesHomeOne'
import CourseCategoryHomeOne from './CourseCategoryHomeOne'
import WorkingProcessHomeOne from './WorkingProcessHomeOne'
import InstructorsHomeOne from './InstructorsHomeOne'
import ReviewHomeOne from './ReviewHomeOne'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollToTop from '../../common/ScrollToTop'
import ScrollTop from '../../common/ScrollTop'
import Preloader from '../../common/Preloader'
import ContactForm from "../../contact/ContactForm";
import GoogleMap from "../../contact/GoogleMap";
import Statistics from './Statistics';



export default function HomeOne() {

  
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const contactRef = useRef(null);
  // const dreamRef = useRef(null);
  // const statisticsRef = useRef(null);

  // const scrollToRef = (ref:any) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  return (
    <>
      <Preloader />
      <HeaderOne 
      />
      <HeroHomeOne  />
      <FeatureHomeOne />
      <AboutHomeOne
      />
      <Statistics />
      <CounterHomeOne />
      <CoursesHomeOne />
      <CourseCategoryHomeOne />
      <WorkingProcessHomeOne
      />
      <InstructorsHomeOne />
      <ReviewHomeOne />
      <ContactForm />
      <GoogleMap />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
