import React from 'react';
import Navbar from '../src/components/Navbar/index';
import DocumentationsHeroCard from '../src/components/HeroCard/DocumentationsHeroCard/index';

const documentations = () => {
  return (
    <div>
        <Navbar />
        <DocumentationsHeroCard />
    <div style={{disply:'flex',flexDirection:'column',padding:'30px'}}>
        <h3>Technical specs</h3>
        <h3>User guide</h3>
    </div>
    </div>
  )
}

export default documentations;