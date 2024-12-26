import { NewsCard } from '@/components/ui/news-card';
import { Grid2 } from '@mui/material';

import Poster1 from '@/images/news-cards/poster-1.jpg';
import Poster2 from '@/images/news-cards/poster-2.jpg';
import Poster3 from '@/images/news-cards/poster-3.jpg';
import Poster4 from '@/images/news-cards/poster-4.jpg';
import Poster5 from '@/images/news-cards/poster-5.jpg';
import Poster6 from '@/images/news-cards/poster-6.jpg';
import Poster7 from '@/images/news-cards/poster-7.jpg';
import Poster8 from '@/images/news-cards/poster-8.jpg';
import Poster9 from '@/images/news-cards/poster-9.jpg';

const NewsCards = () => {
  return (
    <Grid2 container gridColumn={6} columnGap={1.5} rowGap={2}>
      <Grid2 width="220px">
        <NewsCard poster={Poster1} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster2} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster3} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster4} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster5} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster6} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster7} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster8} />
      </Grid2>
      <Grid2 width="220px">
        <NewsCard poster={Poster9} />
      </Grid2>
    </Grid2>
  );
};

export { NewsCards };
