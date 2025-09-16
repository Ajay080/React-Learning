import { useNavigate, useLoaderData} from "react-router-dom"

const Home=()=>{
    // let welcomeMessage= useLoaderData();
    let welcomeMessage= "PPPPPPPPPPPPPPPPP"
    console.log("welcomeMessage:", welcomeMessage);
    let navigate= useNavigate();
    return(
        <>
            <h1 className='bg-green-500'>Home Page for {welcomeMessage}</h1>
            <button className='bg-red-500' onClick={()=>navigate('/about', {state:{userId:232}})}>Click Me</button>
        </>

    )
}
const WelcomeHome=()=>{
    return "Welcome to Home Page";
}
export default Home;
export {WelcomeHome};