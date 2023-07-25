import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

const drawerWidth = 300;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Admin: FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Админ панель
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Партнерские статьи'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Сохранить статью
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField fullWidth label="Компания" />
            <TextField fullWidth label="Заголовок" sx={{ mt: 2 }} />
            <TextField fullWidth label="Подводка" multiline maxRows={3} sx={{ mt: 2 }} />
            <TextField fullWidth label="Текст" multiline maxRows={6} sx={{ mt: 2 }} />
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={6}>
                <Button variant={'contained'} color={'success'}>
                  Сохранить
                </Button>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant={'contained'} color={'error'} onClick={handleOpen}>
                  Удалить
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <CardMedia component="img" height="194" src={'https://mui.com/static/images/cards/paella.jpg'} />
            <CardContent>
              <input type="file" />
            </CardContent>
          </Grid>
        </Grid>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Вы точно хотите удалить?
              <Box
                sx={{
                  width: 300,
                }}
              ></Box>
              <Stack spacing={{ xs: 1, sm: 2 }}>
                <Button variant={'contained'} color={'success'} style={{ marginLeft: '2px' }}>
                  Да
                </Button>
                <Button variant={'contained'} color={'error'} style={{ marginLeft: '2px' }} onClick={handleClose}>
                  Нет
                </Button>
              </Stack>
            </Typography>
          </Box>
        </Modal>
        <Typography variant="h4" gutterBottom marginTop={4}>
          Партнерский материал
        </Typography>
        <Grid container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <Grid item xs={3} key={el}>
              <Card>
                <CardActionArea>
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
      </Box>
    </Box>
  );
};
