// import front1 from "./assets/WhatsApp Image 2021-09-24 at 8.46.57 AM (2).jpeg";
// import side1 from "./assets/WhatsApp Image 2021-09-24 at 8.46.57 AM (1).jpeg";
// import back1 from "./assets/back.jpg";
// import front2 from "./assets/Isolated_white_t-shirt_front.jpg";
// import back2 from "./images/back2.jpeg";
// import side2 from "./images/side2.jpeg";
// import front3 from "./images/front3.jpeg";
import front1 from "./../../../images/sales/WhatsApp Image 2021-09-24 at 8.46.57 AM (2).jpeg";
import side1 from "./../../../images/sales/WhatsApp Image 2021-09-24 at 8.46.57 AM (1).jpeg";
// import side3 from "./images/side3.jpeg";
// import back3 from "./images/back3.jpeg";
import { v4 as uuidv4 } from "uuid";

const items = [
  {
    id: uuidv4(),
    title: "Printed Men Rounded Neck Blue T-Shirt",
    price: 200,
    images: [front1, side1]
  },
  // {
  //   id: uuidv4(),
  //   title: "Men Rounded Neck Full Slieve Green T-Shirt",
  //   price: 300,
  //   images: [front2, side2, back2],
  // },
  // {
  //   id: uuidv4(),
  //   title: "Printed Men Hooded Neck White T-Shirt",
  //   price: 500,
  //   images: [front3, side3, back3],
  // },
];

export default items;
