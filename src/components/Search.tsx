const Search = () => {
  return (
    <div className="bg-white rounded-[8px] border-[1px] text-[14px] border-[#F3F3F3] p-[16px] flex gap-[10px]">
      <img
        className="w-[20px] h-[auto]"
        src="/assets/search.svg"
        alt="search"
      />
      <input
        placeholder="Serach by name, edu, exp or #tag"
        className="w-full outline-none"
      />
      <img className="w-[20px] h-auto" src="/assets/warning.svg" alt="search" />
    </div>
  );
};

export default Search;
