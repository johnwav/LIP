const PlacementTag = ({tag}: {tag: string}) => {
  return (
    <div className="flex items-center justify-center text-[8px] py-[2px] px-[10px] bg-lSkie rounded-2xl text-lSea">
      {tag}
    </div>
  );
};

export default PlacementTag;
