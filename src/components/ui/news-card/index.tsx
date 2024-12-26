import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface CardProps {
  poster: string; // Image source URL (JPG/PNG) or local file path (string)
}

const NewsCard: FC<CardProps> = ({ poster }) => {
  return (
    <Card variant="elevation" elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
            px={1.5}
            textAlign="center"
          >
            If you’ve recently made a desktop PC or laptop purchase, you might
            want to consider adding peripherals to enhance your home office
            setup, your gaming rig, or your business workspace...
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            color="secondary"
            fontSize={'0.7rem'}
            mt={2}
          >
            01.09.2020
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { NewsCard };
