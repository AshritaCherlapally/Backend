import React, { useContext } from "react";
import UserContext from "../utils.js/UserContext";

const Contact = () => {
  //const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="font-bold  p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="message"
        />
        <button className="bg-black text-white p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
