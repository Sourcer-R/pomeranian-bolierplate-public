import { useState } from 'react';
import './styles.css';

export const Exercise = () => {
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
      <p
        className={`${theme}${font} ${
          shouldAnimate ? 'animation' : ''
        } wrapper`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <button onClick={() => setShouldAnimate(true)}> Animuj!</button>
      <button onClick={() => setShouldAnimate(false)}> Stop animacji!</button>
      <button onClick={() => handleFontChange('font-poppins')}>
        Change the font: poopins
      </button>

      <button onClick={() => handleFontChange('font-lato')}>
        Change the font:lato
      </button>

      <button onClick={() => handleThemeChange('light-theme')}>
        Change theme: light
      </button>

      <button onClick={() => handleThemeChange('dark-theme')}>
        Change theme: dark
      </button>
    </>
  );
};
