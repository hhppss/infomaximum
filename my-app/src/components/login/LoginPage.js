import React, { useState, useEffect, useCallback } from 'react'
import {useHistory} from 'react-router'
import {useQuery} from "@apollo/client"
import $ from 'jquery'
import { GET_ALL_USER } from '../../query/user'
import { useAlert } from 'react-alert'
import { 
  Button,
  Input,
  Form,
  FormContainer,
  LinkOnRegist
} from './LoginPage.style'


export const LoginPage = () => {
  const history = useHistory()
  const {data, loading} = useQuery(GET_ALL_USER)
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const alert = useAlert()

  useEffect(() => {
    if(!loading){
      setUsers(data.getAllUser)
    }
  }, [data])

  const handleLogin = useCallback(
    async e => {
      let content = [];
      e.preventDefault()
      try {
        users.map(user => {
          if((email == user.email) && (password == user.password)){
            history.push('/list') 
          } else {
            return alert.error("User not found")
          }
        })
      } catch (error) {
        alert(error)
      }
    }
  )

  return (
    <div className="BackgroundGradient">
      <div className="Content">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="151"
      height="48"
      fill="none"
      viewBox="0 0 151 48"
    >
      <path
        fill="#fff"
        d="M16.87 4.355h-5.124a5.986 5.986 0 10-7.39 7.39v8.068a5.986 5.986 0 000 11.513v4.807a5.986 5.986 0 103.26 0v-4.807a5.993 5.993 0 004.123-4.122h5.124a11.421 11.421 0 100-22.842l.008-.007zM3.269 5.992a2.718 2.718 0 115.435 0 2.718 2.718 0 01-5.435 0zm5.443 35.901a2.718 2.718 0 110-.007v.007zM5.993 28.291a2.718 2.718 0 110-5.435 2.718 2.718 0 010 5.435zm10.878-4.355h-5.125a5.993 5.993 0 00-4.122-4.123v-8.068a5.993 5.993 0 004.122-4.122h5.125a8.16 8.16 0 110 16.32v-.007zM47.301 10.92c4.285 0 6.636 2.52 6.636 7.842 0 5.322-2.4 7.877-6.636 7.877a5.189 5.189 0 01-3.854-1.412v5.789a1.764 1.764 0 11-3.53 0V12.882a1.765 1.765 0 113.53 0 4.834 4.834 0 013.854-1.963zm-.459 3.006c-2.287 0-3.529 1.638-3.529 4.871 0 3.233 1.207 4.835 3.53 4.835 2.322 0 3.529-1.637 3.529-4.835s-1.236-4.87-3.523-4.87h-.007zM60.092 13.044a4.073 4.073 0 013.53-2.118 1.666 1.666 0 010 3.332c-2.26 0-3.53 1.412-3.53 3.628v6.826a1.764 1.764 0 11-3.53 0v-11.83a1.764 1.764 0 113.53 0v.162zM73.461 26.64c-4.412 0-7.157-2.52-7.157-7.843 0-5.322 2.745-7.878 7.157-7.878s7.158 2.5 7.158 7.878c0 5.379-2.746 7.842-7.158 7.842zm0-12.707c-2.35 0-3.593 1.638-3.593 4.871 0 3.233 1.243 4.835 3.593 4.835 2.35 0 3.593-1.637 3.593-4.835s-1.242-4.878-3.593-4.878v.007zM89.612 10.92a6.74 6.74 0 015.33 2.258 1.58 1.58 0 01-1.208 2.584 1.574 1.574 0 01-1.207-.558 3.727 3.727 0 00-2.908-1.278c-2.287 0-3.53 1.765-3.53 4.836 0 3.07 1.243 4.87 3.53 4.87a5.195 5.195 0 003.233-1.306c.28-.218.626-.333.981-.324a1.575 1.575 0 011.016 2.78 7.842 7.842 0 01-5.23 1.864c-4.447 0-7.059-2.548-7.059-7.877 0-5.33 2.605-7.85 7.052-7.85zM104.358 10.92c5.527 0 6.536 4.235 6.536 6.507 0 1.208 0 2.62-1.998 2.62h-8.075c0 2.35 1.666 3.43 3.826 3.43a5.592 5.592 0 003.233-1.017c.3-.229.667-.355 1.045-.36a1.533 1.533 0 011.538 1.54 1.617 1.617 0 01-.557 1.206 7.695 7.695 0 01-5.266 1.8c-4.546 0-7.355-2.449-7.355-7.913.007-5.004 2.626-7.814 7.073-7.814zm-3.41 6.176h6.473c0-1.603-.918-3.17-3.042-3.17a3.19 3.19 0 00-3.431 3.17zM116.675 15.232c0 2.421 8.04 1.306 8.04 6.7 0 3.07-2.619 4.644-5.979 4.644-2.823 0-4.941-1.278-5.788-2.287a1.528 1.528 0 01-.395-1.017 1.585 1.585 0 011.567-1.567c.376.003.738.144 1.016.396a5.382 5.382 0 003.593 1.34c1.469 0 2.422-.395 2.422-1.305 0-2.647-8.012-1.278-8.012-6.833 0-2.944 2.449-4.384 5.456-4.384 2.323 0 4.384.883 5.294 2.026.229.274.345.625.325.981a1.585 1.585 0 01-1.567 1.567 1.779 1.779 0 01-1.108-.458 4.732 4.732 0 00-2.944-1.045c-1.2 0-1.92.423-1.92 1.242zM133.969 10.92c5.528 0 6.537 4.235 6.537 6.507 0 1.208 0 2.62-1.998 2.62h-8.068c0 2.35 1.666 3.43 3.826 3.43a5.592 5.592 0 003.233-1.017c.3-.229.667-.355 1.045-.36a1.537 1.537 0 011.09.45 1.532 1.532 0 01.448 1.09 1.632 1.632 0 01-.557 1.206 7.703 7.703 0 01-5.266 1.8c-4.546 0-7.355-2.449-7.355-7.913.007-5.004 2.618-7.814 7.065-7.814zm-3.43 6.176h6.473c0-1.603-.918-3.17-3.043-3.17a3.186 3.186 0 00-3.16 1.897 3.187 3.187 0 00-.27 1.273zM144.106 8.632a1.732 1.732 0 113.466 0v2.746h1.468a1.473 1.473 0 011.041 2.513 1.473 1.473 0 01-1.041.43h-1.504v7.906a1.205 1.205 0 00.777 1.1c.148.057.307.084.466.08a1.538 1.538 0 010 3.07c-2.908 0-4.708-1.864-4.708-4.447v-7.715h-.756a1.47 1.47 0 010-2.944h.756l.035-2.739z"
      ></path>
    </svg>
      </div>
      <div className="reportContent">
          <FormContainer >
            <Form>
              <Input onInput={e => setEmail(e.target.value)} name="email" placeholder='Электронная почта'/>
              <div className="password">
                <Input onInput={e => setPassword(e.target.value)} name="password" type="password" placeholder='Пароль' className="password-input"/>  
                <a href="#" className="password-control-login"> </a>
              </div>
              {
                ((!password) || (!email)) ? <Button disabled="true" onClick={handleLogin}>Войти</Button> : <Button onClick={handleLogin}>Войти</Button>
              }
              <LinkOnRegist to="/register">Зарегистрироваться</LinkOnRegist>
            </Form>
          </FormContainer>
      </div>
    </div>
  )
}

$('body').on('click', '.password-control-login', function(){
  if ($('.password-input').attr('type') == 'password'){
    $(this).addClass('view');
    $('.password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('.password-input').attr('type', 'password');
  }
  return false;
});

export default LoginPage

