import Img from "../../../images/Img.svg";
import { useGetEventQuery } from "../../../types/generated/generated";

export interface faq{
    id : string,
    question : string,
    answer : string
}

export interface shows {
    id : string,
    name:string,
    imageUrl : string,
    description : string,
    faqs : faq[]
  }

// const show: shows[] = useGetEventQuery("SHOWS")
export const shows : shows[] = [
    {
      id :"1",
      name :" Show1",
      imageUrl : Img,
      description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat mollitia...
      magnam sapiente eos delectus. Corporis magnam ratione aliquid ducimus nulla aspernatur, exercitationem 
      harum quos dolor in! Molestias, cum nulla!`,
      faqs :[
        {
          id : "1",
          question : "Question 1",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
        },
        {
          id : "2",
          question : "Question 2",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
  
        }
      ]
  
  },{
      id :"2",
      name :" Show2",
      imageUrl : Img,
      description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat mollitia...
      magnam sapiente eos delectus. Corporis magnam ratione aliquid ducimus nulla aspernatur, exercitationem 
      harum quos dolor in! Molestias, cum nulla!`,
      faqs :[
        {
          id : "1",
          question : "Question 1",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
        },
        {
          id : "2",
          question : "Question 2",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
  
        },
        {
          id : "3",
          question : "Question 2",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
  
        }
      ]
  },{
      id :"3",
      name :" Show3",
      imageUrl : Img,
      description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat mollitia...
      magnam sapiente eos delectus. Corporis magnam ratione aliquid ducimus nulla aspernatur, exercitationem 
      harum quos dolor in! Molestias, cum nulla!`,
      faqs :[
        {
          id : "1",
          question : "Question 1",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
        },
        {
          id : "2",
          question : "Question 2",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
  
        }
      ]
  }]


