import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({ heroes, startCombat }) => {
  return (
    <div className="hero-column">
    <div className="container-card">
      {heroes.map((hero) => (
        <div className='card'>
          <HeroCard key={hero.id} hero={hero} startCombat={startCombat} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default HeroList;
