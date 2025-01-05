import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  TextField,
} from '@mui/material';

import ExpandMoreIcon from '@/icons/arrow-up.svg?react';

const EstimateTax = () => {
  return (
    <Accordion elevation={0} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>Estimate Shipping and Tax</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          variant="standard"
          size="small"
          fullWidth
          placeholder="Enter your destination to get a shipping estimate."
        />
      </AccordionDetails>
    </Accordion>
  );
};

export { EstimateTax };
