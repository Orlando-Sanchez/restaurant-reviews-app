import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  restaurantHeader: {
    display: 'flex',
    height: '200px'
  },
  restaurantCardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  restaurantImagesWrapper: {
    marginTop: '20px'
  },
  image: {
    margin:'20px'
  }
});

const Restaurant = (props) => {
  const classes = useStyles()
  const [restaurant, setRestaurant] = useState([])
  const [comment, setComment] = useState({ restaurant_id: "", username: "", text: "" })

  useEffect(() => {
    const id = props.match.params.id
    comment.restaurant_id = id
    fetch(`/api/v1/restaurants/${id}`).then(res => res.json()).then(data => { 
      console.log() 
      setRestaurant({...data})} );
  }, [])

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
    }).then(response => response.json()).then(query => {
      let restaurantCopy = restaurant
      restaurantCopy.comments.unshift(query)
      setRestaurant({...restaurantCopy})
    }).catch(error => console.log("error", error));
  }

  return (
    <div> 
      <Container maxWidth='false' className={clsx(classes.header, classes.restaurantHeader)}>
        <div >
          <img src={restaurant.images} alt="food" className={classes.cardImage}/>
        </div>
        <div>
        <Typography variant="h2" component="h2">{restaurant.name}</Typography>
        <Typography variant="h2" component="h2">{restaurant.description}</Typography>
        </div>
      </Container>
      <main>
        <div className={clsx(classes.restaurantCardWrapper, classes.restaurantImagesWrapper)}>
          { restaurant.images && restaurant.images.map(image => {
            return (
              <div key={image.id} className={classes.image}>
                <img src={restaurant.images} alt="food" className={classes.cardImage}/>
              </div>
            )
          })}
        </div>
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
      </main>
    </div>

  )
}

export default Restaurant;