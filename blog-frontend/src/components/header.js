import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";

// This page represents the bar at the top of every page on the site
export function Header() {
    const {user, signIn, signOut} = useContext(UserContext);

    return(

        <nav className="navbar">
            <div className="container-fluid">
            <h3>| RH |</h3>

                {/*
                    We check if user sign in to let him Admin permissions.
                */}
                <a className="navbar-brand" href="#">{
                    user ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>
                }</a>
                <p>
                    {user && `Hello: ${user.userName}`}
                </p>


                {/*
                    The bar at the top of every page.
                */}
                <ul>
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/about">About Me</Link></li>
                    <li><Link className='nav-link' to="/posts">Posts</Link></li>
                    <li><Link className='nav-link' to="/contact">Contact</Link></li>
                    {user && (<li><Link className='nav-link' to="/admin">Admin</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}
