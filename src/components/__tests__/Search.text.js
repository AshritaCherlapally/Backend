import { render, act, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should be search filter with Hotel Text Input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsAfterPageLoading = screen.getAllByTestId("resCard");
  expect(cardsAfterPageLoading.length).toBe(25);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: {
      value: "hotel",
    },
  });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});

it("Should be Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(25);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(16);
});
