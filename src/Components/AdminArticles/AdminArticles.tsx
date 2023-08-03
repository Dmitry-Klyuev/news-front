import React, { FC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

export const AdminArticles: FC = () => {
  return (
    <>
      <Button variant={'contained'} color={'success'}>
        <ListItemButton component={Link} to={'./create'}>
          Создать статью
        </ListItemButton>
      </Button>
      <Toolbar />
      <Grid container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
        {[1, 2, 3, 4, 5, 6].map((el, item) => (
          <Grid item xs={3} key={el}>
            <Card>
              <CardActionArea component={Link} to={`/admin/edit/${item}`}>
                <CardMedia component="img" height="140" image="https://mui.com/static/images/cards/paella.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
