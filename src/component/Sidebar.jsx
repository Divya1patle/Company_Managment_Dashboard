
import { RxDashboard } from "react-icons/rx";
import { CiShoppingBasket } from "react-icons/ci";
import { RiBuilding2Fill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdBarChart } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <div className="p-5 shadow-lg">
        <ul >
          <Link to={'/'}><li><RxDashboard className="text-2xl ms-5 mb-2" /> Dashboard</li></Link>
          <li className="mt-7"><CiShoppingBasket className="text-2xl ms-5 mb-2" /> Orders</li>
          <Link to={'/company'}><li className="mt-7"><RiBuilding2Fill className="text-2xl ms-5 mb-2" />Companies</li></Link>
          <li className="mt-7"><GoPeople className="text-2xl ms-5 mb-2" />Clients</li>
          <li className="mt-7"><GoPeople className="text-2xl ms-5 mb-2" />Employees</li>
          <li className="mt-7"><LiaPeopleCarrySolid className="text-2xl ms-5 mb-2" />Vendors</li>
          <li className="mt-7"><MdBarChart className="text-2xl ms-5 mb-2" />Bilings</li>
          <li className="mt-7"><MdSupportAgent className="text-2xl ms-5 mb-2" />Support</li>
          <li className="mt-7"><AiOutlineSetting className="text-2xl ms-5 mb-2" />Master Settings</li>
        </ul>
      </div>
    </>
  )
}
export default Sidebar;