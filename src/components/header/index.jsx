import logoImage from '../../assets/images/logo.png'
import '../../styles/header.sass'

function Header() {

    return(
        <>
        <nav className="navbar">
            <container className="container">

        <div className='navbar-brand'>
<img src={logoImage} />
        </div>
        
        <div className='navbar-menu' >
                       <div className='navbar-end' >
                <div className='navbar-item'>home</div>
            </div>
            </div>
            </container>
        </nav>
        </>
    )
    
}

export default Header