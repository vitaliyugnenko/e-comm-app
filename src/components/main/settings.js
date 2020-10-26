import React, { Component } from "react";
import Cart from "./cart";
import { Redirect } from "react-router-dom";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  componentDidUpdate(prevProps) {
    if (!this.props.user && !this.props.Session_user) {
      this.setState({ redirect: true });
    }
  }

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
    } = this.props;

    if (this.state.redirect === true) {
      return <Redirect to='/' />;
    }

    return (
      <section className='settings'>
        <div className='settings_items'>
          <div>Manage My Addresses </div>
          <div>Manage My Payment Info </div>
          <div>Manage Account Info </div>
          <div>Manage Email Subscriptions </div>
          <div>Manage Ad Preferences</div>
        </div>

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
