import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button `
   width: 100%;
   max-width: 400px;
   max-height: 36px;
   padding: 15px 0px;
   margin: 20px 0;
   background-color: #FFCE0C;
   border-radius: 4px;
   border: none;
   font-family: 'Open Sans';
   line-height: 4px;
   font-weight: bold;
   font-size: 12px;
   &:hover {
      background: #FFD73B;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12);
   }
   &:active{
      background: #FFC40C;
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.12);
      color: black;
   }
   &:focus{
      background: #FFCE0C;
      border: 1px solid #FFFBEA;
      box-shadow: 0px 1px 10px #FFD73B;
   }
   &:disabled{
      opacity: 0.5;
   }
`
export const Input = styled.input `
   width: 100%;
   max-width: 400px;
   height: 36px;
   margin: 6px 0;
   padding: 0 5px;
   background: #FFFFFF;
   font-size: 14px;
   font-family: 'Open Sans';
   border: 1px solid #D6DCE9;
   box-sizing: border-box;
   border-radius: 4px;
`
export const Form = styled.form `
   width: 100%;
   max-width: 500px;
   height: 100%;
   background: #FFFFFF;
   padding: 36px 48px;
`
export const FormContainer = styled.div `
   max-width: 424px;
   width: 100%;
   height: 100%;
   margin: 0 auto ;
`
export const LinkOnLogin = styled(NavLink) `
   font-family: 'Open Sans';
   font-size: 14px;
   color: #3167BA;
   text-decoration: none;
`
export const LinkText = styled.p `
   font-family: 'Open Sans';
   font-size: 14px;
`
export const TitleRegister = styled.h2 `
   font-family: 'Open Sans';
   font-weight: bold;
   font-size: 18px;
   color: #404064;
   margin-bottom: 18px;
`