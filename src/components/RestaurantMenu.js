import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils.js/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = useParams();

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, city, avgRating, costForTwoMessage } =
    resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold m-4 text-3xl">{name}</h1>

      <p className="font-bold text-lg p-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          cardData={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
