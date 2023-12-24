import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {restaurantList} from "./utils/mockdata";
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
// Footer component for footer section

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
