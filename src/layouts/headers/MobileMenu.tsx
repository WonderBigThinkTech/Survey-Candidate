import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu_data from './menu_data'; // Import the menu data

// Define the structure of a single menu item
// interface SubMenu {
//   title: string;
//   link: string;
// }

// interface MenuItem {
//   title: string;
//   link: string;
//   has_dropdown: boolean;
//   sub_menus?: SubMenu[];
// }

// Define the structure for props of MobileMenu component
interface MobileMenuProps {
  openMenu: boolean; 
  setOpenMenu: (open: boolean) => void; // Now it expects a boolean to toggle the menu
}

// Assuming menu_data is imported from './menu_data'
// type MenuData = MenuItem[]; // Ensure this is appropriately typed based on your menu data structure



const MobileMenu: React.FC<MobileMenuProps> = ({ openMenu, setOpenMenu }) => {
    const [navTitle, setNavTitle] = useState<string>("");

    const openMobileMenu = (menu: string) => {
        setNavTitle(prevTitle => (prevTitle === menu ? "" : menu));
    };

    return (
        <>
            <div className={`sm_menu_outer slide ${openMenu ? 'active' : ''}`}>
                <ul className="mobile_menu">
                    <div className="closed-btn" onClick={() => { setOpenMenu(false) }}>
                        &times;
                    </div>
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
                                                <li className="back" onClick={() => openMobileMenu(item.title)}>
                                                    <a href="#">{item.title}</a>
                                                </li>
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
    );
};

export default MobileMenu;