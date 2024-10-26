import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Mumbai",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ashritacherlapally");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.props;

    return (
      <div>
        <h1>{this.state.userInfo.login}</h1>
        <h1>{this.state.userInfo.id}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count: {this.state.count}
        </button>
        <button
          onClick={() => {
            this.setState({ count2: this.state.count2 + 1 });
          }}
        >
          Count2: {this.state.count2}
        </button>
      </div>
    );
  }
}
export default User;
