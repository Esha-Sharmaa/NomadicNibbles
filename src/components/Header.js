import { Link } from "react-router-dom";
import logo from "../images/orange.png"
const Header = () => {
    return (
      <header className="flex justify-between h-18 shadow-md px-8 ">
        <div className="">
          <Link to="/" className="flex items-center justify-center">
                    <img className="w-14" src={logo} alt="logo" />
                    <span className="m-0 p-0 font-sans font-bold text-base"> Nomadic Nibbles</span>
          </Link>
        </div>
      </header>
    );
}

export default Header;
