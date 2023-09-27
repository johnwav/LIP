import { filters } from "../data";
const Filters = () => {
  return (
    <div className="rounded-[8px] bg-white">
      <div className=" border-b-[#F3F3F3] border-b-[1px] px-4 py-[18px] font-[500] text-[14px] flex justify-between items-center">
        Filters
        <span className="text-[12px] font-[300]">0 Selected</span>
      </div>
      {filters.map((filter, index) => (
        <div
          key={index}
          className={`px-4 py-[18px]  font-[500] text-[14px] flex justify-between items-center ${
            index < filters.length - 1 && "border-b-lLightGrey border-b-[1px]"
          }`}
        >
          <div className="flex gap-2 text-[14px] font-[400] ">
            <img className="w-4 h-auto" src="/assets/file.svg" alt="" />
            <span>{filter}</span>
          </div>
          <span className="text-[12px] font-[300]">
            <img src="/assets/down.svg" alt="" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Filters;
