import React from 'react'
import $ from 'jquery';
import { IoPerson, IoPieChart } from 'react-icons/io5'
import { 
   BurgerButton, 
   BurgerTitle, 
   Container, 
   BurgerContainer,
   MenuTitle,
   MenuList
} from './Header.style'

export const Header = () => {
   
   return (
         <Container>
            <BurgerContainer>
               <BurgerButton className="header-burger">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     className="header-button"
                  >
                     <path
                     fillRule="evenodd"
                     d="M0 0h4v4H0V0zm6 6h4v4H6V6zm4-6H6v4h4V0zm2 0h4v4h-4V0zM4 6H0v4h4V6zm8 0h4v4h-4V6zm-8 6H0v4h4v-4zm2 0h4v4H6v-4zm10 0h-4v4h4v-4z"
                     clipRule="evenodd"
                     ></path>
                  </svg>
               </BurgerButton >
               <BurgerTitle>
                  Меню
               </BurgerTitle>
            </BurgerContainer>
            <div className="header-menu">
               <MenuTitle>
                  <BurgerTitle>
                     Proceset
                  </BurgerTitle>
               </MenuTitle>
               <MenuList>
                  <li><IoPerson/> <a href="/edit">Username</a></li>
                  <li><IoPieChart/> <a href="/list">Список процессов</a></li>
               </MenuList>
            </div>
         </Container>
         
   )
}

$(document).ready(function() {
   $('.header-burger').click(function(event) {
     $('.header-button, .header-menu').toggleClass('active');
     $('body').toggleClass('lock');
   })
 });

export default Header