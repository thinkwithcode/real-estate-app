import React, { useState } from "react";
import "./favorate.css";
import { useSelector } from "react-redux";
import { BiBath } from "react-icons/bi";
import { FaGratipay } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BiArea } from "react-icons/bi";

const Favaourate = () => {
  const favItems = useSelector((state) => state.realstateData.favourateItem);
  //   console.log("favItems", favItems);
  const [query, setQuery] = useState("");
  return (
    <div className="container">
      <div className="input_search">
        <h2>Search properties to rent</h2>
        <input
          type="text"
          placeholder="Search with Search Bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="realstateItems">
        {favItems
          .filter((item) => {
            // console.log(query,item)
            if (query == "") {
              // console.log("Items", item);
              return item;
            } else if (
              item.name?.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            } else if (
              item.price?.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            } else if (
              item.location?.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            } else if (
              item.date?.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            } else if (
              item.ptype.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            }
          })
          .map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt="bangala" />
              <div className="card_item">
                <div className="card_fav_item">
                  <h3>
                    ${item.price}/<span>month</span>
                  </h3>
                  {/* pushing data in favourate items */}

                  <FaGratipay style={{ color: "red" }} />
                </div>

                <h3>{item.name}</h3>
                <p>{item.address}</p>

                <div className="card_items_feature">
                  <p className="card_beds">
                    <BiBed /> {item.bed} Beds
                  </p>
                  <p className="card_bathroom">
                    <BiBath /> {item.bathroom} Bathroom
                  </p>
                  <p className="card_area">
                    <BiArea /> {item.area} m<sup>2</sup>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  // <div className="main">
  //   {favItems?.map((item) => (

  //   ))}
  // </div>
};

export default Favaourate;
