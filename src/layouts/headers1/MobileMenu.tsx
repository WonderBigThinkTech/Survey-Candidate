 
import  React, { useState } from 'react' 
import { Link } from 'react-router-dom';
import menu_data from './menu_data';


export default function MobileMenu({ openMenu }: any) {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  return (
    <>
      <div className={`sm_menu_outer slide ${openMenu ? 'active' : ''}`}>
        <ul className="mobile_menu">
          {menu_data.map((item, i) => (
            <li key={i} className={`menu-item-has-children hasChild ${navTitle === item.title ? "active" : ""}`}>
              <Link to={item.link}
                onClick={() => openMobileMenu(item.title)}
                style={{ fontSize: "18px", cursor: "pointer" }}>{item.title}</Link>
              {item.has_dropdown &&
                <ul className="sub-menu">
                  {item.sub_menus?.map((sub_menu, index) => (
                    <React.Fragment key={index}>
                      {index === 0 && 
                      <li className="back" onClick={() => openMobileMenu(item.title)}><a href="#">{item.title}</a></li>
                      }
                      <li><Link to={sub_menu.link}>{sub_menu.title}</Link></li>
                    </React.Fragment>
                  ))}
                </ul>
              }
            </li>
          ))} 
        </ul>
      </div>
    </>
  )
}
