import RestaurantCard from "./RestaurantCard";
import {restList} from "../utils/mockdata"
import { useState } from "react";

const Body = () => {
  const [listOfRest,setListOfRest]=useState(restList);

  return (
    <div className="body">
      <div className="filter">
        Restaurant:
        <button className="filter-btn" onClick={() => {
            //Filter logic here
            const filteredList=listOfRest.filter((res)=>res.data.avgRating>4);
            setListOfRest(filteredList);
            console.log(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restaurant)=>(
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
