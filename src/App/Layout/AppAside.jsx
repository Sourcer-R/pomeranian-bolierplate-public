import { NavLink } from 'react-router-dom';

import './styles/aside.css';

import { FaqIcon } from '../Components/Icons/FaqIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { BookIcon } from '../Components/Icons/BookIcon';




export function AppAside() {
  return (

    <aside>
      <nav>
        <ul>
          
            <NavLink className= "aside-row" to="dashboard">
              <HouseIcon className='menu-icon'/>
              
              Dashboard</NavLink>
          

              <NavLink className="aside-row"to="cv">
              <PersonalCardIcon className='menu-icon'/>
                Moje CV</NavLink>
         
            <NavLink className="aside-row" to="blocks">
             
               <ElementIcon className='menu-icon'/>
              Bloki</NavLink>
         
          
            <NavLink className="aside-row" to="exercises">
            <EditIcon className='menu-icon'/>
              
              Ćwiczenia</NavLink>
         
          
              <NavLink className="aside-row" to="kalendarz">
                <CalendarIcon className='menu-icon'/>
                
                Kalendarz</NavLink>

            <NavLink className="aside-row" to="blog">

              <BookIcon className='menu-icon' />
             
              Blog</NavLink>
         
          
            <NavLink className="aside-row" to="faq">
              <FaqIcon className="menu-icon" />
              FAQ
            </NavLink>
         
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
