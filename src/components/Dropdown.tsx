import { IdropDownItems } from "../types";

const Dropdown = ({
  isDropdownOpen,
  toggleDropdown,
  dropDownItems,
}: {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  dropDownItems: IdropDownItems[];
}) => {
  return (
    <div>
      {!isDropdownOpen && (
        <div>
          <div
            className="shadow text-lBlue rounded-2xl z-[1001] inline-flex justify-between w-full min-w-[320px] gap-x-1.5 bg-white px-4 py-2 text-sm font-[500] hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            Opportunity Browsing
            <svg
              className="-mr-1 h-5 w-5 text-lBlue"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}

      {isDropdownOpen && (
        <>
          <div>
            <div
              className="relative shadow z-[99999] text-lBlue rounded-t-2xl inline-flex justify-between w-full min-w-[320px] gap-x-1.5 bg-white px-4 py-2 text-sm font-[500] hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Opportunity Browsing
              <svg
                className="-mr-1 h-5 w-5 text-lBlue"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div
            className="absolute z-[1001] right-70 mt-1 w-full max-w-[320px]  origin-top-right rounded-b-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {dropDownItems.map((item, index) => (
              <div key={index} className="py-" role="none">
                <a
                  href="#"
                  className={` ${
                    index !== dropDownItems.length - 1
                      ? "border-b-[1px] border-[#F3F3F3]"
                      : ""
                  }  text-gray-700  flex items-center justify-between px-4 h-[72px]  py-2 text-sm`}
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {item.name}
                  <div className="px-[10px] py-[2px] rounded-2xl bg-lLighterGrey">
                    {item.number}
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="overlay" onClick={toggleDropdown}></div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
