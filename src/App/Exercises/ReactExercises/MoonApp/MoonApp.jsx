import './styles.css';
import React from 'react';
// import MoonPhase from './MoonPhase';
import { useState } from 'react';



export function MoonApp() {
  const [phase, setPhase] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChangePhase = (event) => {
    const newPhase = parseFloat(event.target.value);
    setPhase(newPhase);
  };

  const moonPhaseName = () => {
    if (phase === 0 || phase === 1) return 'Nowy księżyc';
    if (phase < 0.25) return 'Pierwsza kwadra';
    if (phase === 0.25) return 'Pierwsza kwadra';
    if (phase < 0.5) return 'Druga kwadra';
    if (phase === 0.5) return 'Pełnia';
    if (phase < 0.75) return 'Trzecia kwadra';
    return 'Czwarta kwadra';
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="moon-phase-app">
      <h1>Faza księżyca</h1>
      <div className="moon-phase-display">
        <div
          className="moon"
          //  style={{ transform: rotate(${phase * 360}deg) }}
        />
      </div>
      <div className="phase-slider">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={phase}
          onChange={handleChangePhase}
        />
      </div>
      <p>{moonPhaseName()}</p>

      <div className="calendar">
        <h2>Kalendarz</h2>
        <p>Wybrana data: {formatDate(selectedDate)}</p>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(event) => setSelectedDate(new Date(event.target.value))}
        />
      </div>
    </div>
  );
}