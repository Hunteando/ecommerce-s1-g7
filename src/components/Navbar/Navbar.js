import Button from 'react-bootstrap/Button';
import NavBar from './Navbar.css';
function NavBar(props){
    return(
        <header>
            <div className="nav-top">
                <span class="material-symbols-outlined">
                    call 
                </span> +59 8981223455
                <span class="material-symbols-outlined">
                    mail
                </span>
                <button className="nav-toggle" data-toggle="">
                <span class="material-symbols-outlined">
                    local_mall
                 </span>MIS COMPRAS
                </button>
                <button className="nav-toggle" data-toggle="">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>MIS FAVORITOS
                </button>
                <button className="nav-toggle" data-toggle="">
                <span class="material-symbols-outlined">
                     person
                </span>MI CUENTA
                </button>
                <button className="nav-toggle" data-toggle="">
                <span class="material-symbols-outlined">
                    input
                </span>
                </button>
            </div>
        </header>
    )
}
export default NavBar;