import React from 'react';
import Shoe from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
  media: {
    height: 250,
  },
  div1: {
    display: 'inline-block',
  }
}));

function Products() {
  const classes = useStyles();

  return (
    <div className={classes.div1}>
      {Object.keys(Shoe).map(keys => {
        const shoe = Shoe[keys];
        return(
          <div key={keys}>            
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={shoe.img}
                  title={shoe.name}
                />
                <CardContent>
                <Link to={"/Products/"+keys}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {shoe.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Item Details 
                  </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
    </Card>
    </div>
          )})}
    </div>
  );
}

export default Products;
