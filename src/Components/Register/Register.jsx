import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate()
    const { createUser, googleSignUp } = useContext(AuthContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
    .then(res => {
       

        updateProfile(res.user, {
         displayName
        })
        .then(()=> {
          console.log('successfully updated profile')
          navigate('/')
        })
        .catch(err => console.error(err))

         console.log(res.user);

    })
    .catch(err => console.log(err.message))
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
    .then((res)=>{
      console.log(res.user)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
 
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    name="name"
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </p>
              </form>
              <button onClick={handleGoogleSignUp} className="btn btn-outline">
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
