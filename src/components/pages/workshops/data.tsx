import Img from "../../../images/Img.svg";

export interface faq{
    id : string,
    question : string,
    answer : string
}

export interface workshop {
    id : string,
    name:string,
    imageUrl : string,
    deadline : Date,
    description : string,
    faqs : faq[]
  }


export const workshops : workshop[] = [
    {
      id :"1",
      name :" Workshop1",
      imageUrl : Img,
      deadline :new Date(2021,7,24),
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
      name :" Workshop2",
      imageUrl : Img,
      deadline : new Date(2021,7,25),
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
      name :" Workshop3",
      imageUrl : Img,
      deadline : new Date(2021,7,25),
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


  export const competitions : workshop[] = [
    {
      id :"1",
      name :"Competition1",
      imageUrl : Img,
      deadline :new Date(2021,7,24),
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
      name :"Competition2",
      imageUrl : Img,
      deadline : new Date(2021,7,25),
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
          question : "Question 3",
          answer : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi. Natus praesentium iure molestias accusamus autem necessitatibus mollitia 
          magnam fugiat tempora, quisquam voluptates, placeat quas optio est ad suscipit laudantium.`
  
        }
      ]
  },{
      id :"3",
      name :"Competition3",
      imageUrl : Img,
      deadline : new Date(2021,7,25),
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