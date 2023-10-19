import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    // console.log(props," this is props");
      const {data} =props;
      
      // console.log(data.info);

      const {
      cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwo,
        avgRating,
        deliveryTime,
        
      } = data?.info;
  return(
      //  resData.restaurants.map((data)=> {
          <div className="res-card" style={{ background:"#f0f0f0"}} >
           <img
              className="image-res"
              src={CDN_URL + cloudinaryImageId}
              alt="image"
            />
          <h3>{name}</h3>
          <h4 className="fiw">{cuisines.join(",")}</h4>
           <h5>{locality}</h5>
           <h5>{deliveryTime} min</h5>
           <h4>{costForTwo}</h4>
           <h6>{avgRating}</h6>
       </div>
      // })
  )
   
  
  };

  export default RestaurantCard;
  