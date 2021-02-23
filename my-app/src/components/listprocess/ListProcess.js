import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import { BsClock, BsClockHistory, BsPeople, BsArrowCounterclockwise } from 'react-icons/bs'
import { TiFlowChildren } from 'react-icons/ti'
import {useQuery} from "@apollo/client";
import { GET_ALL_LIST } from '../../query/user'
import {
   ListCard,
   ListContainer,
   ListCardTitle, 
   ListCardContent,
   ListCardListLeft,
   ListCardListCenter,
   ListCardListRight
} from './ListProcess.style'



export const ListProcess = () => {

   const {data, loading, error, refetch} = useQuery(GET_ALL_LIST)

   const [lists, setLists] = useState([])


   useEffect(() => {
      if(!loading){
        setLists(data.getAllList)
      }
  }, [data])

   return (
      <div>
         <Header> 
         </Header>
         <ListContainer>
               <>
                  {lists.map(list => 
                     <ListCard>
                     <ListCardTitle>
                        <h2>{list.name}</h2>
                        <span>На карту процесса</span>
                     </ListCardTitle>
                     <ListCardContent>
                        <ListCardListLeft>
                           <li className="ListCardListLi"><BsArrowCounterclockwise/>{list.count}<br/><span>выполнено раз</span></li>
                        </ListCardListLeft>
                        <ListCardListCenter>
                           <li><p><BsClock /> {list.timeprocess}</p><br/><span>среднее время выполнения</span></li>
                           <li><p><BsClockHistory /> {list.timeactive}</p><br/><span>среднее активное время</span></li>
                           <li><p><BsPeople /> {list.inprocess}</p><br/><span>участвует в процессе</span></li>
                           <li><p><TiFlowChildren /> {list.employees}</p><br/><span>в процессе</span></li>
                           
                        </ListCardListCenter>
                        <ListCardListRight>
                           <li>Начало<span>11 ноября 2017</span></li>
                           <li>Окончание<span>6 ноября 2018</span></li>
                           <li>Загрузка<span>10 января 2018</span></li>
                        </ListCardListRight>
                     </ListCardContent>
                  </ListCard>
                     )}
               </>
         </ListContainer>
      </div>
   )
}

export default ListProcess;