import './styles2.css';
import { useState } from 'react';

export const Excerise = () => {

  const [ratings] = useState([
    {
      location: 'Cape Verde Islands',
      player_id: '#100120',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands ',
      player_id: '#100122',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands',
      player_id: '#100124',
      rating: 3,
    },
    {
      location: 'United States of America',
      player_id: '#100126',
      rating: 3,
    },
    {
      location: 'United States of America',
      player_id: '#100128',
      rating: 3,
    },
  ]);








  return (
    <>




      <table className='table2' cellSpacing="0">

        <thead>
          <tr>
            {Object.keys(ratings[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}</tr>


        </thead>

        <tbody>

          {ratings.map((table) => (
            <tr key={table.location}>
              <td> {table.location}</td>
              <td > {table.player_id}</td>
              <td> {table.rating}</td>



            </tr>
          ))}



        </tbody>
      </table>
    </>
  );
};
