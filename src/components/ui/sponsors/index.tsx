import { Box, Grid2 } from '@mui/material';
import { ReactNode } from 'react';

import Sponsor1 from '@/images/sponsors/sponsor-1.svg?react';
import Sponsor2 from '@/images/sponsors/sponsor-2.svg?react';
import Sponsor3 from '@/images/sponsors/sponsor-3.svg?react';
import Sponsor4 from '@/images/sponsors/sponsor-4.svg?react';
import Sponsor5 from '@/images/sponsors/sponsor-5.svg?react';
import Sponsor6 from '@/images/sponsors/sponsor-6.svg?react';
import Sponsor7 from '@/images/sponsors/sponsor-7.svg?react';

const Item = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const Sponsors = () => {
  return (
    <Grid2 container columns={{ xl: 7 }}>
      <Grid2 width="195px">
        <Sponsor1 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor2 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor3 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor4 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor5 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor6 />
      </Grid2>
      <Grid2 width="195px">
        <Sponsor7 />
      </Grid2>
    </Grid2>
  );
};
export { Sponsors };
