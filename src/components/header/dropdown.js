import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DropdownMenu extends Component {
  render() {
    const {
      Log_openLogWindow,
      LogOut,
      logged_as,
      user,
      openCartWindow,
      toggleActiveNavbar,
    } = this.props;
    let log_btn =
      logged_as || user ? (
        <li className='dropdown_menu'>
          <button className='dropdown_btn'>
            {logged_as || user} <i className='fa fa-caret-down'></i>
          </button>
          <ul className='log_menu'>
            <li className='log_menu-item' onClick={() => toggleActiveNavbar()}>
              <Link to='/settings'>Settings</Link>
            </li>
            <li className='log_menu-item' onClick={() => openCartWindow()}>
              <a href='# '>Cart</a>
            </li>
            <li className='log_menu-item' onClick={() => LogOut()}>
              <a href='# '>Log Out</a>
            </li>
          </ul>
        </li>
      ) : (
        <li className='dropdown_menu'>
          <button className='dropdown_btn' onClick={() => Log_openLogWindow()}>
            LOG IN
          </button>
        </li>
      );
    return <>{log_btn}</>;
  }
}
