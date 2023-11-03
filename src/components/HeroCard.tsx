// HeroCard.js
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const HeroCard = ({ hero, startCombat }) => {
  return (
    <Card className='hero-card' 
    onClick={() => startCombat(hero)}
    >
      <CardContent style={{ color: 'white' }}>
        <img src={hero.images.sm} alt={hero.name} style={{ width: '150px', height: '150px' }} />
        <Typography style={{ textAlign: 'center'}} variant="h6" component="div">
          {hero.name}
        </Typography>
        <Typography style={{ textAlign: 'center'}} variant="h6" component="div">
        <RocketLaunchOutlinedIcon style={{ margin: '10px'}}/>
          {hero.powerstats.power}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hero.origin}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button
          size="small"
          onClick={() => startCombat(hero)}
          variant="contained"
          color="primary"
        >
          Desafiar
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default HeroCard;
