import { Card, CardActions, CardContent, Typography } from '@mui/material';

import BgImage from '@/images/custom-build-product.webp';

const CategoryCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          color="white"
          fontWeight={900}
          sx={{ marginTop: 'auto', width: 'min-content', textAlign: 'center' }}
        >
          Custome Builds
        </Typography>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Typography variant="caption" color="white">
            See All Products
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export { CategoryCard };
