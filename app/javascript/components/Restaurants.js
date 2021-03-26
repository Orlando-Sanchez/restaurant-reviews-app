import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  intro: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5%',
  },  
  restaurantCardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  restaurantCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    maxWidth: 275,
    margin: '15px 10px',
  },
  cardContent: {
    width: '240px'
  },
  cardImage: {
    width: '100%',
    height: '150px'
  },
  cardLink: {
    textDecoration: 'none',
    color: '#FFFF00',
    
  }
  // root: {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px',
  // },
});

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/api/v1/restaurants').then(res => res.json()).then(data => {
      console.log(data) 
      setRestaurants(data)})
  }, []);

  const classes = useStyles()

  return (
    <div>
      <Container maxWidth='false' className={classes.header}>
        <Typography variant="h2" component="h2">Restaurant Reviews</Typography>
      </Container>
      <main>
        <Container maxWidth='false' className={classes.intro}>
          <Typography variant="h3" component="h2">Encuentra el mejor restaurante para ti!</Typography>
        </Container>  
        <div className={classes.restaurantCardWrapper}>
          {restaurants.map(restaurant => (
            <Card key={restaurant.id} className={classes.restaurantCard}>
              <CardContent className={classes.cardContent}>
                <img src={restaurant.images} alt="food" className={classes.cardImage}/>
                <Typography variant="h5" component="h2"className={classes.title} gutterBottom>
                  {restaurant.name}
                </Typography>
                <Typography component="h2" color="textSecondary">
                  {restaurant.description}
                </Typography>
              </CardContent>
              <Link to={`/restaurants/${restaurant.id}`} className={classes.cardLink}>Ver más...</Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Restaurants;