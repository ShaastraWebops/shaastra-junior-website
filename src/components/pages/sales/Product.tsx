import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import s from "./../../../images/sales/back.jpg";
import front1 from "./../../../images/sales/WhatsApp Image 2021-09-24 at 8.46.57 AM (2).jpeg";
import side1 from "./../../../images/sales/WhatsApp Image 2021-09-24 at 8.46.57 AM (1).jpeg";
// import back1 from "./assets/back.jpg";
import front2 from "./../../../images/sales/Isolated_white_t-shirt_front.jpg";
import lefta from "./../../../images/sales/Left arm.jpg";
import righta from "./../../../images/sales/Right Arm.jpg";
// assets/WhatsApp Image 2021-09-24 at 8.46.57 AM (2).jpeg
import { Carousel } from 'react-responsive-carousel';
import "./../../../styles/Product.css";
import size1 from "./../../../images/sales/sizechzrt2.jpeg";
// import ModalImage from "react-modal-image";
// import urlt from "./../assets/sizechart.jpeg";
// import urll from "./../assets/sizechart.jpeg";
import { red } from "@material-ui/core/colors";
 

const Product = (props:any) => {
  const [mainImage, setMainImage] = useState(props.images[0]);
  const [size, setSize] = useState("");
  const {id, title, images, price} = props;


  const addItemToCart = () => {
   
  };

  return (
    <div className="dd">
      <div className="zz">
      <Carousel className="kjk">
                <div>
                    <img src={front1} />
                    {/* <p className="legend">Front</p> */}
                </div>
                <div>
                    <img src={side1} />
                    {/* <p className="legend">Side</p> */}
                </div>
                <div>
                    <img src={s} />
                    {/* <p className="legend">Back</p> */}
                </div>
                <div>
                    <img src={front2} />
                    {/* <p className="legend">Front T</p> */}
                </div>
                <div>
                    <img src={lefta} />
                    {/* <p className="legend">Left</p> */}
                </div>
                <div>
                    <img src={righta} />
                    {/* <p className="legend">Right</p> */}
                </div>
            </Carousel>
            </div>
      {/* <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
        <div className="flex lg:flex-col space-x-5 md:space-y-3 md:space-x-0 items-center my-5 lg:my-0">
          {props.images.map((image:any, i:any) => (
            <img
              key={i}
              className="cursor-pointer w-40 md:w-30 sm:w-20 object-contain"
              src={image}
              alt=""
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
        <img className="w-80 md:w-50 sm:w-80 mx-20 object-contain" src={mainImage} alt="" style={{alignSelf:"center"}}/>
      </div> */}
      <div className="ccs" >
        <h3 className="hez">Purple Round Neck T-shirt</h3>
        <p className="loki" >Price: ₹400</p>
        <p className="loka" >Junior Shaastra Bonanza Sale</p>
        <p className="lok" >Price: ₹350 </p>
        <p className="loko" >(Including Shipping Charges)</p>
        {/* <ModalImage
  small={urlt}
  large={urll}
  alt="Hello World!"
/>; */}
        <p className="jok">
          <a target="_blank" href={size1}>
        <button onClick={addItemToCart} className="btn" style=
        
        {{
          backgroundColor:"red",
          
      
      }}>
          Size Chart
        </button>
              </a> -{" "}
          {size && <span style={{color:"black", fontSize:"large"}}>{size}</span>}
        </p>
        <div className="pop">
          <p onClick={() => setSize("XS")} className="size">
            XS
          </p>
          <p onClick={() => setSize("S")} className="size">
            S
          </p>
          <p onClick={() => setSize("M")} className="size">
            M
          </p>
          <p onClick={() => setSize("L")} className="size">
            L
          </p>
          <p onClick={() => setSize("XL")} className="size">
            XL
          </p>
          <p onClick={() => setSize("XXL")} className="size">
            XXL
          </p>
        </div>
        {/* <img src={size1} alt="sizechart" /> */}
       

        <a target="_blank" href="https://www.meraevents.com/previewevent?view=preview&eventId=245077" className="mnm"> 
        <button onClick={addItemToCart} className="btn" >
          Buy Now
        </button>
              </a>
       
        <h3 className="goh">Features:</h3>
        <p className="lk">1. 100% pure cotton with 180GSM washed combed fabric</p>
        <p className="lk">2. Biowashed</p>
        {/* <p>3. Glows in dark</p> */}
      </div>
    </div>
  );
};

export default Product;
