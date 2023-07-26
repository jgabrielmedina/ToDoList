import {Outlet, Link } from "react-router-dom"


export const Layout = ( ) => {
    return(
        <>
              <div>
              <Link to="/">Home</Link>
              <Link to="/completadas">Tareas completadas</Link>
              <Outlet/>
              </div>
              
        </>
    )
}