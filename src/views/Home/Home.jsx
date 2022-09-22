import './home.css'
import { NavBar } from "../../components/NavBar/NavBar"
import { NavBarVertical } from '../../components/NavBarVertical/NavbarVertical'

export const Home = () => {
    return(
        <div className='homeContainer'>
            <NavBar/>
            
            <div className='bodyContainer'>
                <NavBarVertical></NavBarVertical>  
                <div className='bodyWithoutNavbarContainer'>hola</div>
               
            </div>
        </div>
    )
}