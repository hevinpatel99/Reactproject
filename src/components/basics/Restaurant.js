import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import FoodMenu from "./FoodMenu.js";





const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu); //React.useState(intialize);

    const filterItem = (category) => {
      const updatedList = Menu.filter((curElm) => {
        return curElm.category === category;
      });

      setMenuData(updatedList);
    }
        
    

    return (
        <>
          <nav className="navbar">
            <div className="btn-group">
              <button className="btn-group__item" onClick={() =>filterItem("Breakfast")}>Breakfast</button>
              <button className="btn-group__item" onClick={() =>filterItem("Lunch")}>Lunch</button>
              <button className="btn-group__item" onClick={() =>filterItem("Snacks")}>Snacks</button>
              <button className="btn-group__item" onClick={() =>filterItem("Dinner")}>Dinner</button> 
              <button className="btn-group__item"onClick={() =>setMenuData(Menu)}>All</button>
            </div>
          </nav>

          <FoodMenu menu = {menuData} />
        </>   
    )
}

export default Restaurant
