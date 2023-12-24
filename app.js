import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -Search
 *  -Restaurant container
 *      -Restaurant Cards
 *      -Img
 *      -Name of res,star rating,cuisines,delivery time
 * Footer
 *  -Copyright
 *  -Links,Contact info
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/mobile_651107-2.jpg?w=2000" />
      </div>
      <h2>'Enter into a cosmos of Delicacy!'</h2>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        alt="logo"
        src={props.src}
      />
      <h3><b><i>{props.resName}</i></b></h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.delTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Restaurant:<input type="search" placeholder="Search..."/>
      </div>
      <div className="res-container">
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4klsynvibffbmvb7ogp"
          resName="Meghna Foods"
          cuisine="Biryani,Indian,Asian"
          rating="4.4"
          delTime="38 minutes"
        />
        <RestaurantCard resName="KFC" cuisine="Fast Food, Burgers" rating="4.6" delTime="25 minutes" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"/>
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720"
          resName="McDonalds"
          cuisine="Burger,Wraps,Fries"
          rating="4.7"
          delTime="30 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          resName="Pizza Hut"
          cuisine="Pizza,Continental"
          rating="4.3"
          delTime="28 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hsb5yt3qhechxockrbut"
          resName="Domino's"
          cuisine="Pizza,Continental"
          rating="4.6"
          delTime="27 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g2pklvjnapzfoc4ackou"
          resName="Punjabi Angithi"
          cuisine="Punjabi,Chinese"
          rating="4.3"
          delTime="31 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/40b0a201eadbec469c2f9a06d5e7c722"
          resName="Cheesecake and Co."
          cuisine="Bakery,Snacks"
          rating="4.4"
          delTime="34 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0c53fd8f62e3d25ba56d1b4cfe572cef"
          resName="Bakingo"
          cuisine="Bakery,Desserts"
          rating="4.4"
          delTime="22 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
          resName="Burger King"
          cuisine="Burger,American"
          rating="4.5"
          delTime="21 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/06d12ec700e4118d159fab6c3a7256dd"
          resName="Chowman"
          cuisine="Chinese,Thai,Asian"
          rating="4.3"
          delTime="31 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hivbwhxeimlr38gbbqni"
          resName="Barbeque Nation"
          cuisine="Barbecue,Biriyani"
          rating="3.7"
          delTime="36 minutes"
        />
        <RestaurantCard
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"
          resName="Subway"
          cuisine="Snacks,Salads"
          rating="3.6"
          delTime="18 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
