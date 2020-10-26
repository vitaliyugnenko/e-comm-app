import React, { Component } from "react";
import DropdownMenu from "./dropdown";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      GetTops,
      Log_openLogWindow,
      logged_as,
      LogOut,
      cart,
      openCartWindow,
      Session_user,
      Session_user_cart,
    } = this.props;

    let cartContainer =
      logged_as || Session_user ? (
        <li className='cart_icon' onClick={() => openCartWindow()}>
          <i className='fa fa-shopping-cart fa-lg'></i>
          <span className='badge'>
            {" "}
            {cart && cart.length > 0
              ? cart.reduce((accum, current) => accum + current.amount, 0)
              : Session_user_cart && Session_user_cart.length > 0
              ? Session_user_cart.reduce(
                  (accum, current) => accum + current.amount,
                  0
                )
              : 0}{" "}
          </span>
        </li>
      ) : (
        <li></li>
      );

    const toggleActiveNavbar = () => {
      if (document.querySelector(".navbar").classList.contains("active")) {
        document.querySelector(".navbar").classList.toggle("active");
        document.querySelector(".navbar").classList.contains("active")
          ? (document.body.style.position = "fixed")
          : (document.body.style.position = "");
      }
    };

    return (
      <header>
        <img className='logo' src='logo.svg' alt='logo' />
        <nav>
          <ul className='navbar'>
            <li
              onClick={() => {
                GetTops();
                toggleActiveNavbar();
              }}
            >
              <Link to='/'>HOME</Link>
            </li>
            <li onClick={() => toggleActiveNavbar()}>
              <Link to='/support'>SUPPORT</Link>
            </li>
            <li onClick={() => toggleActiveNavbar()}>
              <Link to='/contact'>CONTACT</Link>
            </li>
            {cartContainer}
            <DropdownMenu
              Log_openLogWindow={Log_openLogWindow}
              LogOut={LogOut}
              logged_as={logged_as}
              user={Session_user}
              openCartWindow={openCartWindow}
              toggleActiveNavbar={toggleActiveNavbar}
            />
          </ul>
        </nav>
        <div
          className='hamburger'
          onClick={() => {
            document.querySelector(".navbar").classList.toggle("active");
            document.querySelector(".navbar").classList.contains("active")
              ? (document.body.style.position = "fixed")
              : (document.body.style.position = "");
          }}
        >
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </header>
    );
  }
}
