
import { FaBars, FaBell, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
const Nav: React.FC = () => {




    return (

        <nav className="flex items-center p-5  px-4 py-2 mt-6 justify-between ">
            <div className=" text-3xl md:text-lg lg:text-3xl  text-black ">{<FaBars />}</div>

            <h1 className="font-[Pacifico] text-3xl md:text-lg lg:text-3xl ">Romio Romio</h1>

            <div className="flex  gap-2">
                <FaBell className="cursor-pointer text-3xl md:text-lg lg:text-3xl  text-black" />

                <Link to="/cart">
                    <FaShoppingCart className="cursor-pointer text-3xl md:text-lg lg:text-3xl  text-black" />
                </Link>
            </div>

        </nav>
    )
}
export default Nav