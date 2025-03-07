import React, { useState } from "react";
import { Link } from 'react-router-dom';
function Menu() {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [profileDropdown, setprofileDropdown] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  }

  const handleProfileClick = () => {
    setprofileDropdown(!profileDropdown);
  }

  const meanClass = "menu";
  const activeMenuClass = "menu selected";

  return (


    <div className="menu-container ">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus mt-4">
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/' onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : meanClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/orders' onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : meanClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/holdings' onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : meanClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/positions' onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : meanClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/funds' onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : meanClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/apps' onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : meanClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;