import { Box, CircularProgress, Container, CssBaseline } from '@mui/material';
import Content from '../components/Content';
import Header from '../components/Header';
import useFetchCurrencyData from './hooks/useFetchCurrencyData';

const MainPage = () => {
  const [isLoading, data] = useFetchCurrencyData();

  return (
    <>
      <CssBaseline />
      <Container fixed>
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Header currencyData={data} />
            <Content currencyData={data} />
          </>
        )}
      </Container>
    </>
  );
};

export default MainPage;
