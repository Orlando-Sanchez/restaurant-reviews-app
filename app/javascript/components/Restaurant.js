import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    const id = props.match.params.id
    fetch(`/api/v1/restaurants/${id}`).then(res => res.json()).then(data => setRestaurant(data));
  }, [])

  return (
    <div> 
      <div>{restaurant.name}</div>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Restaurant;