
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="shadow-lg grid grid-flow-col ">
        <h2 className="text-xl font-bold p-4">vState </h2>
        <div className="flex justify-end gap-3 p-1">
          <IoIosNotificationsOutline className="text-2xl mt-4" />
          <FaRegCircleUser className="text-xl mt-4 " />
        </div>
      </div>
    </>
  )
}
export default Header;