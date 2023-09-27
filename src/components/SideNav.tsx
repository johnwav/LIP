// import { sideNavItems } from '../data';

import { sideNavItems } from "../data";

const SideNav = () => {
  return (
    <div className="w-[72px] h-[100vh] shadow">
      <div className="flex flex-col items-center justify-between h-full py-3">
        <div>
          <div className="w-[48px] h-[48px]  flex items-center mb-[8px] justify-center">
            <div className="w-[32px] h-[32px] rounded-full bg-lGrey"></div>
          </div>
          {sideNavItems.map((item, index) => (
            <div
              key={index}
              className={`w-[48px] h-[48px] flex items-center justify-center my-[24px] ${
                item.name === "home" && "active"
              }`}
            >
              <img
                className="w-[24px] h-[24px]"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <img
              className="w-[24px] h-[24px]"
              src="/assets/settings.svg"
              alt="settings"
            />
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <img
              className="w-[24px] h-[24px]"
              src="/assets/usersmall.svg"
              alt="settings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
