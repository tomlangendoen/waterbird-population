import React from 'react';

import './styles.scss';

const TabInfo = ({ info, extraSection }) =>
  <div className="l-tab-info">
    {info.map(info => (
      <div className="content">
        <h2>{info.title || info.intro || null}</h2>
        {info.description}
      </div>
    ))}
    {extraSection && <div>{info.extraSection}</div>}
  </div>

export default TabInfo;
