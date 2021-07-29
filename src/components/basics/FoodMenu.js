import React from 'react';




const FoodMenu = ({ menu }) => {
    // console.log(menu);
    const myStyle = { color: "green" };
    return (
        <>
            <section className="main-card--container">
                {menu.map((curElem) => {
                    return (
                        <>
                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curElem.id}</span>
                                        <span className="card-author " style={myStyle}>{curElem.category}</span>
                                        <h2 className="card-title">{curElem.name}</h2>
                                    </div>
                                    <img src={curElem.image} alt="images" className="card-media" />
                                    <div className="card-price">{curElem.price}</div>
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
