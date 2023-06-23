import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';

import './styles.css';
import personalCard from '../Images/tiles/personalcard.svg';
export const Dashboard = () => {

  const [availableCards, setAvailableCards] = useState([{ sectionTitle: 'Moje CV', icon: <img src={personalCard} alt="business card resume" />, description: 'podgląd cv wraz z doświadczeniem', link: '/cv', }, { sectionTitle: ' Ćwiczenia', icon: <img src={personalCard} alt="business card resume" />, description: 'wszystkie wykonane ćwiczenia', link: '/excercise', }, { sectionTitle: 'Blog', icon: <img src={personalCard} alt="business card resume" />, description: 'wpisy blogowe o technologii front-end', link: '/blog', }, { sectionTitle: 'Tech stack', icon: <img src={personalCard} alt="business card resume" />, description: 'stack technologiczny realizowany na kursie', link: '/tech', }, { sectionTitle: 'FAQ', icon: <img src={personalCard} alt="business card resume" />, description: 'odpowiedzi na najczęstsze pytania', link: '/faq', },]);
  return (
    <div className="dashboard">
      <header>
        <h2> Hej, tu Mariam!</h2>
        <p>Ponizej znajdziesz najwazniejsze informacje na temat mojej dzialalnosci</p></header>

      <div className="links">


        {availableCards.map((card) => {
          return (<DashboardCard
            sectionTitle={card.sectionTitle} description={card.description} icon={card.icon} link={card.link} />);

        })}



      </div>
      <aside className='about-me'>

      </aside>
    </div>
  );
};
