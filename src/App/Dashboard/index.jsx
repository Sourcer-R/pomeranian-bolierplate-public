import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { BookIcon } from '../Components/Icons/BookIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';
import { StackIcon } from '../Components/Icons/StackIcon';
import { useState } from 'react';

import './styles.css';
import personalCard from '../Images/tiles/personalcard.svg';
import profilePicture from '../Images/profilePicture.jpg';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <EditIcon />,
      // icon: <img src={statusUp} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <BookIcon />,
      // icon: <img src={personalCard} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <StackIcon />,
      // icon: <img src={personalCard} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <FaqIcon />,
      // icon: <img src={personalCard} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);
  return (
    <div className="dashboard">
      <header>
        <h2>👋🏼 Hej, tu Mariam!</h2>
        <p>
          Ponizej znajdziesz najwazniejsze informacje na temat mojej
          dzialalnosci
        </p>
      </header>

      <div className="links">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              sectionTitle={card.sectionTitle}
              description={card.description}
              icon={card.icon}
              link={card.link}
            />
          );
        })}
      </div>
      {/* <aside className="about-me"> */}
        <div className="profile">
          <img
            className="profile-picture"
            src={profilePicture}
            alt="my photo"
          />
          <h2>Mariam Yunis</h2>
          <p>Gdańsk</p>
        </div>
        <div className="info">
          <p>e-mail:</p>
          <p style={{ marginBottom: '20px' }}>
            <a href="mailto:mariam8yunis@gmail.com">mariam8yunis@gmail.com</a>
          </p>
          <p>telefon:</p>
          <p>
            <a href="tel:518130491">+48 518 130 491</a>
          </p>
        </div>
      {/* </aside> */}
    </div>
  );
};
