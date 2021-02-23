import React, { useState, useEffect } from 'react'
import { CREATE_USER } from '../../mutation/user'
import { GET_ONE_USER } from '../../query/user'
import Header from '../header/Header'
import { Button } from '../login/LoginPage.style'
import { useMutation, useQuery } from '@apollo/client';
import {
   EditBottom,
   EditContainer,
   EditInput,
   EditInputBlock,
   EditNameInput,
   EditTitle, 
   EditTop,
   NameLi
} from './Edit.style'


export const Edit = () => {
   const {data, loading} = useQuery(GET_ONE_USER, {
      variables: {
         id: 1
      }
   })
   const [users, setUser] = useState([])
   const [fname, setFname] = useState('')
   const [lname, setLname] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [updateUser] = useMutation(CREATE_USER)

   useEffect(() => {
      if(!loading){
      setUser(data.getUser)
      }
   }, [data])

   const handleUpdate = (e) => {
      e.preventDefault()
      updateUser({
          update(proxy, result){
            console.log(result);
          },
          variables: {
              input: {
                  fname, lname, email, password
              }
          }
      }).then(({data}) => {
          console.log(data)
          setFname('')
          setLname('')
          setEmail('')
          setPassword('')
      })
   }

   return (
      <div>
         <Header>
         </Header>
         
         <EditContainer>
            <EditTop>
               <EditTitle><>{users.fname} {users.lname}</>. Редактирование</EditTitle>
        <Button className="ButtonSave" >Сохранить</Button>
            </EditTop>
            <EditBottom>
               <EditNameInput>
                  <NameLi>Имя</NameLi>
                  <NameLi>Фамилия</NameLi>
                  <NameLi>Электронная почта</NameLi>
                  <NameLi>Новый пароль</NameLi>
                  <NameLi>Повторите пароль</NameLi>
               </EditNameInput>
               <EditInputBlock>
                  <EditInput onChange={e => setFname(e.target.value)} type="text" name="fname" placeholder={users.fname}/>
                  <EditInput onChange={e => setLname(e.target.value)} type="text" name="lname" placeholder={users.lname}/>
                  <EditInput onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder={users.email}/>
                  <EditInput onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder={users.password}/>
                  <EditInput type="password" name="passwordDouble"/>
               </EditInputBlock>
            </EditBottom>
         </EditContainer>
      </div>
   )
}
