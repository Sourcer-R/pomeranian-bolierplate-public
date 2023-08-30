import React from 'react';
import './MoonPhase.css';

const moonPhaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];

const MoonPhase = ({ phaseIndex }) => {
    const phaseName = moonPhaseNames[phaseIndex];
    const backgroundImage = `url('/path/to/moon-phases/${phaseIndex}.png')`;

    return (
        <div className="moon-phase">
            <div className="moon-image" style={{ backgroundImage }}></div>
            <div className="phase-name">{phaseName}</div>
        </div>
    );
};

export default MoonPhase;