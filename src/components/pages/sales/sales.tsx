import React from "react";
import "./../../../styles/sales.css";
import Header from "./sheader"
import Product from "./Product";
import Footer from "./sfooter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import items from "./items";
// import { OrderedList,ListItem,Text } from "@chakra-ui/react";
// import {
//   FaPhoneAlt,
//   FaFacebookSquare,
//   FaTwitterSquare,
//   FaInstagram,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaHandPointRight,
//   FaChevronLeft,
//   FaChevronRight,
//   FaYoutube,
//   FaYoutubeSquare,
// } from "react-icons/fa";

function Sales() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="ss">
        <div className="p-10 max-w-screen-xl mx-auto">
          <Switch>
            <Route path="/cart">
              {/* <Cart /> */}
            </Route>
            <Route path="/">
              {/* <h2 className="text-3xl mb-20"></h2> */}
              {items.map(({ id, title, images, price }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  images={images}
                  price={price}
                />
              ))}
            </Route>
          </Switch>
        </div>
        </div>
        <div className="hhh">
        <div className="Home_responsiblities">
        <h1>General Instructions</h1>
        <ul>
          <li>
            {/* <FaHandPointRight /> */}
            <p>
            1.Free shipping available for all orders across India.
            </p>
          </li>
          <li>
            {/* <FaHandPointRight /> */}
            <p>2.Size exchanges and returns are not encouraged.</p>
          </li>
          <li>
            {/* <FaHandPointRight /> */}
            <p>3.Order will be delivered by 30 business days.
            </p>
          </li>
          <li>
            {/* <FaHandPointRight /> */}
            <p>4.International shipping not available.
            </p>
          </li>
          <li>
            {/* <FaHandPointRight /> */}
            <p>
            5.Sale close on 11th October, 6PM.
            </p>
          </li>
          <li>
            {/* <FaHandPointRight /> */}
            <p>
            6.For any queries mail to <span style={{ color: "yellow", fontSize:"medium" }}>sales@shaastra.org</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="asd">
      <Footer></Footer>
      </div>
      </div>
        
        {/* <div className="footer">
          <h6 className="ll">General Instructions</h6>
          
        <OrderedList>
  <ListItem>Free shipping available for all orders across India.</ListItem>
  <ListItem>Size exchanges and returns are not encouraged.</ListItem>
  <ListItem>Order will be delivered by 30 business days.</ListItem>
  <ListItem>Sale closes on 1st March 2021, 6 PM.</ListItem>
  <ListItem>For any queries mail to <span style={{ color: "blue" }}>sales@shaastra.org</span></ListItem>
</OrderedList>
</div> */}
      </>
    </BrowserRouter>
  );
}

export default Sales;