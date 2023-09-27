import { Icandidate } from "../types";
import PlacementTag from "./PlacementTag";

const CandidateCard = (candidate: Icandidate) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" />
      <div className=" flex gap-6 items-center  w-full p-4">
        <div className="w-[56px] h-auto">
          <img src="/assets/pfp.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[14px] font-[600]">{candidate.name}</h3>
          <h4 className="text-[10px] font-[500]"> {candidate.location}</h4>
          <span className="text-[10px] font-[300]">{candidate.education}</span>
          <div className="flex gap-2 text-[8px] text-lBlue">
            {candidate.tags?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="flex">
            {candidate.placementTags?.map((tag, index) => (
              <PlacementTag key={index} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
