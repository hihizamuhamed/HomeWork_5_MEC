import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <ul style={{display:"flex",listStyleType:'none'}}>
            <li style={{marginRight:'15px'}}>
                <Link to ='/' className="link">Home</Link>
            </li>
            <li style={{marginRight:'15px'}}>
                <Link to ='/about'className="link">About</Link>
            </li>
            <li style={{marginRight:'15px'}}>
                <Link to ='/contact'className="link">Contact</Link>
            </li>
            <li style={{marginRight:'15px'}}>
                <Link to ='/Users'className="link">Users</Link>
            </li>
            <li>
                <Link to ='/NotFound'className="link">NotFound</Link>
            </li>
        </ul>
    )
}