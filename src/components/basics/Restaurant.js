import React from 'react'
import "./style.css"
import Image from "../../components/basics/image/cofee.jpg"

const myStyle = { color: "green" };
const Restaurant = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author " style={myStyle}>BreakFast</span>
                        <h2 className="card-title">Coffee</h2>
                        <span className="card-discription subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores facilis animi veniam assumenda eos eum natus aut aliquid qui adipisci delectus vero unde, enim asperiores? Saepe consequatur natus quisquam.</span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={Image} alt="images" className="card-media" />
                    <span className="card-tag">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Restaurant
