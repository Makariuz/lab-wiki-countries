
import { Link } from "react-router-dom"

export function NavBar(){
    return(  
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
        <Link className="navbar-brand" to="/">Lab Wiki Countries</Link>
    </div>
    </nav>
    )
}