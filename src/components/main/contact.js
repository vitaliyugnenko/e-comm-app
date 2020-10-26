import React, { Component } from "react";
import Cart from "./cart";
import LogForm from "./logForm";
import RegForm from "./regForm";

export default class Contact extends Component {
  render() {
    const {
      removeFromCart,
      incrementInCart,
      decrementInCart,
      cart,
      Session_user_cart,
      closeCartWindow,
      cart_window,
      cart_purchase_notification,
      makePurchase,

      Log_window,
      Log_newLog,
      Log_condition,
      Log_openLogWindow,
      Log_closeLogWindow,
      Reg_condition,
      Reg_newReg,
      Reg_window,
      Reg_openRegWindow,
      Reg_closeRegWindow,
    } = this.props;

    return (
      <section className='contact'>
        <div className='contact_information'>
          <h1>CONTACT INFORMATION</h1>
          <h2>We're here to help!</h2>
          <p>Call us: 8.888.888.8888 Monday - Friday, 8am - 5pm PST</p>

          <p>
            Email us: <a href='mailto:lstore@support.com'>lstore@support.com</a>
          </p>

          <p>
            (When sending us an email, please do so from the email address on
            your 6pm account or it may result in a delay of assistance.)
          </p>
        </div>

        <div className='contact_questions'>
          <h1>Questions? Select a topic to learn more!</h1>
          <div>Frequently Asked Questions</div>
          <div>Shipping & Delivery</div>
          <div>Returns</div>
        </div>

        <LogForm
          Log_closeLogWindow={Log_closeLogWindow}
          Reg_openRegWindow={Reg_openRegWindow}
          Log_window={Log_window}
          Log_newLog={Log_newLog}
          Log_condition={Log_condition}
        />
        <RegForm
          Log_openLogWindow={Log_openLogWindow}
          Reg_closeRegWindow={Reg_closeRegWindow}
          Reg_window={Reg_window}
          Reg_condition={Reg_condition}
          Reg_newReg={Reg_newReg}
        />

        <Cart
          cart={cart}
          Session_user_cart={Session_user_cart}
          closeCartWindow={closeCartWindow}
          cart_window={cart_window}
          removeFromCart={removeFromCart}
          incrementInCart={incrementInCart}
          decrementInCart={decrementInCart}
          makePurchase={makePurchase}
          cart_purchase_notification={cart_purchase_notification}
        />
      </section>
    );
  }
}
