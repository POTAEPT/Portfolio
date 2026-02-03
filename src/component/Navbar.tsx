import style from '../styles/navbar.module.css';

function Navbar(){
    return(
        <nav className='style.navbar'>
                <div className='style.logo'>
                    Portfolio
                </div>
                <ul className='style.menu'>
                    <li> 
                        <a href=""> HOME</a>
                    </li>
                    <li>
                        <a href="">Project</a>
                    </li>
                </ul>
        </nav>
    )
}