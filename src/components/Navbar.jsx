import { NavLink } from "react-router-dom";
import "index.css";
const Navbar = () => {
  return (
    <div className="bg-blue-950 text-white py-4">
    <div className="flex justify-between items-center w-[80%] mx-auto ">
      <div>
        <h2 className="font-extrabold text-2xl">TEETH WIZARD</h2>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/treatments">All Treatments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/appointments">My appointments</NavLink>
      </div>
      <div>
        <p>
          <img src="" alt="" />
        </p>
        <button>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
