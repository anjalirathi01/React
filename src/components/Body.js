import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
console.log(resObj.map((r) => r.info.id));

const Body = () => {
  const [listofRestaurants, setListOfRestraunt] = useState([]);
  //     {
  //       info: {
  //         id: "688748",
  //         name: "McDonald's",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/549cbc31-66cf-4535-b37a-59f937f3705d_688748.JPG",
  //         locality: "Shivaji Nagar",
  //         areaName: "Parijat Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //         avgRating: 4.6,
  //         avgRatingString: "4.6",
  //       },
  //     },
  //       {
  //       info: {
  //         id: "688749",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/549cbc31-66cf-4535-b37a-59f937f3705d_688748.JPG",
  //         locality: "Shivaji Nagar",
  //         areaName: "Parijat Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //         avgRating: 3.8,
  //         avgRatingString: "3.8",
  //       },
  //     },
  //   ]);
  //   let listofRestaurants = [
  //     {
  //       info: {
  //         id: "688748",
  //         name: "McDonald's",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/549cbc31-66cf-4535-b37a-59f937f3705d_688748.JPG",
  //         locality: "Shivaji Nagar",
  //         areaName: "Parijat Nagar",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //         avgRating: 4.6,
  //         avgRatingString: "4.6",
  //       },
  //     },
  //   ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.988187&lng=73.762469&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //Optional chaining 
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if(listofRestaurants.length == 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filterList);
            console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={resObj[0]}/>
                            <RestaurantCard resData={resObj[1]}/>
                            <RestaurantCard resData={resObj[2]}/>
                            <RestaurantCard resData={resObj[3]}/>
                            <RestaurantCard resData={resObj[4]}/>
                            <RestaurantCard resData={resObj[5]}/> */}
        {/* <RestaurantCard resName="XYZ" cusine="xyz"/> */}
      </div>
    </div>
  );
};

export default Body;
