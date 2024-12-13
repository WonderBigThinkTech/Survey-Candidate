import { Link } from "react-router-dom";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import ScrollToTop from "../common/ScrollToTop";
import ScrollTop from "../common/ScrollTop";
import Preloader from "../common/Preloader";

 
export default function Error() {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <Breadcrumb title="Error" subtitle="Error" />
      <section className="page_not_found">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center wow fadeIn">
              <img src="assets/img/404.svg" alt="404" />
              <h2>Page not found: /error</h2>
              <p>Please try searching for some other page.</p>
              <Link to="/" className="bg_btn bt">Back To Home</Link>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
