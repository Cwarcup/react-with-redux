import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // must be in northern hemisphere
    // if true, then return summer. False returns winter. Ternary function.
    return lat > 0 ? 'summer' : 'winter';
  } else {
    //must be in south hemisphere
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

//new Date().getMonth() returns a number between 0 and 11.
// 0 starts at Jan, 11 means Dec.
// will say summer in Northern hemisphere is between 3-8
