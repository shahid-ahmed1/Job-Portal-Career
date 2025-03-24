import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const {user,signOutUser}= useContext(AuthContext)
    const links =<>
   
<li><NavLink to='/'>Home</NavLink></li>
{
  user && <li><NavLink to='/add-job'>Add Job</NavLink></li>
}



{
  user &&  <li><NavLink to={`/my-application`}>My Application</NavLink></li>
}
{
  user && <li><NavLink to='/my-posted-jobs'>My Posted Jobs</NavLink></li>
}


</>
const handleSignOut =()=>{
  signOutUser()
  .then(()=>{
    console.log('succesful sign out ')
  })
}
    return (
        <div>
        <div className="navbar pt-1   shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
        </ul>
      </div>
      <div className='flex gap-3 items-center'>
     
      {/* <img className='rounded-2xl w-12' src={logo} alt="" /> */}
      <a className="btn btn-ghost text-xl">Job Portal Career</a>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ?<> {user.email}
        
        <button onClick={handleSignOut} className='btn ml-4'>SignOut</button></> :<> <Link to='/register'><button className='btn ml-4'>Register</button></Link>
  
        <Link to='/login'><button className='btn ml-4'>SignIn</button></Link></>
      }
 
    </div>
  </div>
          </div>
    );
};

export default Navbar;