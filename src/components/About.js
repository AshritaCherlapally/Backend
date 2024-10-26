import User from "./User";
import React from "react";
import UserContext from "../utils.js/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
