
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import shaastraLogo from "./../../../images/sales/Shaastra_logo.png";
import { Center } from "@chakra-ui/react";

import "./../../../styles/sheader.css";



function Header() {
  const [header, setHeader] = React.useState(false);

// const Header = () => {
//   const history = useHistory();

  return (
    // <header className="bg-blue-300 px-40 py-5 flex items-center justify-between">
    //   <h1
    //     onClick={() => history.push("/")}
    //     className="text-white text-3xl font-bold cursor-pointer"
    //   >
    //     SHAASTRA 2022 MERCHANDISE SALE
    //   </h1>
    //   <p
    //     className="text-white font-medium text-lg cursor-pointer"
    //     onClick={() => history.push("/cart")}
    //   >
    //     Cart
    //   </p>
    // </header>

   
   
    <div className="Header">
    <Link to="/">
      <img src={shaastraLogo} alt=""  />
    </Link>
    {/* <button onClick={() => setHeader(!header)}>
      <FaBars />
    </button> */}
   {/* <div className="kk"> */}
      <Center className="kk">Shaastra Juniors 2021 Merchandise Sale</Center>
   
      {/* </div> */}
      </div>
     
  
  
  
  );
}

export default Header;
