import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

const {user , logOut , loading} = useContext(AuthContext)

const routers = (
  <>
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "btn btn-sm"
          : isActive
          ? "btn btn-sm duration-500 bg-black text-white"
          : "btn btn-sm"
      }
      to="/"
    >
      Home
    </NavLink>

    {!user ? (
      <>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-sm"
              : isActive
              ? "btn btn-sm duration-500 bg-black text-white"
              : "btn btn-sm"
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-sm"
              : isActive
              ? "btn btn-sm duration-500 bg-black text-white"
              : "btn btn-sm"
          }
          to="/register"
        >
          Register
        </NavLink>
      </>
    ) : (
      <>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-sm"
              : isActive
              ? "btn btn-sm duration-500 bg-black text-white"
              : "btn btn-sm"
          }
          to="/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-sm"
              : isActive
              ? "btn btn-sm duration-500 bg-black text-white"
              : "btn btn-sm"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </>
    )}
  </>
);


const routes = [
  { path: "/", name: "Home" , user },
  { path: "/login", name: "Login" , user },
  { path: "/register", name: "Register" , user },
  { path: "/orders", name: "Orders" , user},
];

const handleLogOut = () => {
  logOut()
  .then(()=> console.log('Logged out successfully'))
  .catch(err => console.error(err))
}

    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {routes.map((route, idx) => (
                  <NavLink key={idx} to={route.path}>
                    {route.name}
                  </NavLink>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Auth</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-5 menu-horizontal px-1">{routers}</ul>
          </div>
          <div className="navbar-end">
            <div
              className={` ${
                loading && "hidden"
              } flex items-center gap-2 flex-row-reverse`}
            >
              {user?.photoURL ? (
               <img src={user.photoURL}  className="w-10 rounded-full" alt="" />
              ) : user?.displayName && (
                <a className="btn bg-red-500 text-white rounded-full">
                  {user?.displayName.slice(0, 1)}
                </a>
              )}
              {user?.email ? (
                <a className="btn btn-sm" onClick={handleLogOut}>
                  SignOut
                </a>
              ) : (
                <Link className="btn" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;