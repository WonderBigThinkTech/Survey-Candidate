import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import CoursesTwoArea from "./CoursesTwoArea";

 

export default function CoursesTwo() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Course Style 2" subtitle="Course Style 2" />
      <CoursesTwoArea />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
