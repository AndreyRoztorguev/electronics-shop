import { MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;

// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//       backgroundColor: 'palette.background.default',
//     },
//   },
// };

const WorkingTime = () => {
  const daytimes = ['Fr-Sun: 11:00 AM - 3:00 PM', 'Mon-Thu: 9:00 AM - 5:30 PM'];

  const [daytime] = useState(daytimes[0]);
  return (
    <Select
      labelId="select-daytime-label"
      id="select-daytime"
      label="working daytime"
      variant="standard"
      MenuProps={{
        sx: {
          '.MuiMenu-list': {
            backgroundColor: 'background.default',
          },
        },
      }}
      sx={{
        '.MuiSelect-icon': {
          color: 'white',
        },
        '.Mui-focused:after': {
          borderBottom: 'none',
        },
      }}
      value={daytime}
      suppressHydrationWarning
      renderValue={(value) => {
        let days,
          time = null;
        const regex = /^([A-Za-z-]+\s*:\s*)\s*(.+)$/;
        const match = value.match(regex);
        if (match) {
          days = match[1];
          time = match[2];
        }
        return (
          <Stack flexDirection="row" alignItems="center" columnGap={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {days}
            </Typography>
            <Typography variant="caption" sx={{ color: 'white' }}>
              {time}
            </Typography>
          </Stack>
        );
      }}
    >
      {daytimes.map((item) => (
        <MenuItem key={item} disabled value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export { WorkingTime };
