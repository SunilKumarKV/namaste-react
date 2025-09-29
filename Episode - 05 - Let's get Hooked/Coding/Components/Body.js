import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import "../index.css";

const Body = () => {
  return (
    <div className="body">
      <div className="res-search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
