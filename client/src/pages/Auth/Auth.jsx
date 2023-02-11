import React, { useState } from "react";
import './Auth.css';
import Logo from '../../img/logo.png';
import { useDispatch } from "react-redux";
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: ""
  })

  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      data.password === data.confirmpass 
      ? dispatch(signUp(data)) 
      : setConfirmPass(false)
    }else{
      dispatch(logIn(data))
    }

  }

  const resetForm = () => {
    setConfirmPass(true)
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: ""
    })
  }

  return (
    <div className='Auth'>
      {/* leftside */}
      <div className='a-left'>
        <img src={Logo} alt="" />
        <div className='Webname'>
          <h1>Connect</h1>
          <h6>Explore the idea through the world</h6>
        </div>
      </div>
      {/* rightside */}
      <div className='a-right'>
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder='First Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}

              />

              <input
                type="text"
                placeholder='Last Name'
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={data.lastname}

              />

            </div>
          )}

          <div>
            <input
              type="text"
              className='infoInput'
              name='username'
              placeholder='Usernames'
              onChange={handleChange}
              value={data.username}

            />
          </div>
          <div>
            <input
              type="password"
              className='infoInput'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={data.password}
            />

            {isSignUp && <input
              type="password"
              className='infoInput'
              name='confirmpass'
              placeholder='Confirm Password'
              onChange={handleChange}
              value={data.confirmpass}
            />}

          </div>

          <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
            *Confirm Password is not same
          </span>

          <div>
            <span style={{ fontSize: '12px', cursor: "pointer" }}
              onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
              {isSignUp ? " Already have an account. Login!" : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className='button infoButton' type='submit'>{isSignUp ? "SignUp" : "Login"}</button>
        </form>
      </div>
    </div>
  )
}


export default Auth