import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/navbar";
import Main from "./main/main";
import Support from "./main/support";
import Contact from "./main/contact";
import Settings from "./main/settings";
import Footer from "./footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.getSessionLogin = this.props.getSessionLogin;
  }

  componentDidMount() {
    this.getSessionLogin();
  }

  render() {
    const {
      Log_openLogWindow,
      Log_closeLogWindow,
      Log_window,
      Log_condition,
      Log_newLog,
      logged_as,
      LogOut,
      Session_user,
      Session_user_id,
      Session_user_cart,

      Reg_openRegWindow,
      Reg_closeRegWindow,
      Reg_condition,
      Reg_newReg,
      Reg_window,

      Goods,
      loading,
      mix,
      sort,
      user,
      SearchAction,
      GetPhone,
      GetTops,
      SortGoods,

      cart,
      purchase_button,
      processing_card,
      addToCart,
      removeFromCart,
      incrementInCart,
      decrementInCart,
      openCartWindow,
      closeCartWindow,
      cart_window,
      cart_purchase_notification,
      makePurchase,
    } = this.props;

    if (sort) {
      switch (sort) {
        case "LOW_TO_HIGH":
          Goods.sort(function (a, b) {
            return a.price - b.price;
          });
          break;
        case "HIGH_TO_LOW":
          Goods.sort(function (a, b) {
            return b.price - a.price;
          });
          break;
        case "BRAND":
          Goods.sort(function (a, b) {
            if (a.brand < b.brand) {
              return -1;
            } else if (a.brand > b.brand) {
              return 1;
            }
            return 0;
          });
          break;
        default:
          console.log("default");
      }
    }

    return (
      <div className='App'>
        <Router>
          <Header
            GetTops={GetTops}
            Log_openLogWindow={Log_openLogWindow}
            user={user}
            LogOut={LogOut}
            Log_window={Log_window}
            logged_as={logged_as}
            Log_condition={Log_condition}
            cart={cart}
            openCartWindow={openCartWindow}
            Session_user={Session_user}
            Session_user_id={Session_user_id}
            Session_user_cart={Session_user_cart}
          />
          <Switch>
            <Route path='/support'>
              <Support
                Log_openLogWindow={Log_openLogWindow}
                Log_closeLogWindow={Log_closeLogWindow}
                Log_window={Log_window}
                Log_newLog={Log_newLog}
                Log_condition={Log_condition}
                Reg_openRegWindow={Reg_openRegWindow}
                Reg_closeRegWindow={Reg_closeRegWindow}
                Reg_window={Reg_window}
                Reg_condition={Reg_condition}
                Reg_newReg={Reg_newReg}
                removeFromCart={removeFromCart}
                incrementInCart={incrementInCart}
                decrementInCart={decrementInCart}
                cart={cart}
                Session_user_cart={Session_user_cart}
                closeCartWindow={closeCartWindow}
                cart_window={cart_window}
                makePurchase={makePurchase}
                cart_purchase_notification={cart_purchase_notification}
              />
            </Route>
            <Route path='/contact'>
              <Contact
                Log_openLogWindow={Log_openLogWindow}
                Log_closeLogWindow={Log_closeLogWindow}
                Log_window={Log_window}
                Log_newLog={Log_newLog}
                Log_condition={Log_condition}
                Reg_openRegWindow={Reg_openRegWindow}
                Reg_closeRegWindow={Reg_closeRegWindow}
                Reg_window={Reg_window}
                Reg_condition={Reg_condition}
                Reg_newReg={Reg_newReg}
                removeFromCart={removeFromCart}
                incrementInCart={incrementInCart}
                decrementInCart={decrementInCart}
                cart={cart}
                Session_user_cart={Session_user_cart}
                closeCartWindow={closeCartWindow}
                cart_window={cart_window}
                makePurchase={makePurchase}
                cart_purchase_notification={cart_purchase_notification}
              />
            </Route>
            <Route path='/settings'>
              <Settings
                removeFromCart={removeFromCart}
                incrementInCart={incrementInCart}
                decrementInCart={decrementInCart}
                cart={cart}
                Session_user_cart={Session_user_cart}
                closeCartWindow={closeCartWindow}
                cart_window={cart_window}
                makePurchase={makePurchase}
                cart_purchase_notification={cart_purchase_notification}
                user={user}
                Session_user={Session_user}
              />
            </Route>
            <Route path='/'>
              <Main
                Log_openLogWindow={Log_openLogWindow}
                Log_closeLogWindow={Log_closeLogWindow}
                Reg_openRegWindow={Reg_openRegWindow}
                Reg_closeRegWindow={Reg_closeRegWindow}
                Reg_window={Reg_window}
                Reg_condition={Reg_condition}
                Reg_newReg={Reg_newReg}
                Log_window={Log_window}
                Log_newLog={Log_newLog}
                Log_condition={Log_condition}
                GetPhone={GetPhone}
                GetTops={GetTops}
                SortGoods={SortGoods}
                Goods={Goods}
                user={user}
                loading={loading}
                mix={mix}
                SearchAction={SearchAction}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                incrementInCart={incrementInCart}
                decrementInCart={decrementInCart}
                cart={cart}
                Session_user_cart={Session_user_cart}
                purchase_button={purchase_button}
                processing_card={processing_card}
                closeCartWindow={closeCartWindow}
                cart_window={cart_window}
                makePurchase={makePurchase}
                cart_purchase_notification={cart_purchase_notification}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
