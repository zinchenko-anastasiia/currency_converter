import { Box, Stack, Typography } from '@mui/material';
import errorGif from '../../assets/error-loading.gif';

const ErrorMessage = () => (
  <Stack
    direction="column"
    spacing={2}
    alignItems="center"
    sx={{ width: '100%' }}
  >
    <Typography color="error" variant="h5">
      Упс, сталася помилка під час завантаження даних
    </Typography>
    <Box
      component="img"
      src={errorGif}
      alt="errorGif"
      sx={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    />
  </Stack>
);

export default ErrorMessage;
