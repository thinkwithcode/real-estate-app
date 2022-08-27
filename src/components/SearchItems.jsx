import React from 'react'
import "./SearchItems.css"
export default function SearchItems() {
  return (
    <div className='section'>

        <div className="item_section">
          <h5>Location</h5>
          <h5>New York , USA</h5>
        </div>
        <div className="item_section">
          <h5>When</h5>
          <h5>Select Move-in Date</h5>
        </div>
        <div className="item_section">
          <h5>Price</h5>
          <h5>$500-$2,500</h5>
        </div>
        <div className="item_section">
          <h5>Property Type</h5>
          <h5>Houses</h5>
        </div>
        
        <button>Search</button>

    </div>
  )
}
