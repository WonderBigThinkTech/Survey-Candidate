 
import FeatureHomeOne from '../homes/home/FeatureHomeOne'
import AboutHomeOne from '../homes/home/AboutHomeOne'
import CounterHomeOne from '../homes/home/CounterHomeOne'
import InstructorsHomeOne from '../homes/home/InstructorsHomeOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import FooterOne from '../../layouts/footers/FooterOne'
import ScrollToTop from '../common/ScrollToTop'
import ScrollTop from '../common/ScrollTop'
import Preloader from '../common/Preloader'

export default function About() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <FeatureHomeOne />
      <AboutHomeOne />
      <CounterHomeOne />
      <InstructorsHomeOne style_2={true} />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
