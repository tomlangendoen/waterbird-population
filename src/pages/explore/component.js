import React, { useState } from 'react';

import MapContainer from 'components/map/map-container';
import Search from 'components/search';
import DataControls from 'components/data-controls';
import DataResults from 'components/data-results';

import './styles.scss';

const ExplorePage = () => {

 return (
  <div className="l-explore">
    <div className="map-section">
      <MapContainer />
    </div>
    <div className="results-section">
      <Search />
      <DataControls />
      <DataResults />
    </div>
  </div>
 )
};

export default ExplorePage;
