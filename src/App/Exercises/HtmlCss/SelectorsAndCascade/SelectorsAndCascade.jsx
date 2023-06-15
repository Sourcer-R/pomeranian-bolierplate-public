import './styles.css';
import React from 'react';

export function SelectorsAndCascade() {
  return (
    <div>
      <h1>Blok 10 - 13.06.2023</h1>
      <div className="mydiv-1">
        {' '}
        Jestem bardzo unikalnym elementem 1<p>Paragraf 1</p>
      </div>
      <div className="mydiv-2"> Jestem bardzo unikalnym elementem 2</div>
      <div className="mydiv-3">
        {' '}
        Jestem bardzo unikalnym elementem 3
        <span>
          blablabla 3.1
          <p> 🔮</p>
        </span>
        <span>blablabla 3.2</span>
        <span>blablabla 3.3</span>
      </div>
      <div className="mydiv-4">
        {' '}
        Jestem bardzo unikalnym elementem 4
        <span>
          blablabla 4.1
          <p> Let me tell you something🔮</p>
        </span>
        <span>blablabla 4.2</span>
        <span>blablabla 4.3</span>
      </div>
      <div className="mydiv-5"> Jestem bardzo unikalnym elementem 5</div>
      <p>blablabla 5.2</p>
      <p>blablabla 5.3</p>
      <br />
    </div>
  );
}
