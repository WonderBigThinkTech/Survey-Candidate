 
import  { useState } from 'react'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";

export default function HeaderOne() {

  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header id="navigation">
        <div className="container-fluid">
          <div className="wbt-navbar">

            <div className='navbar-header'>
              <div className='site-logo navbar-brand'>
                <Link to="/" style={{fontWeight : 'bolder',fontStyle : 'italic', fontSize : '1.25em'}}><img src="/logo.png" style={{marginRight : '10px'}} alt="Edumon" />Sleeping Survey</Link>
              </div>
            </div>

            <NavMenu />

            <div className='navbar-small-nav'>
              <div className={`${openMenu ? "navbar-small-icon-open" : "navbar-small-icon-close"}`} onClick={() => setOpenMenu(true)}><SlMenu /></div>
            </div>

          </div>
        </div>

        <div id="mini_cart" className={`cart_drawer ${cat ? 'min_cart_active' : ''}`}>
          <div className="cart_top">
            <a style={{ cursor: "pointer" }} onClick={() => setCat(false)} className="cart_close"><i className='bx bx-x'></i></a>
            <h3 className="title">Courses List</h3>
            <span className="cart_number">
              3
            </span>
          </div>

          <div className="mini_cart_list">
            <ul>
              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <Link to="/course-details" className="mc_img">
                    <img src="assets/img/mcart/1.jpg" alt="Product Name" />
                  </Link>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <Link to="/course-details">
                      Photography Crash Course
                    </Link>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>

              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <Link to="/course-details" className="mc_img">
                    <img src="assets/img/mcart/2.jpg" alt="Product Name" />
                  </Link>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <Link to="/course-details">
                      Photography Crash Course
                    </Link>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>

              <li className="d-flex">
                <div className="thumb_img_cartmini">
                  <Link to="/course-details" className="mc_img">
                    <img src="assets/img/mcart/3.jpg" alt="Product Name" />
                  </Link>
                </div>

                <div className="product-detail">
                  <h3 className="product_name_mini">
                    <Link to="/course-details">
                      Photography Crash Course
                    </Link>
                  </h3>
                  <div className="product_info">
                    <div className="product_quanity">QTY : 1 </div>
                    <div className="product_price">
                      <span className="price_sale">$25.00</span>
                    </div>
                  </div>
                </div>

                <div className="produc_remove">
                  <a href="#" className="remove-product">
                    <i className='bx bx-trash'></i>
                  </a>
                </div>
              </li>
            </ul>
          </div> 

          <div className="cart_drawer_btm">
            <div className="sub-total">
              <span className="total-title float-start">Total:</span>
              <span className="total-price float-end">$75.00</span>
            </div>

            <div className="bottom_group">
              <Link to="/cart" className="button-viewcart">
                <span>View Cart</span>
              </Link>
              <Link to="/checkout" className="button-checkout">
                <span>Checkout</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={`search_box ${open ? "active" : ""}`}>
          <div className="close-btn" onClick={() => setOpen(false)} style={{ display: open ? "block" : "none" }}>
            <i className="ti-close"></i>
          </div>

          <div className="search-data" style={{ display: open ? "block" : "none" }}>
            <form onSubmit={e => e.preventDefault()}>
              <input type="text" required />
              <div className={`line ${open ? "active" : ""}`}></div>
              <label style={{ display: open ? "block" : "none" }}>Type to search..</label>
              <button type="submit">
                <span className="ti-search" style={{ display: open ? "block" : "none" }}></span>
              </button>
            </form>
          </div>
        </div>

        
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      </header>
    </>
  )
}
