import "./login.css";
import {useContext, useRef} from "react"
import {loginCall} from "../../apiCAlls";
import {AuthContext} from "../../Context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
    console.log(user);
  };
  // console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} disabled={isFetching}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required className="loginInput" ref={password} />
            <button className="loginButton">{isFetching ? <CircularProgress color="inherit" size="20px"/> :"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress color="inherit" size="20px"/> :"Create new Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
