import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/api/v1/restaurants').then(res => res.json()).then(data => setRestaurants(data))
  }, []);

  return (
    <div>
      <header className="home-header">
        <h1>Restaurant Reviews</h1>
      </header>
      <main>
        <div>
          <p>¡Aquí podrás describirnos tu experiencia en diversos restaurantes!</p>
        </div>       
        <div>
          {restaurants.map(restaurant => (      
            <div key={restaurant.id}>
              <p>{restaurant.name}</p>
              <p>{restaurant.description}</p>
              <Link to={`/restaurants/${restaurant.id}`}>Ver más...</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Restaurants;