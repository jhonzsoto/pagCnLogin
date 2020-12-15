/*import React from 'react';

import {Link} from "react-router-dom"

const Hola =(props)=>{
  return(

     <Link to="/remeras">
  <div>

    <h1>holaaakasbhabsbsahbhsdbhsabdhjvbhv lsfhvf vh sefh sfehv shfeb vhjf vh afvh as vash dvhjsda vasd asljdvcljsdvclsdablabsdvhshbfvhsjhbcBchjjcvxzjvcjzxvcjhxzjhvxzcjhholaaakasbhabsbsahbhsdbhsabdhjvbhv lsfhvf vh sefh sfehv shfeb vhjf vh afvh as vash dvhjsda vasd asljdvcljsdvclsdablabsdvhshbfvhsjhbcBchjjcvxzjvcjzxvcjhxzjhvxzcjhholaaakasbhabsbsahbhsdbhsabdhjvbhv lsfhvf vh sefh sfehv shfeb vhjf vh afvh as vash dvhjsda vasd asljdvcljsdvclsdablabsdvhshbfvhsjhbcBchjjcvxzjvcjzxvcjhxzjhvxzcjhholaaakasbhabsbsahbhsdbhsabdhjvbhv lsfhvf vh sefh sfehv shfeb vhjf vh afvh as vash dvhjsda vasd asljdvcljsdvclsdablabsdvhshbfvhsjhbcBchjjcvxzjvcjzxvcjhxzjhvxzcjh</h1>
  </div>

  </Link>
  )
 

}
export default Hola;*/


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
<Link>
       <div>
  


    <Grid container spacing={4}>


          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="camisa1"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/camisa1.jpg?alt=media&token=a0c5395e-0f7e-4b04-b40a-dea80f3577ae"
          title="camisa1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camisa 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
         $$$
        </Button>
      </CardActions>
    </Card>
          </Grid>


          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="camisa2"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/camisa2.jpg?alt=media&token=c33fe0c1-34f6-4f18-9e25-db31e28bcb41"
          title="camisa2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camisa 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="camisa3"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/casmisa3.jpg?alt=media&token=72b3dafd-8378-48df-b1fd-b87f07597bd9"
          title="camisa3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camisa 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         comprar
        </Button>
        <Button size="small" color="primary">
         $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="pantalon1"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/casmisa3.jpg?alt=media&token=72b3dafd-8378-48df-b1fd-b87f07597bd9"
          title="pantalon1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pantalon 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="pantalon2"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/pantalon2.jpg?alt=media&token=b3eab6e5-bd81-4e40-acb4-c238843a12b4"
          title="pantalon2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pantalon 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="pantalon3"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/pantalon3.jpg?alt=media&token=6d9a3726-1ad9-48dd-9bef-40baeed22e35"
          title="pantalon3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Pantalon 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="remera1"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/remera%202.jpg?alt=media&token=12dfe7e0-6f01-4fa3-9974-7b87c95a7ce8"
          title="remera1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Remera 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="remera2"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/remera1.jpg?alt=media&token=a6533a5e-8c10-4419-b6bc-451bfb0b9b46"
          title="remera2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Remera 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="remera3"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/remera3.jpg?alt=media&token=9dcc30b2-4dfe-45b2-b5eb-647c8ac074c0"
          title="remera3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Remera 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
          $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>

          <Grid item xs={4}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="zapatillas1"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/jhon-database.appspot.com/o/zapas2.jpg?alt=media&token=53d56777-b994-43aa-bf1e-a8f22039fda7"
          title="zapatillas1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Zapas 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
            camisa.... color.... talla... stock... descripcion....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          comprar
        </Button>
        <Button size="small" color="primary">
        $$$
        </Button>
      </CardActions>
    </Card>

   
          </Grid>



    </Grid>
   
  
</div>
 



</Link>



   
  );
}