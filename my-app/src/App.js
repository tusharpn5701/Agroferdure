import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import  Checkout from "./Checkout";
import  Login from "./Login";
import Seeds from "./Seeds";
import Fertilizers from "./Fertilizers";
import Pesticides from "./Pesticides";
import Manure from "./Manure";
import  Payment from "./Payment";
import {auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JuLI8SBvJmml6KgSX6tmfeW80hxnDvqUA9RZN6fEBeLQSABf5EGhv8ONd6jqOqnM5IDQoMPrGQg6Ib2rfdgrZNm00lKCkilmK');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>> ', authUser);

     if (authUser) {

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
     } else {
      
       dispatch({
         type: 'SET_USER',
         user: null
       })
     }
   })
  }, [])
return (

  <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
      <Login /> 
        </Route>
      <Route path="/checkout"> 
          <Header />
          <Checkout />
        </Route>
        <Route path="/seeds"> 
          <Header />
          <Seeds />
        </Route>
        <Route path="/fertilizers"> 
          <Header />
          <Fertilizers />
        </Route>
        <Route path="/pesticides"> 
          <Header />
          <Pesticides />
        </Route>
        <Route path="/manure"> 
          <Header />
          <Manure />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
           <Payment />
          </Elements> 
          </Route>
          <Route path="/">
            <Header />
           <Home />
        </Route>
      </Switch>
     </div>
  </Router>
);
}

export default App;

