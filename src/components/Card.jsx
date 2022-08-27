import React from "react";
import bag from "../assests/fl1.jpg";
import fav from "../assests/caret-down-solid.svg";
import "./Card.css";
import { FaGratipay } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { useSelector,useDispatch } from "react-redux";
import { favourate } from "../features/userSlice";
export default function Card(props) {

  // console.log('address',props.DATAS.address)

  // const somedata = useSelector((state) => state)
  // console.log('somedata',somedata)

  const dispatch = useDispatch();


  return (
    <div className="main">
      <div key={props.DATAS.id} className="card">
        <img src={props.DATAS.image} alt="bangala" />
        <div className="card_item">
          <div className="card_fav_item">
            <h3>
              ${props.DATAS.price}/<span>month</span>
            </h3>
            {/* pushing data in favourate items */}
            <span onClick={() => dispatch(favourate(props.DATAS))}>

              <FaGratipay style={{ color: "" ,width:'23px', height:'30px'}} />
            </span>
            
          </div>

          <h3>{props.DATAS.name}</h3>
          <p>{props.DATAS.address}</p>

          <div className="card_items_feature">
            <p className="card_beds">
              <BiBed /> {props.DATAS.bed} Beds
            </p>
            <p className="card_bathroom">
              <BiBath /> {props.DATAS.bathroom} Bathroom
            </p>
            <p className="card_area">
              <BiArea /> {props.DATAS.area} m<sup>2</sup>{" "}
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}
