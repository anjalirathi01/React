import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
       return (
              <div className="body">
                     <div className="search">Search</div>
                     <div className="res-container">
                            {resObj.map((restaurant) => (
                              <RestaurantCard resData= {restaurant}/>
                            ))  }
                            {/* <RestaurantCard resData={resObj[0]}/>
                            <RestaurantCard resData={resObj[1]}/>
                            <RestaurantCard resData={resObj[2]}/>
                            <RestaurantCard resData={resObj[3]}/>
                            <RestaurantCard resData={resObj[4]}/>
                            <RestaurantCard resData={resObj[5]}/> */}
                            {/* <RestaurantCard resName="XYZ" cusine="xyz"/> */}
                     </div>
              </div>
       )
};

export default Body;