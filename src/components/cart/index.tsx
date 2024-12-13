import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import CartArea from "./CartArea";



export default function Cart() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Cart" subtitle="Cart" />
      <CartArea />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />

    </>
  )
}
