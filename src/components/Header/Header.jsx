import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import truncateNumber from '../../utils/truncateNumber';
import appConst from '../../constants/appConst';
import PropTypes from 'prop-types';

const USD = appConst.USD;
const EUR = appConst.EUR;
const UKR = appConst.UKR;

const Header = ({ currencyData }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Курс валют
          </Typography>
          {currencyData?.length > 0 &&
            currencyData
              .filter(
                ({ currencyCodeA, currencyCodeB }) =>
                  (currencyCodeA === USD && currencyCodeB === UKR) ||
                  (currencyCodeA === EUR && currencyCodeB === UKR)
              )
              .map(({ rateSell, currencyCodeA }) => (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ margin: '0 16px' }}
                  key={currencyCodeA}
                >
                  {currencyCodeA === USD
                    ? `USD: ${truncateNumber(rateSell)}`
                    : `EUR: ${truncateNumber(rateSell)}`}
                </Typography>
              ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  currencyData: PropTypes.arrayOf(
    PropTypes.shape({
      currencyCodeA: PropTypes.number.isRequired,
      currencyCodeB: PropTypes.number.isRequired,
      date: PropTypes.number,
      rateSell: PropTypes.number.isRequired,
      rateBuy: PropTypes.number,
      rateCross: PropTypes.number,
    })
  ).isRequired,
};

export default Header;
