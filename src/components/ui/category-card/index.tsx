import { Card, CardActions, CardContent, Typography } from '@mui/material';

import BgImage from '@/images/custom-build-product.jpg';

const CategoryCard = () => {
  return (
    <Card
      elevation={0}
      sx={{ backgroundImage: BgImage, backgroundSize: 'cover' }}
    >
      <CardContent>
        <Typography variant="h1" color="white">
          Custome Builds
        </Typography>
        <CardActions>
          <Typography>See All Products</Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export { CategoryCard };
