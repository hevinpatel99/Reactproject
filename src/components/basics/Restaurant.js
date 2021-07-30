import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import FoodMenu from "./FoodMenu.js";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((curElem) => {
  return curElem.category;

})
), "All",
];
console.log(uniqueList);



const Restaurant = () => {

  const [menuData, setMenuData] = useState(Menu); //React.useState(intialize);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
  


  const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
  });

  setMenuData(updatedList);
};



return (
  <>
    <Navbar filterItem={filterItem} menuList={menuList} />
    <FoodMenu menu={menuData} />
  </>
);
    };

export default Restaurant
