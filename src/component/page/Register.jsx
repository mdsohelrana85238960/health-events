import { useContext, useState, } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";






const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [ showPassword, setShowPassword] = useState(false)

   

    const handleRegister = e => {
        e.preventDefault()
        // const form = new FormData(e.currentTarget);

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(photo,name,email,password);
        
        if (password.length < 6 ) {
          swal("Password should be at least 6 characters");
          return ;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#]).{6,}$/.test(password)){
          swal("Password should be at upper case and one special characters");
          return ;
        }

        // const email =form.get('email')
        // const password =form.get('password')
       createUser(email,password)
        .then(result =>{
            console.log(result.user);
            updateProfile(result.user,{
             displayName: name ,
             photoURL: photo,
            })
        })

        .then(() => {
          swal("Good job! User Created", "Login Successfully!", "success");
        })
      

        .catch(error =>{
            console.error(error);
            swal("error", "Check Your input", "error");
        })

       
    }
    return (
        <div>

            
            <div>
                
            <div className="card flex-shrink-0 mt-20 mx-auto w-full  max-w-md shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl pt-4">Please Register</h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
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
          <span className="relative bottom-8  left-[340px]" onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center pb-4" > have an account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p> 
    </div>

    
            </div>
        </div>
    );
};
export default Register;