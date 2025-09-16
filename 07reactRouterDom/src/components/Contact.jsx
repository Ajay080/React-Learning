
import { use } from "react";
import { NavLink } from "react-router-dom";
const Contact=()=>{
    return(
        <>
            <h1>Contact Page</h1>
            <NavLink to="/helpdesk" state={{userId:12345, name:"Ajay"}}>
                <button className='bg-red-500'>MOVE TO  HELP DESK</button>
            </NavLink>
        </>
    )
}

export default Contact;
