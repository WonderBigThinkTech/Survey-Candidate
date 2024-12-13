import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import CourseDetailsArea from "./CourseDetailsArea";

 

export default function CourseDetails() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Course Details" subtitle="Course Details" />
      <CourseDetailsArea />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
