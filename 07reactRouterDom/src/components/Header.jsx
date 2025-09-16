import {NavLink} from 'react-router-dom';
const Header = () =>{
    return(
        <div>
            <button><NavLink to="/home" className={({isActive})=> isActive? 'bg-red-500':""}>Home</NavLink></button>
            <button><NavLink to="/about" className={({isActive})=> isActive? 'bg-red-500':""}>About</NavLink></button>
            <button><NavLink to="/contact" className={({isActive})=> isActive? 'bg-red-500':""}>Contact</NavLink></button>
            <button><NavLink to="/user/1?name='ajay'" className={({isActive})=> isActive? 'bg-red-500':""}>User</NavLink></button>
        </div>
    )
}
export default Header;