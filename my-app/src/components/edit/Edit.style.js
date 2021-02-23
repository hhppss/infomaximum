import styled from 'styled-components'

export const EditContainer = styled.div ` 
   height: 100vh;
   width: 100%;
   padding: 60px 28px;
   background-color: #EBF2FB;
`
export const EditTop = styled.div ` 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   min-height: 48px;
`
export const EditTitle = styled.h1 `
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'Open Sans';
   font-weight: bold;
   font-size: 26px;
   color: #404064;
`
export const EditBottom = styled.div `
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   height: 288px;
   background-color: #fff;
   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
   border-radius: 2px;
   padding: 24px;
`
export const EditNameInput = styled.ul `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   list-style: none;
   padding-right: 7%;
`
export const NameLi = styled.li `
   font-family: 'Open Sans';
   font-size: 14px;
   line-height: 19px;
   color: #999999;
   padding: 14px 0;
`
export const EditInputBlock = styled.form `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   max-width: 435px;
   width: 100%;
`
export const EditInput = styled.input ` 
   height: 36px;
   max-width: 435px;
   min-width: 100%;
   margin: 5px 0;
   border: 1px solid #D6DCE9;
   box-sizing: border-box;
   border-radius: 4px;
   font-family: 'Open Sans';
   font-size: 14px;
   padding: 0 7px;
   color: #6879BB;
`