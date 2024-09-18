import { Box, Card, CardContent, Stack } from '@mui/material';
import useCurrencySelectorList from './hooks/useCurrencySelectorList';
import useFormConfig from './hooks/useFormConfig';
import CurrencyEntryForm from './CurrencyEntryForm';
import PropTypes from 'prop-types';

const Content = ({ currencyData }) => {
  const selectorMenuList = useCurrencySelectorList();
  const formConfig = useFormConfig(currencyData, selectorMenuList);

  return (
    <Box component="section" sx={{ height: '50vh', width: '100%' }}>
      <Card sx={{ width: 1150 }}>
        <CardContent>
          <Stack
            direction="row"
            spacing={6}
            sx={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            {formConfig.map((item) => (
              <CurrencyEntryForm {...item} key={item.id} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

Content.propTypes = {
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

export default Content;
