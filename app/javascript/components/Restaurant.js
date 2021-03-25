import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState([])
  const [comment, setComment] = useState({ restaurant_id: "", username: "", description: "" })

  useEffect(() => {
    const id = props.match.params.id
    comment.restaurant_id = id
    fetch(`/api/v1/restaurants/${id}`).then(res => res.json()).then(data => setRestaurant({...data}));
  }, [restaurant])

  const handleChange = e => {
    setComment({ ...comment, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      comment: comment
    }

    fetch("/api/v1/comments/create", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content
      }
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log("error", error));
  }

  return (
    <div> 
      <header>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <div>
          { restaurant.comments && restaurant.comments.map(comment => {
            return (
              <div key={comment.id}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
              </div>
            )
          })}
        </div>
      </header>
      <Link to="/">Go Back</Link>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre</label>
          <input type="text" name="username" onChange={e => handleChange(e)} />
        </div>
        <div >
          <label htmlFor="text">Comentario</label>
          <input type="text" name="text" onChange={e => handleChange(e)} />
        </div>
        <div >
          <input type="submit" title="Submit" />
        </div>
      </form>
    </div>

  )
}

export default Restaurant;