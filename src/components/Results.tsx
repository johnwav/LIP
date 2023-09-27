import CandidateCard from "./CandidateCard";
import { candidates } from "../data";

const Results = () => {
  return (
    <div className="bg-white px-[16px] py-[8px] min-h-full rounded-2xl ">
      <div className="flex items-center justify-between  text-[14px] py-4 border-b-[#F3F3F3] border-b-[1px]">
        <div className="flex items-center gap-8">
          <input type="checkbox" />
          <span className="text-lBlue font-[600]">247 Candidates</span>
        </div>

        <div className="flex">
          <span className="border-r-[#F3F3F4] border-r-[2px] pr-4 text-lBlue">
            Qualified
          </span>
          <span className="border-r-[#F3F3F4] border-r-[2px] px-4 flex gap-2">
            Task
            <div className="bg-[#F7F8FD] w-6 h-auto text-[10px] flex items-center justify-center rounded-full">
              25
            </div>
          </span>
          <span className="pl-4 flex gap-2">
            Disqualified
            <div className="bg-[#F7F8FD] w-6 h-auto text-[10px] flex items-center justify-center rounded-full">
              25
            </div>
          </span>
        </div>
      </div>

      {/* candidates cards */}

      <div className="max-h-screen overflow-auto">
        {candidates.map((candidate, index) => (
          <div
            className={`border-b-[1px] border-[#F3F3F3] ${
              index === candidates.length - 1 && "border-none"
            } `}
            key={index}
          >
            <CandidateCard
              education={candidate.education}
              location={candidate.education}
              name={candidate.name}
              placementTags={candidate.placementTags}
              tags={candidate.tags}
              key={index}
              //change key to id
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
