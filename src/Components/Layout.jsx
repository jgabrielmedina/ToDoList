import {Outlet, Link } from "react-router-dom"


export const Layout = ( ) => {
    return(
        <>
              <div className="header">
                <div><Link to="/">Inicio</Link></div>
              <div>   <Link to="/completadas">Tareas completadas</Link></div>
              </div>
              <Outlet/>
        </>
    )
}