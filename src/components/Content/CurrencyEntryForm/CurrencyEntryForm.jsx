import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const CurrencyEntryForm = ({
  title,
  selectValue,
  selectOnChange,
  selectMenuList,
  inputValue,
  inputOnChange,
}) => (
  <Stack direction="column" spacing={1}>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1}>
      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <Select value={selectValue} onChange={selectOnChange}>
            {selectMenuList?.map(({ id, text, value }) => (
              <MenuItem value={value} key={id}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TextField
        label="Введість суму"
        variant="outlined"
        value={inputValue}
        onChange={inputOnChange}
      />
    </Stack>
  </Stack>
);

CurrencyEntryForm.propTypes = {
  title: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  selectMenuList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  inputValue: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
};

export default CurrencyEntryForm;
