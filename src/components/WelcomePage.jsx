import { Link } from "react-router-dom";



const WelcomePage = () => {
    return (<>
        <header>
            <h1>welcome page</h1>
            <button> <Link to="/login">Login</Link></button>
            <button> <Link to="/register">Register</Link></button>
        </header>
    </>);
}

export default WelcomePage;