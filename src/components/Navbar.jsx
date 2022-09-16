import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import '../styles/Navbar.css';

const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search){
            return
        }else{
            navigate(`/search?q=${search}`);
            setSearch("");
        }
    };


    return (
        <div>
            <nav id="navbar">
                <h2>
                <Link to="/"><BiCameraMovie/> Api-Movies</Link>
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                        placeholder="Buscar filme" 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search} 
                    />
                    <button type="submit">
                        <BiSearchAlt2/>
                    </button>
                </form>
            </nav>
        </div>
    );
}

export default Navbar;