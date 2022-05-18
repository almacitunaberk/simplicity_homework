import React, { useEffect, useState } from 'react';
import { AUTH_TOKEN } from '../constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logoipsum-logo-52.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return (
    <header>
      <nav className="navheader">
        <section className="navheader__image">
          <img src={Logo} />
        </section>
        {sidebarOpened ? (
          <>
            <i onClick={() => setSidebarOpened(false)} className="fa-solid fa-xmark"></i>
            <div className="navheader__menu-sidebar" id="close-btn">
              <ul className="navheader__options-sidebar">
                <li onClick={() => setSidebarOpened(false)} className="navheader__option-sidebar">
                  <Link to="/pastOrders">Past Orders</Link>
                </li>
                <li onClick={() => setSidebarOpened(false)} className="navheader__option-sidebar">
                  <Link to="/restaurants">Restaurants</Link>
                </li>
                {authToken && (
                  <li onClick={() => setSidebarOpened(false)} className="navheader__option-sidebar">
                    <Link to="/userInfo">Profile</Link>
                  </li>
                )}
                <button
                  type="button"
                  className="navheader__button-sidebar"
                  onClick={() => {
                    localStorage.setItem(AUTH_TOKEN, '');
                    navigate('/login');
                  }}
                >
                  {authToken ? `Logout` : `Login`}
                </button>
              </ul>
            </div>
          </>
        ) : (
          <div onClick={() => setSidebarOpened(true)} className="navheader__menu" id="close-btn">
            <i className="fa-solid fa-bars"></i>
          </div>
        )}

        <ul className="navheader__options">
          <li className="navheader__option">
            <Link to="/pastOrders">Past Orders</Link>
          </li>
          <li className="navheader__option">
            <Link to="/restaurants">Restaurants</Link>
          </li>
          {authToken && (
            <li className="navheader__option">
              <Link to="/userInfo">Profile</Link>
            </li>
          )}
          <button
            type="button"
            className="navheader__button"
            onClick={() => {
              localStorage.setItem(AUTH_TOKEN, '');
              navigate('/login');
            }}
          >
            {authToken ? `Logout` : `Login`}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
