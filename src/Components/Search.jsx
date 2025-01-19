import { IoIosSearch } from "react-icons/io";
function Search({ query, setQuery }) {
  return (
    <>
      <div className="rounded-md w-full md:w-[35%] border border-black/70 flex items-center justify-between h-10">
        <input
          className="p-2 bg-transparent pl-3 w-full outline-none"
          type="text"
          placeholder="Search by first or last name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="w-12 h-full  border-l border-black/70 flex items-center justify-center"
          onClick={() => {
            setQuery(query);
          }}
        >
          <IoIosSearch className="text-xl" />
        </button>
      </div>
    </>
  );
}

export default Search;
