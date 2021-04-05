import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "ohh!.. let's go to beach",
        iconName: "sun"
    },
    winter: {
        text: 'Burr!.. it is chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 5 && month < 10) {
        return lat < 0 ? 'winter' : 'summer';
    }
    else return lat > 0 ? 'winter' : 'summer'
}

const SeasonDisplay = (props) => {
    let season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`} >
            <i class={`icon-left huge ${iconName} icon`}></i>
            <h1>{text}<span>*Your Latitude:{props.lat.toFixed(1)} and {new Date().toLocaleString('default', { month: 'long' })} so it is {season}</span></h1>
            <i class={`icon-right huge ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;