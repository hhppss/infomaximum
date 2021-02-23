import styled from 'styled-components'

export const Container = styled.div `
   width: 100%;
   min-height: 60px;
   padding: 0px 28px;
   display: flex;
   position: fixed;
   z-index: 20;
   flex-direction: column;
   justify-content: center;
   background-color: #fff;
   box-shadow: 0px 1px 10px rgba(104, 121, 187, 0.1);
`
export const BurgerButton = styled.a `
   height: 20px;
   width: 20px;
   border: none;
   background-color: transparent;
   z-index: 50;
   svg {
      fill: #6879BB;
   }
`
export const BurgerTitle = styled.p `
   font-family: 'Open Sans';
   font-weight: bold;
   font-size: 14px;
   color: #6879BB;
   margin-left: 14px;
`
export const BurgerContainer = styled.div `
   display: flex;
   flex-direction: row;
`
export const MenuTitle = styled.div `
   width: 100%;
   height: 60px;
   background: #535374;
   box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
   display: flex;
   flex-direction: row;
   align-items: center;
   p {
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 14px;
      color: white;
      margin-left: 63px;
      margin-bottom: 3px;
   }
`
export const MenuList = styled.ul `
   list-style: none;
   li, a {
      width: 100vw;
      height: 60px;
      color: white;
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-left: 15px;
      text-decoration: none;
   }
   li {
      padding-left: 28px;
   }
   svg {
      width: 24px;
      font-size: 20px;
   }
`

