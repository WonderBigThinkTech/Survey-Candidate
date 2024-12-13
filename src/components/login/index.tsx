import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import LoginForm from "./LoginForm";

 

export default function Login() {
  return (
    <>
      <Preloader />
    <HeaderOne />
    <Breadcrumb title="Login" subtitle="Login" />
    <LoginForm />
    <FooterOne />
    <ScrollToTop />
    <ScrollTop />

    </>
  )
}
