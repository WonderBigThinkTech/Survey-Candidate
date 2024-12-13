import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";

 

export default function Contact() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
