import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ cardData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-orange-400 shadow-lg p-4 mx-auto my-4  rounded-md ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {cardData.title} ({cardData.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={cardData.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
