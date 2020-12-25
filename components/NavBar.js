import Link from 'next/link';

const NavBar = () => (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="#">BitCoin Today</a>
      

  
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        <Link href='/'>
                            <a className="nav-link">Home
                                <span className="sr-only">(current)</span>
                            </a></Link>

                    </li>
                
           
                    <li className="nav-item">
                        <Link href='/about'><a className="nav-link">About</a></Link>

                    </li>
            
                </ul>

        </nav>
    </div>


)

export default NavBar;