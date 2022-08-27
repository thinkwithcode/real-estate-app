import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Search.css";
import SearchItems from "./SearchItems";
// import {DATAS} from '../Datas'
import { useSelector } from "react-redux";

export default function Search() {
  const realStateData = useSelector((state) => state.realstateData.DATAS);
  // console.log("realstate data", realStateData);

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

      <SearchItems />
      <div className ='realstateItems'>
        {realStateData
          .filter((item) => {

            // console.log(query,item)
            if (query == "") {
              // console.log("Items", item);
              return item;
            } 
            
            
            else if (

              
              item.name?.toLowerCase().includes(query.toLowerCase().trim())
            ) {
              return item;
            } 
            else if (
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
          }
          )
          .map((item) => (
            <div key={item.id}>
              {/* {console.log("Itemssss",item.id)} */}
              <Card DATAS={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
