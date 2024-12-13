import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import Preloader from "../common/Preloader";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import GridBlogArea from "./GridBlogArea";

 

export default function GridBlog() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Grid Blog" subtitle="Grid Blog" />
      <GridBlogArea />
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
