import { Box, CircularProgress, Container, CssBaseline } from '@mui/material';
import Content from '../components/Content';
import Header from '../components/Header';
import useFetchCurrencyData from './hooks/useFetchCurrencyData';
import ErrorMessage from '../components/ErrorMessage';

const MainPage = () => {
  const [isLoading, data, isError] = useFetchCurrencyData();

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
        ) : isError ? (
          <ErrorMessage />
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
