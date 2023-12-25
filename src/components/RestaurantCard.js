import { CDN_URL } from "../utils/mockdata";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>
        <b>
          <i>{name}</i>
        </b>
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
