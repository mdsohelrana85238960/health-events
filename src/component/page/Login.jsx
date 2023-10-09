
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/FireBase";


const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
      console.log(result.user);
      swal("Good job!", "Login Successfully! With Google ", "success");
    })
    .catch(error => {
      console.error(error);
    })
  }

  const [ showPassword, setShowPassword] = useState(false)
  const {singIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  
  const handleLogin = e => {
    e.preventDefault()
    // const form = new FormData(e.currentTarget);

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);



   
   
    // const email =form.get('email')
    // const password =form.get('password')
   singIn(email,password)

    .then(result =>{
        console.log(result.user);
        navigate(location.state ? location.state : '/')
        swal("Good job!", "Login Successfully!", "success");
    })
    .catch(error =>{
        console.error(error);
        swal("Incorrect email and password ", "Please enter the correct email and password", "error");
    })
}



  
  
    return (
       
      <div className="card flex-shrink-0 w-full mx-auto max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleLogin}  className="card-body">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type= {showPassword ? "text":"password"}placeholder="Password" name="password" className="input input-bordered" required />
          <span className="relative bottom-8 left-[350px]" onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-4" >Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p> 

        <button onClick={handleGoogleSingIn} className="flex py-4 justify-center items-center"> <FcGoogle className="text-4xl "></FcGoogle> </button>
      </div>
   
 
);
  
};

export default Login;