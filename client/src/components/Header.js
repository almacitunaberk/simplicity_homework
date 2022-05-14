import React, { useEffect, useState } from 'react';
import { AUTH_TOKEN } from '../constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logoipsum-logo-52.svg';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <section className="py-1">
          <img src={Logo} />
        </section>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">
            <Link to="/pastOrders">Past Orders</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/restaurants">Restaurants</Link>
          </li>
          {authToken && (
            <li className="cursor-pointer">
              <Link to="/userInfo">Profile</Link>
            </li>
          )}
          <button
            type="button"
            className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
            onClick={() => {
              navigate('/login');
            }}
          >
            {authToken ? `Logout` : `Login`}
          </button>
        </ul>
        <section className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fa-solid fa-bars"></i>
        </section>
      </nav>
    </header>
  );
};

export default Header;
