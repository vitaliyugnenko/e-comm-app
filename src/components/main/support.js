import React, { Component } from "react";
import Cart from "./cart";
import LogForm from "./logForm";
import RegForm from "./regForm";

export default class Support extends Component {
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
      <section className='support'>
        <div className='support_options'>
          <h1>Hello. What can we help you with?</h1>

          <div className='support_options_items'>
            <div>
              <h2>Your Orders</h2>
            </div>
            <div>
              <h2>Returns & Refunds</h2>
            </div>
            <div>
              <h2>Payments & Gift Cards</h2>
            </div>
          </div>
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
