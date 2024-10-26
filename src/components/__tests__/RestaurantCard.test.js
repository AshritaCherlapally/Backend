import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";

import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props resData", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Kwality Walls Ice Cream and More");
  expect(resName).toBeInTheDocument();
});
