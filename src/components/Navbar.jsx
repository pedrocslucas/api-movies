import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
    return (
        <div>
            <nav id="navbar">
                <h2>
                <Link to="/"><BiCameraMovie/> Api-Movies</Link>
                </h2>
                
                <form>
                    <input type="text" name="" id="" placeholder="Buscar filme" />
                    <button type="submit">
                        <BiSearchAlt2/>
                    </button>
                </form>
            </nav>
        </div>
    );
}

export default Navbar;