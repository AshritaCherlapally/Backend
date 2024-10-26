import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils.js/constants";
import { addItem } from "../utils.js/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-grey-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative p-4 w-3/12">
            <img
              className="w-full rounded-md"
              src={CDN_URL + item.card.info.imageId}
              alt="item-img"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
              <button
                className="px-4 py-2 bg-black text-white rounded-md shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
