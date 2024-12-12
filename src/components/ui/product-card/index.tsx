import EmptyStarIcon from '@/icons/gray-star.svg?react';
import FilledStarIcon from '@/icons/yellow-star.svg?react';
import { Rating, Stack, SvgIcon } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface ProductCardProps {
  image: string;
  reviews: number;
  title: string;
  oldPrice: string;
  price: string;
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  reviews,
  title,
  oldPrice,
  price,
}) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 230 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{ objectFit: 'contain', padding: '20px' }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Stack flexDirection="row" alignItems="center" columnGap={1} mb={1}>
            <Rating
              name="read-only"
              value={reviews}
              readOnly
              size="small"
              icon={
                <SvgIcon
                  component={FilledStarIcon}
                  inheritViewBox
                  sx={{ width: '13px' }}
                />
              }
              emptyIcon={
                <SvgIcon
                  component={EmptyStarIcon}
                  inheritViewBox
                  sx={{ width: '13px' }}
                />
              }
            />
            <Typography
              component="legend"
              variant="overline"
              color="textSecondary"
              textTransform="capitalize"
            >
              Reviews ({reviews})
            </Typography>
          </Stack>
          <Typography variant="subtitle1" color="textPrimary" fontWeight={400}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            fontWeight={500}
            sx={{ textDecoration: 'line-through' }}
          >
            {oldPrice}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textPrimary"
            fontWeight={600}
            component="div"
          >
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { ProductCard };
