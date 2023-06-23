import { useState } from 'react';
import './styles.css';

export const Exercise2 = () => {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  function handleFontChange(newFont) {
    setShouldAnimate(true);
    setFont(newFont);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  }

  return (
    <>
      <div className="business-card">
        <h2>Masz pytania?</h2>

        <h2 className="animation">Nasz specjalista chetnie ci pomoze.</h2>

        <section>
          <p className="box">Eleonora Frąckiewiczówna</p>

          <p>Specjalista ds. finansowania</p>
        </section>
        <a className="anim" href="mailto:efrackiewoczowna@rtc.pl">
          efrackiewoczowna@rtc.pl
        </a>
        <a href="tel:500677543">500 677 543</a>
      </div>

      <div className="Lists">
        <h1>My pets</h1>
        <ol start="2" className="anim">
          <li> Lars </li>
          <li> 🐶 </li>
          <li> 🦮 </li>
        </ol>
      </div>
    </>
  );
};
