import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardContent, CardMedia, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

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
export const AdminArticleItem: FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Редактировать статью' : 'Создать статью'}
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
            {id && (
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant={'contained'} color={'error'} onClick={handleOpen}>
                  Удалить
                </Button>
              </Grid>
            )}
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
                width: 100,
              }}
            ></Box>
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <Button variant={'contained'} color={'success'}>
                Да
              </Button>
              <Button variant={'contained'} color={'error'} onClick={handleClose}>
                Нет
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
