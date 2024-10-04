import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonOnClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonOnClick,
}) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default CardComponent;