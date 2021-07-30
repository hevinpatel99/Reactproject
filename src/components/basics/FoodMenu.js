import React from 'react';
  



const FoodMenu = ({ menu }) => {
    
    // console.log(menu);
    const myStyle = { color: "green" };
    return (
        <>
            <section className="main-card--container">
                {menu.map((curElem) => {
                    const {id,image,name,price,category} = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author " style={myStyle}>{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />
                                    <div className="card-price">{price}</div>
                                    <span className="card-tag">Order Now</span>
                                </div>
                            </div>


                        </>
                    )
                })}

            </section>
        </>
    );
};

export default FoodMenu
