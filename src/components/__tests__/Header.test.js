import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils.js/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("Should render components with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});

test("Should login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
