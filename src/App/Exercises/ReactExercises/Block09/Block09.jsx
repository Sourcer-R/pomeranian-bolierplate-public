import React from 'react';
import { Click5 } from '../Click5/Click5';

import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { MoreThanA } from '../MoreThanA/MoreThanA';

import './style.css';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <Click5 />
      <hr />
      <SeeOrNot />
      <br />
      <MoreOrLess />
      <br />
      <MoreThanA />
    </div>
  );
}
