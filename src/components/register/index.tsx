import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import RegisterForm from "./RegisterForm";

 
export default function Register() {
  return (
    <>
      <Preloader />
    <HeaderOne />
    <Breadcrumb title="Register" subtitle="Register" />
    <RegisterForm />
    <FooterOne />
    <ScrollToTop />
    <ScrollTop />

    </>
  )
}
