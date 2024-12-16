import SearchIcon from '@/icons/search.svg?react';
import {
  Autocomplete,
  IconButton,
  SvgIcon,
  TextField,
  styled,
} from '@mui/material';

const CssTextField = styled(TextField)({
  '.MuiFilledInput-root::before': {
    content: 'none',
  },
  '.MuiFilledInput-root::after': {
    content: 'none',
  },
});

const InputSearch = () => {
  return (
    <Autocomplete
      freeSolo
      options={[]}
      sx={{
        '.MuiInputBase-root': {
          paddingInline: 2,
          paddingBlock: 1,
          borderRadius: 8,
        },
        '.MuiFilledInput-input': {
          fontSize: '0.875rem',
          lineHeight: 1.5,
        },
      }}
      renderInput={(props) => (
        <CssTextField
          {...props}
          variant="filled"
          placeholder="Search entiere store here..."
          inputMode="search"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton edge="end" onClick={() => alert('click')}>
                  <SvgIcon
                    component={SearchIcon}
                    inheritViewBox
                    edgeMode="end"
                    color="primary"
                  />
                </IconButton>
              ),
            },
          }}
        />
      )}
    />
  );
};

export { InputSearch };
