import CartIcon from '@/icons/cart.svg?react';
import EmptyStarIcon from '@/icons/gray-star.svg?react';
import LikeIcon from '@/icons/like.svg?react';
import StatIcon from '@/icons/statistic.svg?react';
import FilledStarIcon from '@/icons/yellow-star.svg?react';
import {
  Button,
  CardActions,
  CardHeader,
  IconButton,
  PaperPropsVariantOverrides,
  Rating,
  Stack,
  SvgIcon,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { FC, ReactNode } from 'react';

type Status = 'success' | 'error';

interface HeaderCardProps {
  Icon: ReactNode;
  Content: ReactNode;
  status: Status;
}

interface ProductCardProps {
  image: string;
  reviews: number;
  title: string;
  oldPrice: string;
  price: string;
  header?: HeaderCardProps;
  allowCardAction?: boolean;
  variant?: OverridableStringUnion<
    'elevation' | 'outlined',
    PaperPropsVariantOverrides
  >;
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  reviews,
  title,
  oldPrice,
  price,
  allowCardAction,
  variant = 'elevation',
  header: { Icon, Content, status = 'success' } = {} as HeaderCardProps,
}) => {
  return (
    <Card variant={variant} sx={{ position: 'relative' }}>
      <CardHeader
        title={Content}
        avatar={Icon}
        action={
          allowCardAction ? (
            <CardActions
              disableSpacing
              sx={{
                marginTop: -1,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <IconButton>
                <SvgIcon component={LikeIcon} inheritViewBox color="inherit" />
              </IconButton>
              <IconButton color="inherit">
                <SvgIcon component={StatIcon} inheritViewBox />
              </IconButton>
            </CardActions>
          ) : null
        }
        sx={{
          position: 'relative',
          paddingBottom: '0',
          height: '30px',
          '.MuiCardHeader-title': {
            color: status === 'success' ? 'success.main' : 'error.main',
            fontSize: '12px',
            lineHeight: 2,
            fontWeight: 400,
          },
          '.MuiCardHeader-avatar': {
            marginRight: 1,
          },
        }}
      />
      <CardMedia
        component="img"
        height="160rem"
        image={image}
        sx={{
          maxWidth: '100%',
          objectFit: 'contain',
          padding: '1.25rem',
        }}
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
        <Typography
          variant="subtitle1"
          color="textPrimary"
          fontWeight={400}
          height={80}
          marginBlock={1}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
          }}
        >
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
          height={25}
        >
          {price}
        </Typography>
        {allowCardAction ? (
          <CardActions sx={{ paddingInline: 0 }}>
            <Button
              variant="outlined"
              color="primary"
              title="Add to cart"
              startIcon={
                <SvgIcon
                  component={CartIcon}
                  inheritViewBox
                  sx={{ width: '20px' }}
                />
              }
              sx={{
                display: 'flex',
                columnGap: 1,
                margin: '0 auto',
                width: '100%',
              }}
            >
              Add To Cart
            </Button>
          </CardActions>
        ) : null}
      </CardContent>
    </Card>
  );
};

export { ProductCard };
