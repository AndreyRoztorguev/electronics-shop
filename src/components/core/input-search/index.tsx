import SearchIcon from '@/icons/search.svg?react';
import { MUITheme } from '@/theme/MUI.Theme';
import {
  Autocomplete,
  IconButton,
  SvgIcon,
  SxProps,
  TextField,
  styled,
} from '@mui/material';
import { FC } from 'react';

const CssTextField = styled(TextField)({
  '.MuiFilledInput-root::before': {
    content: 'none',
  },
  '.MuiFilledInput-root::after': {
    content: 'none',
  },
});

interface InputSearchProps {
  placeholder: string;
  sx?: SxProps<MUITheme>;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder, sx }) => {
  const handleSearchClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    console.log('click search');
  };
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={[]}
      clearIcon={
        <SvgIcon
          onClick={() => alert('click')}
          component={SearchIcon}
          inheritViewBox
          color="primary"
        />
      }
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
        '.MuiFilledInput-root .MuiAutocomplete-endAdornment': {
          right: '10px',
        },
        ...sx,
      }}
      renderInput={(props) => (
        <CssTextField
          {...props}
          variant="filled"
          placeholder={placeholder}
          inputMode="search"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={handleSearchClick}>
                  <SvgIcon
                    component={SearchIcon}
                    inheritViewBox
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
