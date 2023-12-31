import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn, googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
   .then(res => {
    console.log(res.user)
    e.target.reset()
    navigate('/')
})
    .catch(err => console.log(err.message))
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>
                  New to Auth Moha-Milon?{" "}
                  <Link to="/register" className="link">
                    Register Here
                  </Link>
                </p>
              </form>
              <button onClick={handleGoogleSignIn} className="btn btn-neutral">login with google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
