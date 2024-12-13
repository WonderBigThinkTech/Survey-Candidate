
 
import HeroHomeTwo from './HeroHomeTwo'
import BrandHomeTwo from './BrandHomeTwo' 
import FeatureHomeOne from '../home/FeatureHomeOne'
import AboutHomeOne from '../home/AboutHomeOne'
import CounterHomeOne from '../home/CounterHomeOne'
import CoursesHomeTwo from './CoursesHomeTwo'
import CourseCategoryHomeOne from '../home/CourseCategoryHomeOne'
import WorkingProcessHomeOne from '../home/WorkingProcessHomeOne'
import InstructorsHomeOne from '../home/InstructorsHomeOne'
import FaqHomeTwo from './FaqHomeTwo'
import ReviewHomeOne from '../home/ReviewHomeOne'
import BlogHomeOne from '../home/BlogHomeOne'
import CtaHomeTwo from './CtaHomeTwo' 
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollToTop from '../../common/ScrollToTop'
import ScrollTop from '../../common/ScrollTop'
import Preloader from '../../common/Preloader'

export default function HomeTwo() {
  return (
    <>
      <Preloader />
      <HeaderTwo />
      <HeroHomeTwo />
      <BrandHomeTwo /> 
      <FeatureHomeOne style_2={true} />
      <AboutHomeOne />
      <CounterHomeOne />
      <CoursesHomeTwo />
      <CourseCategoryHomeOne />
      <WorkingProcessHomeOne />
      <InstructorsHomeOne style_2={true} />
      <FaqHomeTwo />
      <ReviewHomeOne />
      <BlogHomeOne />
      <CtaHomeTwo />
      <FooterOne style_2={true} />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
