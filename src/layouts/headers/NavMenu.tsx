import menu_data from "./menu_data";

 

export default function NavMenu() {
  return (
      <ul className='navbar-navs'>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "menu-item-has-children"}`}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))} 
      </ul>
  )
}
