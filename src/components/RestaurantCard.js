import { CDN_URL } from "../utils.js/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] h-[425px] cursor-pointer rounded-md bg-orange-400 hover:bg-orange-500  "
    >
      <img
        className="rounded-md w-[250px] h-[175px] "
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
