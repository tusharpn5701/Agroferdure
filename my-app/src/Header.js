import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import FinalLogo from './FinalLogo.PNG';
import Profile from './Profile.PNG';
import Orders from './Orders.PNG';
import Cart from './Cart.PNG';
import Translator from './Translator.png';
import { auth } from "./firebase";

function Header() { 
  const [{ Cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      
      <Link to="/">
        <img
          className="header__logo"
          src={FinalLogo} width="500" height="100"
        />
      </Link>

        <Link to="/Seeds" style={{ textDecoration: 'none' }}>
          <div className="header__option">
          <span className="header__categories">Seeds</span>
          </div>
        </Link>

        <Link to="/Fertilizers" style={{ textDecoration: 'none' }}>
          <div className="header__option">
          <span className="header__categories">Fertilizers</span>
          </div>
        </Link>

        <Link to="/Pesticides" style={{ textDecoration: 'none' }}>
          <div className="header__option">
          <span className="header__categories">Pesticides</span>
          </div>
        </Link>

        <Link to="/Manure" style={{ textDecoration: 'none' }}>
          <div className="header__option">    
          <span className="header__categories">Manure</span>
          </div>
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />  
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav" >
          <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthentication}
          className="header__option">
            <span className="header__optionLineOne">
              <img
              className="header__optionProfile"
              src={Profile} width="28" height="28"
              />
            </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Profile'}</span>
          </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">
              <img
              className="header__optionOrder"
              src={Orders} width="28" height="28"
              />
            </span>
            <span className="header__optionLineTwo">Orders</span>
          </div>

          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <div className="header__option">
              <span className="header__optionLineOne">
                <ShoppingCartIcon />
                <span className="header_optionLineOne header_CartCount">
                  {Cart?.length}
                </span>
              </span>
              <span className="header__optionLineTwo">Cart</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLine"></span>
          </div>

          <img
          className="header__optionTranslator"
          src={Translator} width="42" height="40"
          />
          <span className="header_optionLine header_extra">
            ........
          </span>
        </div>

    </div>
  );
}

export default Header;