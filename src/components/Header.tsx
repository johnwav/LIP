import { useState } from "react";
import { dropDownItems, headerIcons } from "../data";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="m-8 grid grid-cols-[1fr,3fr] gap-8">
      <div>
        <h3 className="text-[20px] text-lBlue font-[600] ">
          London Internship Program
        </h3>
        <small className="text-[12px] font-[300]">London</small>
      </div>
      <div className="flex items-start justify-between">
        <Dropdown
          dropDownItems={dropDownItems}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        />
        <div className="flex items-center ">
          <div className="flex gap-2 border-r-[2px] border-[#EEE] pr-[8px]">
            {headerIcons.map((icon) => (
              <div className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-lg">
                <img className="w-6 h-auto" src={icon.img} alt={icon.name} />
              </div>
            ))}
          </div>

          <div className="flex gap-[1px] pl-[8px] ">
            <div className="py-2 px-4 bg-lBlue rounded-l-lg text-[13px] text-white flex items-center">
              Move to Video Interview I
            </div>
            <div className="px-[10px] py-3 rounded-r-lg bg-lBlue ">
              <img src="/assets/expand_more.svg" alt="expand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
