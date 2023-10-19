import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";





const Body = () => {
// state variable = super powerful variable 
//react hook is just normal js function whic has spuer power 

const [listofRestaurats, setlistofRestaurat] = useState([]);
 useEffect (() =>{
  fetchData();
 },[]);

 const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5442047&lng=73.8727799&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  setlistofRestaurat(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    )
  console.log(json);
 }


    

    return(
        <div className="body">
            <div className="fliter" >
                <button className="fliter-btn"
                 onClick={() => {
                    const filteredList = listofRestaurats.filter(
                      (res) => res.info.avgRating > 4.4
                    );
                    setlistofRestaurat(filteredList);
                    
                  }} >
                    Top Rated Restaurant
                    </button>
            </div>
            <div className="res-container">
              {listofRestaurats.map((data, id)=>
               {return <RestaurantCard key={id} data={data}/>
              })}
            
            </div>

        </div>
        
    );

    
};

export default Body;
