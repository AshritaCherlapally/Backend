import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils.js/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import UserContext from "../utils.js/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  const [btn, setBtn] = useState("Login");

  useEffect(() => {}, [btn]);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-orange-400 shadow-lg ">
      <div className="">
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length} items) </Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
