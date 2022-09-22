import './navbarvertical.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBarVertical = () => {

    const linkObject = [
        { title: 'Juegos',
          icon: ''
        },
        { title: 'Anime',
          icon: ''
        },
        { title: 'Peliculas',
          icon: ''
        },

    ]

    return(
        <div className='navBarVerticalContainer'>
            <Link className='navBarOptions' to='/'>
                <div className='leftColumnNavBarOptions'>
                    Prueba
                </div>
                <div className='rigthColumnNavBarOptions'>
                </div>
            </Link>
            <Link className='navBarOptions' to='/'>
                <div className='leftColumnNavBarOptions'>
                    Prueba
                </div>
                <div className='rigthColumnNavBarOptions'>
                    🍆
                </div>
            </Link>
            <Link className='navBarOptions' to='/'>
                <div className='leftColumnNavBarOptions'>
                    Prueba
                </div>
                <div className='rigthColumnNavBarOptions'>
                    🍆
                </div>
            </Link>
        </div>
    )
}