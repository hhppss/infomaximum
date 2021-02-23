import styled from 'styled-components'

export const ListContainer = styled.div `
   width: 100%;
   background-color: #EBF2FB;
   display: flex;
   padding: 70px 28px 20px 28px;
   flex-direction: column;
`
export const ListCard = styled.div `
   width: 100%;
   height: 100%;
   background-color: #fff;
   display: flex;
   flex-direction: column;
   margin: 14px 0px;
   justify-content: space-between;
   @media (max-width: 1092px) {
      min-height: 500px;
   }
`
export const ListCardTitle = styled.div `
   max-height: 60px;
   width: 100%;
   padding: 12px 24px;
   border-bottom: 1px solid #D6DCE9;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   h2 {
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 22px;
      color: #6879BB;
   }
   span {
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 12px;
      color: #6879BB;
   }
   @media (max-width: 640px) {
      min-height: 100px;
   }
`
export const ListCardContent = styled.div `
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 10px 28px 0px 28px;
   @media (max-width: 1092px) {
      flex-direction: column;
      flex-wrap: wrap;
   }
`
export const ListCardListLeft = styled.ul `
   list-style: none;
   width: 250px;
   padding: 0 4% 0 0;
   float: right;
   li {
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 23px;
      color: #535374;
      line-height: 23px;
   }
   span {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
      margin-left: 30px;
   }
   li .ListCardListLi {
      font-size: 26px;
   }
   svg {
      margin-right: 8px;
      line-height: 4px;
   }
   @media (max-width: 1092px) {
      width: auto;
      margin: 30px;
      text-align: center;
   }
`
export const ListCardListCenter = styled.ul `
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: space-around;
   list-style: none;
   width: 45%;
   height: 200px;
   li {
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #535374;
      width: 255px;
      padding: 10px;
      height: 67px;
      line-height: 12px;
   }
   span {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
   }
   p {
      position: relative;
      line-height: 13px;
   }
   svg {
      position: absolute;
      top: -3px;
      left: -25px;
      margin-right: 8px;
      line-height: 0px;
      color: #535374;
   }
   @media (max-width: 1092px) {
      height: auto;
      flex-direction: row;
      text-align: center;
      margin: 30px;
      svg {
         left: 0;
      }
   }
   @media (max-width: 640px) {
      width: 100%;
      margin: 5px;
   }
`
export const ListCardListRight = styled.ul `
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   min-height: 130px;
   li {
      width: 200px;
      font-family: 'Open Sans';
      font-size: 12px;  
      color: #999999;
   }
   span {
      float: right;
      font-family: 'Open Sans';
      font-size: 12px;
      color: #333333;
   }
`