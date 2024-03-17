import './header.css';
import profileimage from './profile.jpg'


function Header() {
    return (
        <div class="header">
            <img src={profileimage} alt="loading..."></img>
            <button>LogIn</button>
            <button>LogOut</button>
        </div>
    )
}

export default Header;